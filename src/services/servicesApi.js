const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const SERVICES_ENDPOINT =
  import.meta.env.VITE_SERVICES_ENDPOINT || `${API_BASE_URL}/api/v1/services`;

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
  return payload.services || payload.data || payload.results || [];
};

export const getServices = async () => {
  const response = await fetch(SERVICES_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch services (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const getServiceById = async (id) => {
  const response = await fetch(`${SERVICES_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch service (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return payload?.service || payload?.data || payload;
};

export const createService = async (data) => {
  const payload = new FormData();

  if (data?.category) payload.append("category", data.category);
  if (data?.title) payload.append("title", data.title);
  if (data?.description) payload.append("description", data.description);

  const files = (data?.files || []).filter((file) => file instanceof File);
  files.forEach((file) => payload.append("files", file));

  const response = await fetch(SERVICES_ENDPOINT, {
    method: "POST",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create service (${response.status})`
    );
  }

  return parseJson(response);
};

export const updateService = async (id, data) => {
  const payload = new FormData();

  if (data?.category) payload.append("category", data.category);
  if (data?.title) payload.append("title", data.title);
  if (data?.description) payload.append("description", data.description);

  const files = (data?.files || []).filter((file) => file instanceof File);
  files.forEach((file) => payload.append("files", file));

  const response = await fetch(`${SERVICES_ENDPOINT}/${id}`, {
    method: "PUT",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update service (${response.status})`
    );
  }

  return parseJson(response);
};

export const deleteService = async (id) => {
  const response = await fetch(`${SERVICES_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete service (${response.status})`
    );
  }

  return true;
};

export const updateServiceStatus = async (id, status) => {
  const response = await fetch(`${SERVICES_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update service status (${response.status})`
    );
  }

  return parseJson(response);
};
