import { useState } from 'react';
import { Plus } from 'lucide-react';
import imgFrame1321317465 from "../../assets/blog.png";
import { AddBlogModal } from './AddBlogModal';
import { SaveDraftModal } from './SaveDraftModal';
import { BlogCard } from './BlogCard';
import { MoreFilters } from './MoreFilters';

export default function Blogs() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSaveDraftModalOpen, setIsSaveDraftModalOpen] = useState(false);
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'draft',
      image: imgFrame1321317465,
    },
    {
      id: 2,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'published',
      image: imgFrame1321317465,
    },
    {
      id: 3,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'draft',
      image: imgFrame1321317465,
    },
    {
      id: 4,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'published',
      image: imgFrame1321317465,
    },
    {
      id: 5,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'scheduled',
      image: imgFrame1321317465,
    },
    {
      id: 6,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'archived',
      image: imgFrame1321317465,
    },
    {
      id: 7,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'published',
      image: imgFrame1321317465,
    },
    {
      id: 8,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'published',
      image: imgFrame1321317465,
    },
    {
      id: 9,
      title: '5 Website Design Fails That Drivers Visitors Away',
      author: 'Elon Musk',
      date: 'September 17, 2025',
      status: 'published',
      image: imgFrame1321317465,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const handleAddPost = () => {
    setEditingBlog(null);
    setIsAddModalOpen(true);
  };

  const handleEditPost = (blog) => {
    setEditingBlog(blog);
    setIsAddModalOpen(true);
  };

  const handleDeletePost = (blogId) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    }
  };

  const handleCancelAddPost = (formData) => {
    setPendingFormData(formData);
    setIsAddModalOpen(false);
    setIsSaveDraftModalOpen(true);
  };

  const handleSaveDraft = () => {
    if (pendingFormData) {
      const newBlog = {
        id: blogs.length + 1,
        title: pendingFormData.title || 'Untitled Post',
        author: 'Current User',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        status: 'draft',
        image: pendingFormData.images?.[0] || imgFrame1321317465,
        description: pendingFormData.description,
        category: pendingFormData.category,
      };
      setBlogs([newBlog, ...blogs]);
    }
    setIsSaveDraftModalOpen(false);
    setPendingFormData(null);
  };

  const handleDiscardDraft = () => {
    setIsSaveDraftModalOpen(false);
    setPendingFormData(null);
  };

  const handlePublishPost = (formData) => {
    if (editingBlog) {
      // Update existing blog
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id 
          ? {
              ...blog,
              title: formData.title || 'Untitled Post',
              status: formData.status || 'published',
              image: formData.images?.[0] || blog.image,
              description: formData.description,
              category: formData.category,
            }
          : blog
      ));
    } else {
      // Create new blog
      const newBlog = {
        id: blogs.length + 1,
        title: formData.title || 'Untitled Post',
        author: 'Current User',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        status: formData.status || 'published',
        image: formData.images?.[0] || imgFrame1321317465,
        description: formData.description,
        category: formData.category,
      };
      setBlogs([newBlog, ...blogs]);
    }
    setIsAddModalOpen(false);
    setEditingBlog(null);
  };

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
            Total Blogs: <span className="font-semibold">250</span>
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

        {/* Blog Grid */}
        <div className="grid grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
            />
          ))}
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