const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || `${API_BASE_URL}/api/v1/contact`;

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
  return payload.contacts || payload.data || payload.results || [];
};

export const getContacts = async () => {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch contacts (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const createContact = async (payload) => {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to submit contact (${response.status})`
    );
  }

  return parseJson(response);
};
