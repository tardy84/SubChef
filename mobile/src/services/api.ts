import axios from 'axios';
import { Platform } from 'react-native';

// For Android emulator, localhost is 10.0.2.2. For iOS it's localhost.
const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';

const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `${BASE_URL}${path}`;
};

export default api;
