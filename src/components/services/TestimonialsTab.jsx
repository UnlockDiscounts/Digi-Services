import { useState } from 'react';

export default function TestimonialsTab({ testimonials, setTestimonials, onNext }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [editingId, setEditingId] = useState(null); // Tracks the item being viewed/edited

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSave = () => {
    if (name && description) {
      if (editingId) {
        // UPDATE existing testimonial
        const updated = testimonials.map((t) =>
          t.id === editingId 
            ? { ...t, name, description, imageFile: fileName } 
            : t
        );
        setTestimonials(updated);
      } else {
        // ADD new testimonial
        const newTestimonial = {
          id: Date.now(),
          name,
          description,
          imageFile: fileName,
        };
        setTestimonials([...testimonials, newTestimonial]);
      }
      
      // Reset form
      clearForm();
    }
  };

  const loadTestimonial = (item) => {
    setName(item.name);
    setDescription(item.description);
    setFileName(item.imageFile);
    setEditingId(item.id);
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setFileName('No file chosen');
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
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full bg-transparent outline-none"
        />
      </div>

      {/* Description Textarea */}
      <div className="absolute content-stretch flex flex-col h-[119px] items-start left-[79px] px-[16px] py-[8px] rounded-[8px] top-[139px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="text-[24px] text-[rgba(102,102,102,0.74)] w-full h-full bg-transparent outline-none resize-none"
        />
      </div>

      {/* File Upload */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-start justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[290px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <label className="cursor-pointer">
          <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
          <p className="text-[24px]">
            <span className="text-[#6364ff] underline">Upload Images</span>
            <span className="text-[#9a9a9a] ml-2">{fileName}</span>
          </p>
        </label>
      </div>

      {/* Save / Update Button */}
      <div className="absolute content-stretch flex items-center left-[calc(50%-0.5px)] top-[385px] translate-x-[-50%]">
        <button
          onClick={handleSave}
          className="bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] rounded-[15px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
        >
          <p className="text-[24px] text-white">
            {editingId ? 'Update' : 'Save'}
          </p>
        </button>
      </div>

      {/* Numbers Row */}
      <div className="relative w-full">
        {testimonials.length > 0 && (
          <>
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                onClick={() => loadTestimonial(item)}
                style={{ left: `${79 + index * 80}px` }}
                className={`absolute flex flex-col h-[52px] items-center justify-center top-[474px] w-[64px] px-[16px] py-[8px] rounded-[8px] cursor-pointer transition-all ${
                  editingId === item.id ? 'bg-[#6364ff]/10 scale-110' : ''
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-[9px] ${
                    editingId === item.id ? 'border-[#6364ff]' : 'border-[rgba(102,102,102,0.75)]'
                  }`}
                />
                <p className={`font-['Poppins'] text-[24px] text-center ${
                    editingId === item.id ? 'text-[#6364ff] font-bold' : 'text-[rgba(102,102,102,0.75)]'
                  }`}>
                  {index + 1}
                </p>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] right-[68px] rounded-[15px] top-[472px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
      >
        <p className="text-[24px] text-white">Next</p>
      </button>

      {/* Optional: New Entry Button (to clear the form if editing) */}
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