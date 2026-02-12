import { useState } from 'react';
import axios from 'axios';

export default function TestimonialsTab({ testimonials, setTestimonials, onNext }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingId, setEditingId] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleSave = async () => {
    if (name && description) {
      setLoading(true);
      
      const formData = new FormData();
      formData.append('service', localStorage.getItem('serviceId')); 
      formData.append('name', name);
      formData.append('description', description);
      
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      try {
        let response;
        
        if (editingId) {
          // IMPLEMENT UPDATE: PUT request to the specific testimonial ID
          response = await axios.put(
            `https://digiservices-backend-6hc3.onrender.com/api/v1/testimonials/${editingId}`,
            formData,
            {
              headers: { 'Content-Type': 'multipart/form-data' }
            }
          );
        } else {
          // CREATE NEW: POST request
          response = await axios.post(
            'https://digiservices-backend-6hc3.onrender.com/api/v1/testimonials',
            formData,
            {
              headers: { 'Content-Type': 'multipart/form-data' }
            }
          );
        }

        if (response.status === 201 || response.status === 200) {
          if (editingId) {
            // UPDATE local state
            const updated = testimonials.map((t) =>
              t.id === editingId 
                ? { ...t, name, description, imageFile: fileName } 
                : t
            );
            setTestimonials(updated);
          } else {
            // ADD new entry to local state
            const newTestimonial = {
              id: response.data._id || Date.now(),
              name,
              description,
              imageFile: fileName,
            };
            setTestimonials([...testimonials, newTestimonial]);
          }
          clearForm();
        }
      } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        alert('Failed to save testimonial.');
      } finally {
        setLoading(false);
      }
    }
  };

  const loadTestimonial = (item) => {
    setName(item.name);
    setDescription(item.description);
    setFileName(item.imageFile || 'Uploaded File');
    setEditingId(item.id);
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setFileName('No file chosen');
    setSelectedFile(null);
    setEditingId(null);
  };

  return (
    <div className="relative h-full">
      {/* Name Input */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-center justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[44px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full bg-transparent outline-none font-['Poppins']"
        />
      </div>

      {/* Description Textarea */}
      <div className="absolute content-stretch flex flex-col h-[119px] items-start left-[79px] px-[16px] py-[8px] rounded-[8px] top-[139px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="text-[24px] text-[rgba(102,102,102,0.74)] w-full h-full bg-transparent outline-none resize-none font-['Poppins']"
        />
      </div>

      {/* File Upload */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-start justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[290px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <label className="cursor-pointer">
          <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
          <p className="text-[24px] font-['Poppins']">
            <span className="text-[#6364ff] underline">Upload Images</span>
            <span className="text-[#9a9a9a] ml-2">{fileName}</span>
          </p>
        </label>
      </div>

      {/* Save Button */}
      <div className="absolute content-stretch flex items-center left-[calc(50%-0.5px)] top-[385px] translate-x-[-50%]">
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] rounded-[15px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors disabled:bg-gray-400"
        >
          <p className="text-[24px] text-white font-['Poppins']">
            {loading ? '...' : (editingId ? 'Update' : 'Save')}
          </p>
        </button>
      </div>

      {/* Numbers Preview Row */}
      <div className="relative w-full">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            onClick={() => loadTestimonial(item)}
            style={{ left: `${79 + index * 80}px` }}
            className={`absolute flex flex-col h-[52px] items-center justify-center top-[474px] w-[64px] px-[16px] py-[8px] rounded-[8px] cursor-pointer transition-all ${
              editingId === item.id ? 'bg-[#6364ff]/10' : ''
            }`}
          >
            <div className={`absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-[9px] ${
                editingId === item.id ? 'border-[#6364ff]' : 'border-[rgba(102,102,102,0.75)]'
              }`}
            />
            <p className={`font-['Poppins'] text-[24px] text-center ${
                editingId === item.id ? 'text-[#6364ff]' : 'text-[rgba(102,102,102,0.75)]'
              }`}>
              {index + 1}
            </p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] right-[68px] rounded-[15px] top-[472px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
      >
        <p className="text-[24px] text-white font-['Poppins']">Next</p>
      </button>

      {/* Add New Link */}
      {editingId && (
        <button
          onClick={clearForm}
          className="absolute left-[79px] top-[385px] text-[#6364ff] font-['Poppins'] underline text-[18px]"
        >
          + Add New Testimonial
        </button>
      )}
    </div>
  );
}