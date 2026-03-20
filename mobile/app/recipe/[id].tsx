import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Alert, Image } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import * as Haptics from 'expo-haptics';
import api, { getImageUrl } from '@/src/services/api';
import { storage } from '@/src/services/storage';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';

export default function RecipeDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [recipe, setRecipe] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [addedToPlan, setAddedToPlan] = useState(false);

    useEffect(() => {
        fetchRecipeDetail();
        checkFavorite();
    }, [id]);

    const checkFavorite = async () => {
        const favs = await storage.getFavorites();
        setIsFavorite(favs.includes(Number(id)));
    };

    const handleToggleFavorite = async () => {
        const added = await storage.toggleFavorite(Number(id));
        setIsFavorite(added);
    };

    const handleAddToPlan = () => {
        Alert.alert(
            'Lên lịch hôm nay',
            'Bạn muốn ăn món này vào bữa nào?',
            [
                { text: 'Hủy', style: 'cancel' },
                { text: 'Bữa trưa', onPress: () => confirmAddToPlan('lunch') },
                { text: 'Bữa tối', onPress: () => confirmAddToPlan('dinner') },
            ]
        );
    };

    const confirmAddToPlan = async (type: 'lunch' | 'dinner') => {
        const today = new Date().toISOString().split('T')[0];
        await storage.addToMealPlan(today, type, Number(id));
        
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setAddedToPlan(true);
        setTimeout(() => {
            setAddedToPlan(false);
        }, 2500);
    };

    const fetchRecipeDetail = async () => {
        try {
            const response = await api.get(`/recipes/${id}`);
            setRecipe(response.data);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (!recipe) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Không tìm thấy món ăn.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            {/* Header / Cover */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>← Trở về</Text>
                </TouchableOpacity>
                <View style={styles.coverImage}>
                    {recipe.image_url ? (
                        <Image 
                            source={{ uri: getImageUrl(recipe.image_url) }} 
                            style={styles.coverImagePic} 
                        />
                    ) : (
                        <Text style={{ fontSize: 60 }}>{recipe.category_name === 'Canh' ? '🍲' : recipe.category_name === 'Xào' ? '🍳' : '🥘'}</Text>
                    )}
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                    <Text style={styles.recipeDesc}>{recipe.description}</Text>
                    
                    <View style={styles.metaRow}>
                        <View style={styles.metaBadge}><Text style={styles.metaText}>⏱ {recipe.prep_time + recipe.cook_time} phút</Text></View>
                        <View style={styles.metaBadge}><Text style={styles.metaText}>⚡ {recipe.difficulty}</Text></View>
                        <View style={styles.metaBadge}><Text style={styles.metaText}>👤 {recipe.servings} người</Text></View>
                    </View>

                    <View style={styles.actionRow}>
                        <TouchableOpacity 
                            style={[styles.actionBtn, isFavorite && styles.actionBtnActive]} 
                            onPress={handleToggleFavorite}
                        >
                            <Text style={[styles.actionBtnText, isFavorite && styles.actionBtnTextActive]}>
                                {isFavorite ? '❤️ Đã lưu' : '🤍 Lưu món'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.actionBtn, 
                                { backgroundColor: addedToPlan ? '#4CAF50' : colors.secondary }
                            ]} 
                            onPress={handleAddToPlan}
                            disabled={addedToPlan}
                        >
                            <Text style={styles.actionBtnTextActive}>
                                {addedToPlan ? '✅ Đã thêm' : '📅 Thêm lịch'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Ingredients */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nguyên liệu cần chuẩn bị</Text>
                <View style={styles.ingredientsCard}>
                    {recipe.ingredients.map((ing: any, index: number) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.ingredientName}>• {ing.name}</Text>
                            <Text style={styles.ingredientAmount}>{ing.quantity} {ing.unit}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Instructions */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hướng dẫn thực hiện</Text>
                {recipe.instructions.map((step: string, index: number) => (
                    <View key={index} style={styles.stepCard}>
                        <View style={styles.stepNumberBadge}>
                            <Text style={styles.stepNumberText}>{index + 1}</Text>
                        </View>
                        <Text style={styles.stepText}>{step}</Text>
                    </View>
                ))}
            </View>
            
            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: borderRadius.xl,
        borderBottomRightRadius: borderRadius.xl,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: spacing.lg,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: spacing.md,
        zIndex: 10,
        padding: spacing.xs,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: borderRadius.md,
    },
    backButtonText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    coverImage: {
        height: 250,
        backgroundColor: colors.grey200,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: borderRadius.xl,
        borderTopRightRadius: borderRadius.xl,
        overflow: 'hidden',
    },
    coverImagePic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerContent: {
        padding: spacing.lg,
    },
    recipeName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: spacing.xs,
    },
    recipeDesc: {
        fontSize: 16,
        color: colors.textLight,
        marginBottom: spacing.md,
        lineHeight: 22,
    },
    metaRow: {
        flexDirection: 'row',
        gap: spacing.sm,
        flexWrap: 'wrap',
    },
    metaBadge: {
        backgroundColor: colors.background,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.round,
        borderWidth: 1,
        borderColor: colors.grey300,
    },
    metaText: {
        color: colors.text,
        fontSize: 13,
        fontWeight: '500',
    },
    actionRow: {
        flexDirection: 'row',
        marginTop: spacing.md,
        gap: spacing.sm,
    },
    actionBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.grey300,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.md,
        alignItems: 'center',
    },
    actionBtnActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    actionBtnText: {
        fontWeight: 'bold',
        color: colors.textLight,
    },
    actionBtnTextActive: {
        fontWeight: 'bold',
        color: colors.white,
    },
    section: {
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.lg,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.md,
    },
    ingredientsCard: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    ingredientRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey100,
    },
    ingredientName: {
        fontSize: 16,
        color: colors.text,
    },
    ingredientAmount: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: '600',
    },
    stepCard: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
        marginBottom: spacing.sm,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    stepNumberBadge: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    stepNumberText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    stepText: {
        flex: 1,
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
    }
});
