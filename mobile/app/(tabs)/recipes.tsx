import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';
import { useRouter } from 'expo-router';
import api, { getImageUrl } from '@/src/services/api';

const INGREDIENT_TYPES = [
    { label: 'Tất cả', value: '' },
    { label: 'Lợn', value: 'Lợn' },
    { label: 'Bò', value: 'Bò' },
    { label: 'Gà', value: 'Gà' },
    { label: 'Cá', value: 'Cá' },
    { label: 'Hải sản', value: 'Hải sản' },
    { label: 'Đậu phụ', value: 'Đậu hũ' },
    { label: 'Rau củ', value: 'Rau củ' },
];

export default function RecipesScreen() {
    const router = useRouter();
    const [recipes, setRecipes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [generatingImageId, setGeneratingImageId] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [maxTime, setMaxTime] = useState<number | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);

    useEffect(() => {
        fetchRecipes();
    }, [selectedCategory, maxTime, difficulty]);

    const fetchRecipes = async (showLoading = true) => {
        if (showLoading) setLoading(true);
        try {
            const params = new URLSearchParams();
            if (selectedCategory) params.append('main_ingredient', selectedCategory);
            if (maxTime) params.append('maxTime', maxTime.toString());
            if (difficulty) params.append('difficulty', difficulty);

            const url = `/recipes?${params.toString()}`;
            const response = await api.get(url);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            if (showLoading) setLoading(false);
        }
    };

    const handleGenerateImage = async (item: any) => {
        try {
            setGeneratingImageId(item.id);
            const prompt = `Vietnamese dish ${item.name}, ${item.description}, authentic Vietnamese cuisine, simple food photo for small thumbnail`;
            await api.post('/ai/generate-image', {
                recipeId: item.id,
                prompt: prompt
            });
            await fetchRecipes(false); // Refresh the list
        } catch (error) {
            console.error('Failed to generate image', error);
            alert('Lỗi tạo ảnh. Vui lòng kiểm tra API Key và thử lại.');
        } finally {
            setGeneratingImageId(null);
        }
    };

    const renderRecipe = ({ item }: { item: any }) => (
        <TouchableOpacity 
            style={styles.recipeCard}
            onPress={() => router.push(`/recipe/${item.id}`)}
        >
            <View style={styles.cardCover}>
                {item.image_url ? (
                    <>
                        <Image 
                            source={{ uri: getImageUrl(item.image_url) }} 
                            style={styles.cardImage} 
                        />
                        <TouchableOpacity 
                            style={styles.regenerateBtn} 
                            disabled={generatingImageId === item.id}
                            onPress={(e) => {
                                e.stopPropagation();
                                handleGenerateImage(item);
                            }}
                        >
                            <Text style={styles.regenerateBtnIcon}>🔄</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity 
                        style={styles.generateBtn} 
                        disabled={generatingImageId === item.id}
                        onPress={(e) => {
                            e.stopPropagation();
                            handleGenerateImage(item);
                        }}
                    >
                        <Text style={styles.generateBtnIcon}>🍌</Text>
                        <Text style={styles.generateBtnText}>Tạo ảnh AI</Text>
                    </TouchableOpacity>
                )}
                {generatingImageId === item.id && (
                    <View style={styles.loadingOverlay}>
                        <ActivityIndicator size="small" color={colors.primary} />
                    </View>
                )}
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.recipeName}>{item.name}</Text>
                <Text style={styles.recipeDesc} numberOfLines={2}>{item.description}</Text>
                <View style={styles.metaContainer}>
                    <Text style={styles.metaText}>⏱ {item.prep_time + item.cook_time} phút</Text>
                    <Text style={[styles.metaText, { color: colors.primary }]}>{item.main_ingredient}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Khám phá món ngon</Text>
                
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.filterContainer}
                    contentContainerStyle={styles.filterContent}
                >
                    {INGREDIENT_TYPES.map((cat) => (
                        <TouchableOpacity 
                            key={cat.value} 
                            style={[
                                styles.filterItem, 
                                selectedCategory === cat.value && styles.filterItemActive
                            ]}
                            onPress={() => setSelectedCategory(cat.value)}
                        >
                            <Text style={[
                                styles.filterText, 
                                selectedCategory === cat.value && styles.filterTextActive
                            ]}>
                                {cat.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Secondary filters: Time & Difficulty */}
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    style={[styles.filterContainer, { marginTop: -spacing.xs, marginBottom: spacing.md }]}
                    contentContainerStyle={styles.filterContent}
                >
                    <TouchableOpacity style={[styles.filterItem, maxTime === 30 && styles.filterItemActive]} onPress={() => setMaxTime(maxTime === 30 ? null : 30)}>
                        <Text style={[styles.filterText, maxTime === 30 && styles.filterTextActive]}>⏱ {'< 30p'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterItem, maxTime === 60 && styles.filterItemActive]} onPress={() => setMaxTime(maxTime === 60 ? null : 60)}>
                        <Text style={[styles.filterText, maxTime === 60 && styles.filterTextActive]}>⏱ {'< 1h'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.filterItem, difficulty === 'Dễ' && styles.filterItemActive]} onPress={() => setDifficulty(difficulty === 'Dễ' ? null : 'Dễ')}>
                        <Text style={[styles.filterText, difficulty === 'Dễ' && styles.filterTextActive]}>⚡ Dễ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterItem, difficulty === 'Vừa' && styles.filterItemActive]} onPress={() => setDifficulty(difficulty === 'Vừa' ? null : 'Vừa')}>
                        <Text style={[styles.filterText, difficulty === 'Vừa' && styles.filterTextActive]}>⚡ Vừa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterItem, difficulty === 'Khó' && styles.filterItemActive]} onPress={() => setDifficulty(difficulty === 'Khó' ? null : 'Khó')}>
                        <Text style={[styles.filterText, difficulty === 'Khó' && styles.filterTextActive]}>⚡ Khó</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 50 }} />
            ) : recipes.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Chưa có món ăn nào trong mục này.</Text>
                </View>
            ) : (
                <FlatList
                    data={recipes}
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
        color: colors.text,
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.md,
    },
    filterContainer: {
        marginBottom: spacing.sm,
    },
    filterContent: {
        paddingHorizontal: spacing.xl,
        paddingBottom: spacing.sm,
        gap: spacing.sm,
    },
    filterItem: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.round,
        backgroundColor: colors.grey100,
        borderWidth: 1,
        borderColor: colors.grey200,
        marginRight: spacing.xs,
    },
    filterItemActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    filterText: {
        color: colors.text,
        fontWeight: '500',
    },
    filterTextActive: {
        color: colors.white,
    },
    listContainer: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.xxl,
    },
    recipeCard: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        marginBottom: spacing.md,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        height: 120,
    },
    cardCover: {
        width: 100,
        backgroundColor: colors.grey100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardEmoji: {
        fontSize: 36,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    generateBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.xs,
    },
    generateBtnIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    generateBtnText: {
        fontSize: 10,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    regenerateBtn: {
        position: 'absolute',
        bottom: spacing.xs,
        right: spacing.xs,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 4,
    },
    regenerateBtnIcon: {
        fontSize: 16,
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'center',
    },
    recipeName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    recipeDesc: {
        fontSize: 13,
        color: colors.textLight,
        marginBottom: spacing.sm,
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    metaText: {
        fontSize: 12,
        color: colors.tertiary,
        fontWeight: '600',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl,
    },
    emptyText: {
        color: colors.textLight,
        fontSize: 16,
        textAlign: 'center',
    }
});
