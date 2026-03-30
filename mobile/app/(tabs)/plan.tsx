import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SectionList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';
import { storage } from '@/src/services/storage';
import api from '@/src/services/api';

export default function PlanScreen() {
    const router = useRouter();
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            loadMealPlan();
        }, [])
    );

    const loadMealPlan = async () => {
        setLoading(true);
        try {
            const plan = await storage.getMealPlan();
            if (Object.keys(plan).length === 0) {
                setSections([]);
                setLoading(false);
                return;
            }

            // Fetch all recipes to map data
            const response = await api.get('/recipes');
            const allRecipes = response.data;
            const recipeMap = new Map(allRecipes.map((r: any) => [r.id, r]));

            // Convert Record<date, { lunch, dinner }> into sections array
            const formattedSections = Object.entries(plan)
                .flatMap(([date, types]: [string, any]) => {
                    const lunchRecipes = (types.lunch || [])
                        .map((id: number) => recipeMap.get(id))
                        .filter(Boolean)
                        .map((r: any) => ({ ...r, planType: 'lunch' }));
                        
                    const dinnerRecipes = (types.dinner || [])
                        .map((id: number) => recipeMap.get(id))
                        .filter(Boolean)
                        .map((r: any) => ({ ...r, planType: 'dinner' }));

                    const res = [];
                    if (lunchRecipes.length > 0) {
                        res.push({ title: `${date} - Bữa trưa`, data: lunchRecipes, dateStr: date, mealType: 'lunch' });
                    }
                    if (dinnerRecipes.length > 0) {
                        res.push({ title: `${date} - Bữa tối`, data: dinnerRecipes, dateStr: date, mealType: 'dinner' });
                    }
                    return res;
                })
                .sort((a, b) => {
                    if (a.dateStr !== b.dateStr) return a.dateStr.localeCompare(b.dateStr);
                    return a.mealType === 'lunch' ? -1 : 1;
                });

            setSections(formattedSections);
        } catch (error) {
            console.error('Error loading meal plan:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async (date: string, type: 'lunch' | 'dinner', recipeId: number) => {
        await storage.removeFromMealPlan(date, type, recipeId);
        loadMealPlan();
    };

    const renderRecipe = ({ item, section }: { item: any, section: any }) => (
        <TouchableOpacity 
            style={styles.recipeCard}
            onPress={() => router.push(`/recipe/${item.id}`)}
        >
            <View style={styles.cardContent}>
                <Text style={styles.recipeName}>🍲 {item.name}</Text>
                <Text style={styles.metaText}>⏱ {item.prep_time + item.cook_time} phút</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemove(section.dateStr, item.planType, item.id)} style={styles.removeBtn}>
                <Text style={styles.removeBtnText}>✕</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const renderHeader = ({ section }: { section: any }) => {
        const today = new Date().toISOString().split('T')[0];
        const isToday = section.dateStr === today;
        const mealPrefix = isToday ? 'Hôm nay' : section.dateStr;
        const mealSuffix = section.mealType === 'lunch' ? 'Trưa' : 'Tối';
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>🌞 {mealPrefix} - Bữa {mealSuffix}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Lịch nấu ăn</Text>
                <Text style={styles.headerSubtitle}>Lên kế hoạch ăn ngon mỗi ngày</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 50 }} />
            ) : sections.length === 0 ? (
                <Text style={styles.emptyText}>Chưa có kế hoạch nấu ăn nào.</Text>
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={renderRecipe}
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
    recipeCard: {
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
    cardContent: {
        flex: 1,
    },
    recipeName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    metaText: {
        fontSize: 13,
        color: colors.textLight,
    },
    removeBtn: {
        padding: spacing.sm,
    },
    removeBtnText: {
        color: colors.textLight,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
