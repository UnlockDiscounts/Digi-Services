import apiClient from './axios';

export const getAllBlogs = async () => {
    try {
        const response = await apiClient.get('/blog');
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await apiClient.get(`/blog/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
        throw error;
    }
};
