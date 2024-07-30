// src/api/recipeApi.ts
import axios from 'axios';
import { delay } from '../utils/delay';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/';



const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchAllRecipes = async (page: number, perPage: number) => {
    try {
        await delay(1000);

        const response = await apiClient.get('/recipes', {
            params: {
                _page: page,
                _per_page: perPage
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};
export const fetchRecipeById = async (id: string) => {
    await delay(1000);
    const response = await apiClient.get(`/recipes/${id}`);
    return response.data;
};
