const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const CARDS_ENDPOINT =
  import.meta.env.VITE_CARDS_ENDPOINT || `${API_BASE_URL}/api/v1/cards`;

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
  return payload.cards || payload.data || payload.results || [];
};

export const getCards = async () => {
  const response = await fetch(CARDS_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch cards (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const getCardById = async (id) => {
  const response = await fetch(`${CARDS_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch card (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return payload?.card || payload?.data || payload;
};

export const createCard = async (data) => {
  const response = await fetch(CARDS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      service: data?.service || null,
      sections: Array.isArray(data?.sections) ? data.sections : [data] || [],
    }),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create card (${response.status})`
    );
  }

  return parseJson(response);
};

export const updateCard = async (id, data) => {
  const response = await fetch(`${CARDS_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sections: Array.isArray(data?.sections) ? data.sections : [data] || [],
    }),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update card (${response.status})`
    );
  }

  return parseJson(response);
};

export const deleteCard = async (id) => {
  const response = await fetch(`${CARDS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete card (${response.status})`
    );
  }

  return true;
};