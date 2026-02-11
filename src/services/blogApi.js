const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://digiservices-backend-6hc3.onrender.com";

export const BLOGS_ENDPOINT =
  import.meta.env.VITE_BLOGS_ENDPOINT || `${API_BASE_URL}/api/v1/blog`;

const formatDate = (value) => {
  if (!value) return "";
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return String(value);
  }
};

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
  return (
    payload.blogs || payload.posts || payload.data || payload.results || []
  );
};

export const normalizeBlog = (blog) => {
  if (!blog) return null;

  const id = blog.id || blog._id || blog.blogId || blog.slug;
  const imagesRaw =
    blog.images || blog.imageUrls || blog.image || blog.coverImage || [];
  const images = Array.isArray(imagesRaw)
    ? imagesRaw
    : imagesRaw
    ? [imagesRaw]
    : [];
  const image =
    blog.image || blog.coverImage || blog.thumbnail || images[0] || null;

  return {
    ...blog,
    id,
    title: blog.header || blog.title || "Untitled Post",
    author: blog.author || blog.createdBy || "Unknown",
    date: formatDate(blog.date || blog.createdAt || blog.updatedAt || ""),
    status: blog.status || "published",
    description: blog.description || blog.excerpt || blog.content || "",
    category: blog.category || blog.categoryName || "",
    images,
    image,
  };
};

export const getPosts = async () => {
  const response = await fetch(BLOGS_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch blogs (${response.status})`,
    );
  }

  const payload = await parseJson(response);
  const posts = unwrapList(payload);
  return posts.map(normalizeBlog);
};

export const getPostById = async (id) => {
  const response = await fetch(`${BLOGS_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to fetch blog (${response.status})`,
    );
  }

  const payload = await parseJson(response);
  const blog = payload?.post || payload?.data || payload;
  return normalizeBlog(blog);
};

const buildBlogFormData = (data) => {
  const payload = new FormData();

  if (data?.header) payload.append("header", data.header);
  if (!data?.header && data?.title) payload.append("header", data.title);
  if (data?.description) payload.append("description", data.description);
  if (data?.category) payload.append("category", data.category);
  if (data?.status) payload.append("status", data.status);

  const imageFiles = (data?.images || []).filter(
    (image) => image instanceof File,
  );
  imageFiles.forEach((file) => payload.append("images", file));

  return payload;
};

export const createPost = async (data) => {
  const response = await fetch(BLOGS_ENDPOINT, {
    method: "POST",
    body: buildBlogFormData(data),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to create blog (${response.status})`,
    );
  }

  const payload = await parseJson(response);
  const blog = payload?.post || payload?.data || payload;
  return normalizeBlog(blog);
};

export const updatePost = async (id, data) => {
  const response = await fetch(`${BLOGS_ENDPOINT}/${id}`, {
    method: "PUT",
    body: buildBlogFormData(data),
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to update blog (${response.status})`,
    );
  }

  const payload = await parseJson(response);
  const blog = payload?.post || payload?.data || payload;
  return normalizeBlog(blog);
};

export const deletePost = async (id) => {
  const response = await fetch(`${BLOGS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await parseJson(response);
    throw new Error(
      error?.message || `Failed to delete blog (${response.status})`,
    );
  }

  return true;
};
