import { useState } from 'react';

export default function AddServiceTab({ onNext }) {
  const [services, setServices] = useState([]);
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleSave = () => {
    if (!serviceCategory || !serviceTitle || !description) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    const serviceData = {
      id: editingId || `${Date.now()}`,
      category: serviceCategory,
      title: serviceTitle,
      description: description,
      files: selectedFile ? [selectedFile.name] : [],
    };

    if (editingId) {
      const updatedServices = services.map(s =>
        (s._id || s.id) === editingId ? { ...s, ...serviceData } : s
      );
      setServices(updatedServices);
    } else {
      setServices([...services, serviceData]);
    }

    clearForm();
    setLoading(false);
  };

  const loadService = (service) => {
    setServiceCategory(service.category);
    setServiceTitle(service.title);
    setDescription(service.description);
    setFileName(service.files?.[0] || service.file || 'No file chosen');
    setSelectedFile(null);
    setEditingId(service._id || service.id);
  };

  const clearForm = () => {
    setServiceCategory('');
    setServiceTitle('');
    setDescription('');
    setFileName('No file chosen');
    setSelectedFile(null);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setErrorMessage('');
    setLoading(true);
    setServices(services.filter(s => (s._id || s.id) !== id));
    if (editingId === id) {
      clearForm();
    }
    setLoading(false);
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      {errorMessage && (
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-red-600 text-sm z-10">
          {errorMessage}
        </p>
      )}
      {/* Service Category Input */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-center justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[32px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <input
          type="text"
          value={serviceCategory}
          onChange={(e) => setServiceCategory(e.target.value)}
          placeholder="Service Category"
          className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
        />
      </div>

      {/* Service Title Input */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-center justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[127px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <input
          type="text"
          value={serviceTitle}
          onChange={(e) => setServiceTitle(e.target.value)}
          placeholder="Service Title"
          className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
        />
      </div>

      {/* Description Textarea */}
      <div className="absolute content-stretch flex flex-col h-[119px] items-start left-[79px] px-[16px] py-[8px] rounded-[8px] top-[222px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
        />
      </div>

      {/* File Upload */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-start justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[373px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <label className="cursor-pointer">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-[#6364ff] underline">Choose File</span>
            <span className="leading-[normal]"> </span>
            <span className="leading-[normal] text-[#c9c9c9]"> </span>
            <span className="leading-[normal] text-[#9a9a9a]">{fileName}</span>
          </p>
        </label>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] content-stretch flex h-[56px] items-center justify-center px-[17px] py-[16px] right-[79px] rounded-[15px] top-[468px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
      >
        <p className="css-ew64yg leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Next</p>
      </button>

      {/* Save Service Button */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="absolute bg-[#6364ff] content-stretch flex h-[56px] items-center justify-center px-[17px] py-[16px] left-[79px] rounded-[15px] top-[468px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <p className="text-[24px] text-white">
          {loading ? 'Saving...' : (editingId ? 'Update' : 'Save')}
        </p>
      </button>

      {/* Services List */}
      {services.length > 0 && (
        <div className="absolute left-[79px] top-[550px] w-[1093px]">
          <p className="text-[18px] font-['Poppins'] text-[rgba(102,102,102,0.75)] mb-3">Existing Services:</p>
          <div className="flex flex-wrap gap-4">
            {services.map((service) => (
              <div
                key={service._id || service.id}
                onClick={() => loadService(service)}
                className={`flex items-center justify-between px-[16px] py-[8px] rounded-[8px] border-2 cursor-pointer transition-all group ${
                  editingId === (service._id || service.id)
                    ? 'border-[#6364ff] bg-[#6364ff]/10'
                    : 'border-[rgba(102,102,102,0.75)]'
                }`}
              >
                <p className={`text-[14px] font-['Poppins'] ${
                  editingId === (service._id || service.id)
                    ? 'text-[#6364ff]'
                    : 'text-[rgba(102,102,102,0.75)]'
                }`}>
                  {service.title}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm(`Delete service "${service.title}"?`)) {
                      handleDelete(service._id || service.id);
                    }
                  }}
                  disabled={loading}
                  className="ml-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Entry Helper */}
      {editingId && (
        <button
          onClick={clearForm}
          className="absolute left-[79px] bottom-[20px] text-[#6364ff] underline font-['Poppins'] text-[16px]"
        >
          + Add New Service
        </button>
      )}
    </div>
  );
}
