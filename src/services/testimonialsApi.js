const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const TESTIMONIALS_ENDPOINT =
  import.meta.env.VITE_TESTIMONIALS_ENDPOINT ||
  `${API_BASE_URL}/api/v1/testimonials`;

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
  return payload.testimonials || payload.data || payload.results || [];
};

export const getTestimonials = async () => {
  const response = await fetch(TESTIMONIALS_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch testimonials (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return unwrapList(payload);
};

export const getTestimonialById = async (id) => {
  const response = await fetch(`${TESTIMONIALS_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch testimonial (${response.status})`
    );
  }

  const payload = await parseJson(response);
  return payload?.testimonial || payload?.data || payload;
};

export const createTestimonial = async (data) => {
  const payload = new FormData();

  if (data?.name) payload.append("name", data.name);
  if (data?.description) payload.append("description", data.description);

  const file = data?.file instanceof File ? data.file : null;
  if (file) payload.append("file", file);

  const response = await fetch(TESTIMONIALS_ENDPOINT, {
    method: "POST",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create testimonial (${response.status})`
    );
  }

  return parseJson(response);
};

export const updateTestimonial = async (id, data) => {
  const payload = new FormData();

  if (data?.name) payload.append("name", data.name);
  if (data?.description) payload.append("description", data.description);

  const file = data?.file instanceof File ? data.file : null;
  if (file) payload.append("file", file);

  const response = await fetch(`${TESTIMONIALS_ENDPOINT}/${id}`, {
    method: "PUT",
    body: payload,
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update testimonial (${response.status})`
    );
  }

  return parseJson(response);
};

export const deleteTestimonial = async (id) => {
  const response = await fetch(`${TESTIMONIALS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete testimonial (${response.status})`
    );
  }

  return true;
};