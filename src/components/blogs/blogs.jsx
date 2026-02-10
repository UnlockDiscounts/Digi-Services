import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import imgFrame1321317465 from "../../assets/blog.png";
import { AddBlogModal } from './AddBlogModal';
import { SaveDraftModal } from './SaveDraftModal';
import { BlogCard } from './BlogCard';
import { MoreFilters } from './MoreFilters';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../../services/blogApi";

export default function Blogs() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSaveDraftModalOpen, setIsSaveDraftModalOpen] = useState(false);
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // Filter and sort blogs
  const filteredBlogs = blogs
    .filter(blog => {
      // Search filter
      const matchesSearch = blog.header?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Status filter
      const matchesStatus = statusFilter === 'All Status' || 
                           blog.status === statusFilter.toLowerCase();
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      // Sort by date
      if (sortBy === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return 0;
    });

  const handleAddPost = () => {
    setEditingBlog(null);
    setIsAddModalOpen(true);
  };

  const handleEditPost = (blog) => {
    setEditingBlog(blog);
    setIsAddModalOpen(true);
  };

  const handleDeletePost = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      setErrorMessage('');
      await deletePost(blogId);
      setBlogs((prev) => prev.filter((blog) => blog.id !== blogId));
    } catch (error) {
      setErrorMessage(error?.message || 'Failed to delete blog post.');
    }
  };

  const handleCancelAddPost = (formData) => {
    setPendingFormData(formData);
    setIsAddModalOpen(false);
    setIsSaveDraftModalOpen(true);
  };

  const handleSaveDraft = async () => {
    if (!pendingFormData) {
      setIsSaveDraftModalOpen(false);
      setPendingFormData(null);
      return;
    }

    try {
      setErrorMessage('');
      const createdBlog = await createPost({
        ...pendingFormData,
        status: 'draft',
      });
      setBlogs((prev) => [createdBlog, ...prev]);
    } catch (error) {
      setErrorMessage(error?.message || 'Failed to save draft.');
    } finally {
      setIsSaveDraftModalOpen(false);
      setPendingFormData(null);
    }
  };

  const handleDiscardDraft = () => {
    setIsSaveDraftModalOpen(false);
    setPendingFormData(null);
  };

  const handlePublishPost = async (formData) => {
    try {
      setErrorMessage('');
      if (editingBlog) {
        const updatedBlog = await updatePost(editingBlog.id, formData);
        setBlogs((prev) =>
          prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
        );
      } else {
        const createdBlog = await createPost({
          ...formData,
          status: formData.status || 'published',
        });
        setBlogs((prev) => [createdBlog, ...prev]);
      }
      setIsAddModalOpen(false);
      setEditingBlog(null);
    } catch (error) {
      setErrorMessage(error?.message || 'Failed to publish blog.');
    }
  };

  useEffect(() => {
    let isActive = true;

    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getPosts();
        if (isActive) {
          setBlogs(
            data.map((blog) => ({
              ...blog,
              image: blog.image || imgFrame1321317465,
            }))
          );
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage(error?.message || 'Failed to load blogs.');
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchBlogs();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[16px] mb-2">
            <span className="text-[#666]">Dashboard</span>
            <span className="text-[#666]">›</span>
            <span className="text-black">Posts</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Poppins',sans-serif] font-semibold text-[40px] text-black">Blog Posts</h1>
              <p className="text-[#666] text-[16px]">Manage, create and edit your blog content from a central dashboard</p>
            </div>
            <button
              onClick={handleAddPost}
              className="bg-[#6364ff] text-white px-6 py-3 rounded-[12px] flex items-center gap-2 hover:bg-[#5254ee] transition-colors"
            >
              <Plus className="size-5" />
              <span className="font-['Poppins',sans-serif] text-[18px]">Create New Post</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-[#e8d5ff] to-[#d5daff] p-4 rounded-[16px] mb-6 flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search posts by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-[8px] bg-white border-none outline-none font-['Poppins',sans-serif]"
            />
          </div>
          <div className="bg-white px-4 py-3 rounded-[8px] font-['Poppins',sans-serif]">
            Total Blogs: <span className="font-semibold">{filteredBlogs.length}</span>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white px-4 py-3 rounded-[8px] border-none outline-none font-['Poppins',sans-serif] cursor-pointer"
          >
            <option>All Status</option>
            <option>Draft</option>
            <option>Published</option>
            <option>Scheduled</option>
            <option>Archived</option>
          </select>
          <div className="relative">
            <button 
              onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
              className="bg-white px-4 py-3 rounded-[8px] flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <span className="font-['Poppins',sans-serif]">More Filters</span>
            </button>
            <MoreFilters
              isOpen={isMoreFiltersOpen}
              onClose={() => setIsMoreFiltersOpen(false)}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </div>

        {errorMessage && (
          <p className="text-red-600 mb-4 font-['Poppins',sans-serif]">
            {errorMessage}
          </p>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-3 gap-6">
          {isLoading ? (
            <p className="col-span-3 text-center font-['Poppins',sans-serif]">
              Loading blogs...
            </p>
          ) : filteredBlogs.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500 font-['Poppins',sans-serif]">
              No blogs found matching your filters.
            </p>
          ) : (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      {isAddModalOpen && (
        <AddBlogModal
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingBlog(null);
          }}
          onCancel={handleCancelAddPost}
          onPublish={handlePublishPost}
          editBlog={editingBlog}
        />
      )}

      {isSaveDraftModalOpen && (
        <SaveDraftModal
          onDiscard={handleDiscardDraft}
          onSave={handleSaveDraft}
        />
      )}
    </div>
  );
}