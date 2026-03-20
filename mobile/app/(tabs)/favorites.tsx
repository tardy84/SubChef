import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';
import { storage } from '@/src/services/storage';
import api from '@/src/services/api';

export default function FavoritesScreen() {
    const router = useRouter();
    const [favorites, setFavorites] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        setLoading(true);
        try {
            const favIds = await storage.getFavorites();
            if (favIds.length === 0) {
                setFavorites([]);
                setLoading(false);
                return;
            }

            // Simple MVP implementation: fetch all recipes and filter local logic
            const response = await api.get('/recipes');
            const allRecipes = response.data;
            const favRecipes = allRecipes.filter((r: any) => favIds.includes(r.id));
            setFavorites(favRecipes);
        } catch (error) {
            console.error('Error loading favorites:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderRecipe = ({ item }: { item: any }) => (
        <TouchableOpacity 
            style={styles.recipeCard}
            onPress={() => router.push(`/recipe/${item.id}`)}
        >
            <View style={styles.cardContent}>
                <Text style={styles.recipeName}>❤️ {item.name}</Text>
                <Text style={styles.metaText}>⏱ {item.prep_time + item.cook_time} phút  -  ⚡ {item.difficulty}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Món ăn yêu thích</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 50 }} />
            ) : favorites.length === 0 ? (
                <Text style={styles.emptyText}>Bạn chưa lưu món ăn nào.</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderRecipe}
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
    },
    emptyText: {
        textAlign: 'center',
        padding: spacing.xl,
        color: colors.textLight,
        fontSize: 16,
    },
    listContainer: {
        paddingHorizontal: spacing.md,
    },
    recipeCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.sm,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    cardContent: {
        flexDirection: 'column',
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    metaText: {
        fontSize: 14,
        color: colors.textLight,
    }
});
