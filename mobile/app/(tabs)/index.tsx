import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { colors } from '@/src/theme/colors';
import { spacing, borderRadius } from '@/src/theme/spacing';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import api, { getImageUrl } from '@/src/services/api';

export default function HomeScreen() {
    const router = useRouter();
    const [mealCombo, setMealCombo] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [numMains, setNumMains] = useState(2);
    const [numVeggies, setNumVeggies] = useState(1);
    const [maxTime, setMaxTime] = useState<number | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);

    useEffect(() => {
        fetchMealCombo();
    }, [numMains, numVeggies, maxTime, difficulty]);

    const fetchMealCombo = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                mains: numMains.toString(),
                veggies: numVeggies.toString(),
            });
            if (maxTime) params.append('maxTime', maxTime.toString());
            if (difficulty) params.append('difficulty', difficulty);

            const response = await api.get(`/suggestions/meal-combo?${params.toString()}`);
            setMealCombo(response.data);
        } catch (error) {
            console.error('Error fetching meal combo:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header/Banner Section */}
            <View style={styles.header}>
                <View style={styles.logoAndName}>
                    <Image 
                        source={require('@/assets/images/logo.png')} 
                        style={styles.logo} 
                        resizeMode="contain"
                    />
                    <View>
                        <Text style={styles.appName}>Bữa Cơm Nhà</Text>
                        <Text style={styles.slogan}>Có gì nấu nấy, ngon đủ mỗi ngày.</Text>
                    </View>
                </View>
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActionsContainer}>
                <TouchableOpacity 
                    style={[styles.actionCard, { backgroundColor: colors.primary }]}
                    onPress={() => router.push('/recipes')}
                >
                    <Text style={styles.actionIcon}>🍜</Text>
                    <Text style={styles.actionText}>Tìm món</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.actionCard, { backgroundColor: colors.tertiary }]}
                    onPress={() => router.push('/suggest')}
                >
                    <Text style={styles.actionIcon}>🥕</Text>
                    <Text style={styles.actionText}>Có gì nấu nấy</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.actionCard, { backgroundColor: colors.secondary }]}
                    onPress={() => router.push('/plan')}
                >
                    <Text style={styles.actionIcon}>📅</Text>
                    <Text style={styles.actionText}>Lên lịch</Text>
                </TouchableOpacity>
            </View>

            {/* Meal Suggestion Section */}
            <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                    <Text style={styles.sectionTitle}>Mâm cơm gợi ý</Text>
                    <TouchableOpacity onPress={fetchMealCombo}>
                        <Text style={styles.refreshBtn}>Đổi món 🔄</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionSubtitle}>Gợi ý bữa cơm cân bằng cho gia đình</Text>
                
                <View style={styles.filtersContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
                        {/* Num Mains */}
                        <TouchableOpacity style={styles.filterGroup} onPress={() => setNumMains(numMains === 3 ? 1 : numMains + 1)}>
                            <Text style={styles.filterText}>🥩 Mặn: {numMains}</Text>
                        </TouchableOpacity>

                        {/* Num Veggies */}
                        <TouchableOpacity style={styles.filterGroup} onPress={() => setNumVeggies(numVeggies === 2 ? 0 : numVeggies + 1)}>
                            <Text style={styles.filterText}>🥬 Rau: {numVeggies}</Text>
                        </TouchableOpacity>

                        {/* Max Time */}
                        <TouchableOpacity style={styles.filterGroup} onPress={() => setMaxTime(maxTime === null ? 30 : maxTime === 30 ? 60 : null)}>
                            <Text style={styles.filterText}>⏱ {maxTime ? `<${maxTime}p` : 'Bất kỳ'}</Text>
                        </TouchableOpacity>

                        {/* Difficulty */}
                        <TouchableOpacity style={styles.filterGroup} onPress={() => setDifficulty(difficulty === null ? 'Dễ' : difficulty === 'Dễ' ? 'Vừa' : difficulty === 'Vừa' ? 'Khó' : null)}>
                            <Text style={styles.filterText}>⚡ {difficulty || 'Bất kỳ'}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            
            <View style={styles.comboContainer}>
                {loading ? (
                    <ActivityIndicator color={colors.primary} />
                ) : mealCombo.length > 0 ? (
                    <View style={styles.gridContainer}>
                        {mealCombo.map((item) => (
                            <TouchableOpacity 
                                key={item.id} 
                                style={styles.comboCell}
                                onPress={() => router.push(`/recipe/${item.id}`)}
                            >
                                <View style={styles.comboCard}>
                                    {item.image_url ? (
                                        <Image 
                                            source={{ uri: getImageUrl(item.image_url) }} 
                                            style={styles.comboImage} 
                                        />
                                    ) : (
                                        <View style={styles.emojiFallback}>
                                            <Text style={styles.comboEmoji}>
                                                {item.category_name === 'Canh' ? '🥣' : 
                                                 item.category_name === 'Xào' ? '🍳' : 
                                                 item.category_name === 'Kho' ? '🍲' :
                                                 item.category_name === 'Luộc' ? '🥬' :
                                                 item.category_name === 'Chiên/Rán' ? '🍤' : '🥘'}
                                            </Text>
                                        </View>
                                    )}
                                    <View style={styles.comboInfo}>
                                        <Text style={styles.comboType}>{item.category_name}</Text>
                                        <Text style={styles.comboName} numberOfLines={2}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.emptyText}>Không tìm thấy gợi ý.</Text>
                )}
            </View>

            <View style={styles.paddingBottom} />
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
        padding: spacing.lg,
        paddingTop: spacing.xl + 10, 
        borderBottomLeftRadius: borderRadius.lg,
        borderBottomRightRadius: borderRadius.lg,
        marginBottom: spacing.sm,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logoAndName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: spacing.md,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 2,
    },
    slogan: {
        fontSize: 14,
        color: colors.textLight,
        fontWeight: '500',
    },
    quickActionsContainer: {
        flexDirection: 'row',
        paddingHorizontal: spacing.md,
        justifyContent: 'space-between',
        marginTop: spacing.sm,
        marginBottom: spacing.md,
    },
    actionCard: {
        flex: 1,
        marginHorizontal: spacing.xs,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    actionIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    actionText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    sectionHeader: {
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.xs,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    refreshBtn: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 14,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: colors.textLight,
        marginTop: 4,
        marginBottom: spacing.sm,
    },
    filtersContainer: {
        marginBottom: spacing.sm,
    },
    filterScroll: {
        flexDirection: 'row',
    },
    filterGroup: {
        backgroundColor: colors.white,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.round,
        marginRight: spacing.sm,
        borderWidth: 1,
        borderColor: colors.grey200,
    },
    filterText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.text,
    },
    comboContainer: {
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.xl,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -spacing.sm,
    },
    comboCell: {
        width: '50%',
        padding: spacing.sm,
    },
    comboCard: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        height: 150,
    },
    comboImage: {
        width: '100%',
        height: 85,
    },
    emojiFallback: {
        width: '100%',
        height: 85,
        backgroundColor: colors.grey100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comboEmoji: {
        fontSize: 32,
    },
    comboInfo: {
        padding: spacing.sm,
        flex: 1,
        justifyContent: 'center',
    },
    comboType: {
        fontSize: 10,
        color: colors.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    comboName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.text,
        lineHeight: 18,
    },
    emptyText: {
        textAlign: 'center',
        color: colors.textLight,
    },
    paddingBottom: {
        height: spacing.xxl,
    }
});
