const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const FAQS_ENDPOINT =
  import.meta.env.VITE_FAQS_ENDPOINT || `${API_BASE_URL}/api/v1/faqs`;

const parseJson = async (response) => {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

const unwrapList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  return payload.faqs || payload.data || payload.results || [];
};

export const getFAQs = async () => {
  const response = await fetch(FAQS_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch FAQs (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const getFAQById = async (id) => {
  const response = await fetch(`${FAQS_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch FAQ (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return payload?.faq || payload?.data || payload;
};

export const createFAQ = async (data) => {
  const response = await fetch(FAQS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      question: data?.question || "",
      answer: data?.answer || "",
    }),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create FAQ (${response.status})`
    );
  }

  return parseJson(response);
};

export const updateFAQ = async (id, data) => {
  const response = await fetch(`${FAQS_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      question: data?.question || "",
      answer: data?.answer || "",
    }),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update FAQ (${response.status})`
    );
  }

  return parseJson(response);
};

export const deleteFAQ = async (id) => {
  const response = await fetch(`${FAQS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete FAQ (${response.status})`
    );
  }

  return true;
};
