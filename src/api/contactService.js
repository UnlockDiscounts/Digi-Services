import apiClient from "./axios";

export const createContact = async (data) => {
  try {
    const response = await apiClient.post("/contact", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
