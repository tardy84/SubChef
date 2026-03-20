import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SectionList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';
import { storage } from '@/src/services/storage';
import api from '@/src/services/api';

export default function ListScreen() {
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    useFocusEffect(
        useCallback(() => {
            generateShoppingList();
        }, [])
    );

    const generateShoppingList = async () => {
        setLoading(true);
        try {
            const plan = await storage.getMealPlan();
            const allIds = Object.values(plan).flat();
            const uniqueIds = Array.from(new Set(allIds));

            if (uniqueIds.length === 0) {
                setSections([]);
                setLoading(false);
                return;
            }

            const response = await api.post('/shopping/generate', {
                recipeIds: uniqueIds
            });

            const data = response.data; // Record<string, any[]>
            const formattedSections = Object.entries(data).map(([category, items]) => ({
                title: category,
                data: items as any[]
            })).sort((a, b) => a.title.localeCompare(b.title));

            setSections(formattedSections);
        } catch (error) {
            console.error('Error generating shopping list:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleCheck = (id: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderItem = ({ item, section, index }: { item: any, section: any, index: number }) => {
        const itemId = `${section.title}-${index}-${item.name}`;
        const isChecked = checkedItems[itemId] || false;
        
        return (
            <TouchableOpacity 
                style={[styles.itemCard, isChecked && styles.itemCardChecked]}
                onPress={() => toggleCheck(itemId)}
            >
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                    {isChecked && <Text style={styles.checkMark}>✓</Text>}
                </View>
                <View style={styles.itemContent}>
                    <Text style={[styles.itemName, isChecked && styles.itemNameChecked]}>{item.name}</Text>
                    <Text style={[styles.itemAmount, isChecked && styles.itemAmountChecked]}>{item.full_amount}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderHeader = ({ section: { title } }: { section: any }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Danh sách đi chợ</Text>
                <Text style={styles.headerSubtitle}>Tổng hợp từ lịch nấu ăn của bạn</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 50 }} />
            ) : sections.length === 0 ? (
                <Text style={styles.emptyText}>Chưa có nguyên liệu nào cần mua. Hãy thêm món vào lịch nấu ăn nhé!</Text>
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={renderItem}
                    renderSectionHeader={renderHeader}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        backgroundColor: colors.white,
        padding: spacing.xl,
        paddingTop: spacing.xxl + 20,
        borderBottomLeftRadius: borderRadius.lg,
        borderBottomRightRadius: borderRadius.lg,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: spacing.md,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: spacing.xs,
    },
    headerSubtitle: {
        fontSize: 14,
        color: colors.textLight,
    },
    emptyText: {
        textAlign: 'center',
        padding: spacing.xl,
        color: colors.textLight,
        fontSize: 16,
        lineHeight: 24,
    },
    listContainer: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.xxl,
    },
    sectionHeader: {
        backgroundColor: colors.background,
        paddingVertical: spacing.sm,
        marginTop: spacing.md,
        marginBottom: spacing.xs,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
    },
    itemCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    itemCardChecked: {
        backgroundColor: colors.grey100,
        opacity: 0.8,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.grey300,
        marginRight: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    checkMark: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 16,
        color: colors.text,
        flex: 1,
    },
    itemAmount: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.primary,
        marginLeft: spacing.sm,
    },
    itemNameChecked: {
        textDecorationLine: 'line-through',
        color: colors.textLight,
    },
    itemAmountChecked: {
        textDecorationLine: 'line-through',
        color: colors.textLight,
    }
});
