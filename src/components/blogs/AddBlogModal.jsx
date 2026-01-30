import { useState } from 'react';
import { X, Calendar, Clock, Upload, ChevronDown } from 'lucide-react';

export function AddBlogModal({ onClose, onCancel, onPublish, editBlog = null }) {
  const [formData, setFormData] = useState({
    title: editBlog?.title || '',
    description: editBlog?.description || '',
    category: editBlog?.category || '',
    status: editBlog?.status || 'published',
    images: editBlog?.images || [],
    schedule: editBlog?.schedule || false,
    scheduleDate: editBlog?.scheduleDate || '',
    scheduleTime: editBlog?.scheduleTime || '',
  });

  const [imagePreview, setImagePreview] = useState(
    editBlog?.image ? [editBlog.image] : []
  );

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...formData.images, ...files];
    setFormData({ ...formData, images: newImages });
    
    // Create preview URLs for new files
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreview([...imagePreview, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreview.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
    setImagePreview(newPreviews);
  };

  const handleCancel = () => {
    if (formData.title || formData.description || formData.images.length > 0) {
      onCancel(formData);
    } else {
      onClose();
    }
  };

  const handlePublish = () => {
    onPublish(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="bg-[#e4e2e2] rounded-[16px] shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] w-full max-w-[795px] max-h-[90vh] overflow-y-auto">
        <div className="px-[48px] py-[24px] space-y-[24px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-['Poppins',sans-serif] font-semibold text-[32px] text-black">
              {editBlog ? 'Edit Blog' : 'Add Blogs'}
            </p>
            <button onClick={onClose} className="hover:opacity-70 transition-opacity">
              <div className="relative size-[33px]">
                <X />
              </div>
            </button>
          </div>

          {/* Upload Images */}
          <div className="relative">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              id="image-upload"
            />
            <label 
              htmlFor="image-upload"
              className="min-h-[173px] rounded-[8px] border-3 border-black border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors p-4"
            >
              {imagePreview.length > 0 ? (
                <div className="w-full">
                  <div className="flex gap-2 flex-wrap justify-center mb-2">
                    {imagePreview.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={preview} 
                          alt={`Preview ${index + 1}`}
                          className="w-[100px] h-[100px] object-cover rounded"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeImage(index);
                          }}
                          className="absolute -top-2 -right-2 z-50 bg-red-500 text-white rounded-full size-6 flex items-center justify-center"
                        >
                          <X />
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="font-['Poppins',sans-serif] text-[16px] text-black text-center">
                    Click to add more images
                  </p>
                </div>
              ) : (
                <>
                  <div className="h-[68px] w-[60px]">
                    <Upload className="size-full text-black" />
                  </div>
                  <p className="font-['Poppins',sans-serif] text-[28px] text-black text-center mt-4">Upload Images</p>
                </>
              )}
            </label>
          </div>

          {/* Title Input */}
          <div className="h-[63px] rounded-[8px] border-2 border-black">
            <input
              type="text"
              placeholder="Add Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-full px-[16px] py-[8px] bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-black placeholder:text-black"
            />
          </div>

          {/* Description Input */}
          <div className="h-[189px] rounded-[8px] border-2 border-black">
            <textarea
              placeholder="Add Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full h-full px-[16px] py-[8px] bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-black placeholder:text-black resize-none"
            />
          </div>

          {/* Category Dropdown */}
          <div className="h-[63px] rounded-[8px] border-2 border-black relative">
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full h-full px-[16px] py-[8px] bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-black appearance-none cursor-pointer"
            >
              <option value="">Select Category</option>
              <option value="web-development">Web Development</option>
              <option value="social-media-management">Social Media Management</option>
              <option value="resume-building">Resume Building</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" size={24} />
          </div>

          {/* Status Dropdown */}
          {/* <div className="h-[63px] rounded-[8px] border-2 border-black relative">
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full h-full px-[16px] py-[8px] bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-black appearance-none cursor-pointer"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" size={24} />
          </div> */}

          {/* Schedule Section */}
          <div className="space-y-[24px]">
            {/* <div className="h-[63px] flex items-center">
              <div className="flex gap-[16px] items-center px-[16px]">
                <button
                  onClick={() => setFormData({ ...formData, schedule: !formData.schedule })}
                  className="size-[30px] border border-black rounded-[3px] bg-white flex items-center justify-center"
                >
                  {formData.schedule && (
                    <div className="size-[20px] bg-[#6364ff] rounded-[2px]" />
                  )}
                </button>
                <p className="font-['Poppins',sans-serif] text-[24px] text-black">Schedule</p>
              </div>
            </div> */}

            {/* {formData.schedule && (
              <div className="flex gap-[43px]">
                <div className="flex gap-[17px] h-[63px] items-center px-[16px] py-[8px] rounded-[8px] border-2 border-[rgba(102,102,102,0.75)] flex-1">
                  <input
                    type="date"
                    value={formData.scheduleDate}
                    onChange={(e) => setFormData({ ...formData, scheduleDate: e.target.value })}
                    className="flex-1 bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-[rgba(102,102,102,0.75)]"
                  />
                  <Calendar className="size-[36px] text-[rgba(102,102,102,0.75)]" />
                </div>

                <div className="flex gap-[17px] h-[63px] items-center px-[16px] py-[8px] rounded-[8px] border-2 border-[rgba(102,102,102,0.75)] flex-1">
                  <input
                    type="time"
                    value={formData.scheduleTime}
                    onChange={(e) => setFormData({ ...formData, scheduleTime: e.target.value })}
                    className="flex-1 bg-transparent outline-none font-['Poppins',sans-serif] text-[24px] text-[rgba(102,102,102,0.75)]"
                  />
                  <Clock className="size-[36px] text-[rgba(102,102,102,0.75)]" />
                </div>
              </div>
            )} */}

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleCancel}
                className="bg-[#414141] px-[17px] py-[16px] rounded-[15px] w-[184px] hover:bg-[#303030] transition-colors"
              >
                <p className="font-['Poppins',sans-serif] text-[24px] text-white text-center">Cancel</p>
              </button>

              <button
                onClick={handlePublish}
                className="bg-[#6364ff] px-[17px] py-[16px] rounded-[15px] w-[184px] hover:bg-[#5254ee] transition-colors"
              >
                <p className="font-['Poppins',sans-serif] text-[24px] text-white text-center">Publish</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}