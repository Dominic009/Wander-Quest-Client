const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiUrl = (endpoint) => `${BASE_URL}${endpoint}`;
