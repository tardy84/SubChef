import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import api from '@/src/services/api';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';

export default function SuggestionScreen() {
    const router = useRouter();
    const [ingredientsInput, setIngredientsInput] = useState('');
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSuggest = async () => {
        if (!ingredientsInput.trim()) return;
        setLoading(true);
        try {
            // Priority to real filter logic first, since AI is stubbed
            const response = await api.get(`/suggestions/filter?ingredients=${encodeURIComponent(ingredientsInput)}`);
            
            // If API returns empty, fallback to AI stub endpoint
            if (response.data.length === 0) {
                 const aiResp = await api.post('/suggestions/ai', { 
                     ingredients: ingredientsInput.split(',').map(i => i.trim()) 
                 });
                 setSuggestions(aiResp.data);
            } else {
                 setSuggestions(response.data);
            }
        } catch (error) {
            console.error('Error getting suggestions:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Có gì nấu nấy</Text>
                <Text style={styles.headerSubtitle}>Nhập nguyên liệu bạn đang có (ngăn cách bằng dấu phẩy)</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.inputCard}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ví dụ: Thịt heo, trứng, cà chua..."
                        value={ingredientsInput}
                        onChangeText={setIngredientsInput}
                        multiline
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSuggest}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color={colors.white} />
                        ) : (
                            <Text style={styles.buttonText}>Tìm món ngay</Text>
                        )}
                    </TouchableOpacity>
                </View>

                {suggestions.length > 0 && (
                    <ScrollView style={styles.resultsContainer}>
                        <Text style={styles.resultTitle}>Kết quả gợi ý:</Text>
                        {suggestions.map((item, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.recipeCard}
                                onPress={() => {
                                    if (item.id) router.push(`/recipe/${item.id}`);
                                }}
                            >
                                <View style={styles.cardContent}>
                                    <Text style={styles.recipeName}>{item.name}</Text>
                                    <Text style={styles.recipeDesc} numberOfLines={2}>
                                        {item.match_reason || item.description || 'Rất phù hợp với nguyên liệu của bạn!'}
                                    </Text>
                                    {item.matched_ingredients !== undefined && (
                                        <Text style={styles.matchText}>
                                            Phù hợp: {item.matched_ingredients}/{item.total_ingredients} nguyên liệu
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </View>
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
    content: {
        flex: 1,
        padding: spacing.lg,
    },
    inputCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        borderRadius: borderRadius.lg,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: spacing.xl,
    },
    input: {
        backgroundColor: colors.background,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: spacing.md,
    },
    button: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultsContainer: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.md,
    },
    recipeCard: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        marginBottom: spacing.md,
        overflow: 'hidden',
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    cardContent: {
        padding: spacing.md,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    recipeDesc: {
        fontSize: 14,
        color: colors.textLight,
        marginBottom: spacing.sm,
    },
    matchText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.tertiary,
    }
});
