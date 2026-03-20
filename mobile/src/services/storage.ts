import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
    FAVORITES: '@eatathome_favorites',
    MEAL_PLAN: '@eatathome_meal_plan', // Record<YYYY-MM-DD, { lunch: number[], dinner: number[] }>
};

export const storage = {
    // Favorites
    getFavorites: async (): Promise<number[]> => {
        try {
            const data = await AsyncStorage.getItem(KEYS.FAVORITES);
            return data ? JSON.parse(data) : [];
        } catch (error) { return []; }
    },
    toggleFavorite: async (recipeId: number): Promise<boolean> => {
        try {
            const favs = await storage.getFavorites();
            const index = favs.indexOf(recipeId);
            if (index > -1) {
                favs.splice(index, 1);
            } else {
                favs.push(recipeId);
            }
            await AsyncStorage.setItem(KEYS.FAVORITES, JSON.stringify(favs));
            return index === -1; // returns true if added, false if removed
        } catch (error) { return false; }
    },
    // Meal Plan
    getMealPlan: async (): Promise<Record<string, { lunch: number[], dinner: number[] }>> => {
        try {
            const data = await AsyncStorage.getItem(KEYS.MEAL_PLAN);
            const parsed = data ? JSON.parse(data) : {};
            // handle migration
            Object.keys(parsed).forEach(date => {
                if (Array.isArray(parsed[date])) {
                    parsed[date] = { lunch: parsed[date], dinner: [] };
                }
            });
            return parsed;
        } catch (error) { return {}; }
    },
    addToMealPlan: async (date: string, type: 'lunch' | 'dinner', recipeId: number) => {
        try {
            const plan = await storage.getMealPlan();
            if (!plan[date]) plan[date] = { lunch: [], dinner: [] };
            if (!plan[date][type].includes(recipeId)) {
                plan[date][type].push(recipeId);
                await AsyncStorage.setItem(KEYS.MEAL_PLAN, JSON.stringify(plan));
            }
        } catch (error) { console.error(error); }
    },
    removeFromMealPlan: async (date: string, type: 'lunch' | 'dinner', recipeId: number) => {
        try {
            const plan = await storage.getMealPlan();
            if (plan[date] && plan[date][type]) {
                plan[date][type] = plan[date][type].filter(id => id !== recipeId);
                await AsyncStorage.setItem(KEYS.MEAL_PLAN, JSON.stringify(plan));
            }
        } catch (error) { console.error(error); }
    }
};
