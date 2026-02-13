const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const WORKS_ENDPOINT =
  import.meta.env.VITE_WORKS_ENDPOINT || `${API_BASE_URL}/api/v1/works`;

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
  return payload.works || payload.data || payload.results || [];
};

export const getWorks = async () => {
  const response = await fetch(WORKS_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch works (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const getWorkById = async (id) => {
  const response = await fetch(`${WORKS_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch work (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return payload?.work || payload?.data || payload;
};

export const createWork = async (data) => {
  const payload = new FormData();

  if (data?.title) payload.append("title", data.title);
  if (data?.description) payload.append("description", data.description);

  const files = (data?.files || []).filter((file) => file instanceof File);
  files.forEach((file) => payload.append("files", file));

  const response = await fetch(WORKS_ENDPOINT, {
    method: "POST",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create work (${response.status})`
    );
  }

  return parseJson(response);
};

export const updateWork = async (id, data) => {
  const payload = new FormData();

  if (data?.title) payload.append("title", data.title);
  if (data?.description) payload.append("description", data.description);

  const files = (data?.files || []).filter((file) => file instanceof File);
  files.forEach((file) => payload.append("files", file));

  const response = await fetch(`${WORKS_ENDPOINT}/${id}`, {
    method: "PUT",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update work (${response.status})`
    );
  }

  return parseJson(response);
};

export const deleteWork = async (id) => {
  const response = await fetch(`${WORKS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete work (${response.status})`
    );
  }

  return true;
};