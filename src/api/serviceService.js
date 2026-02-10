import apiClient from './axios';

export const getAllServices = async () => {
    try {
        const response = await apiClient.get('/services');
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
};

export const getAllCards = async () => {
    try {
        const response = await apiClient.get('/cards');
        return response.data; // Returns array of cards
    } catch (error) {
        console.error("Error fetching cards:", error);
        throw error;
    }
};

export const getAllTestimonials = async () => {
    try {
        const response = await apiClient.get('/testimonials');
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        throw error;
    }
};

export const getAllWork = async () => {
    try {
        const response = await apiClient.get('/works');
        return response.data;
    } catch (error) {
        console.error("Error fetching work:", error);
        throw error;
    }
};

export const getAllFAQs = async () => {
    try {
        const response = await apiClient.get('/faqs');
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
};
