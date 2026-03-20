import axios from 'axios';
import { Platform } from 'react-native';

const normalizeBaseUrl = (url?: string) => url?.replace(/\/$/, '') || '';

const getBaseUrl = () => {
    const envUrl = normalizeBaseUrl(process.env.EXPO_PUBLIC_API_URL);
    if (envUrl) return envUrl;

    if (Platform.OS === 'web' && typeof window !== 'undefined') {
        return normalizeBaseUrl(window.location.origin);
    }

    // Local mobile development defaults
    return Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';
};

const BASE_URL = getBaseUrl();

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
