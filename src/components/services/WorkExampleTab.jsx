import { useState } from 'react';
import { Plus, CircleX } from 'lucide-react';
import axios from 'axios';

export default function WorkExampleTab({ workExamples, setWorkExamples, onNext }) {
  const [loading, setLoading] = useState(false);

  const handleAddWorkExample = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);

      // Prepare FormData as seen in your Work API Postman screenshot
      const formData = new FormData();
      formData.append('service', localStorage.getItem('serviceId')); // Service ID from your example
      formData.append('title', "Work Example"); // API requires a title
      formData.append('description', "Uploaded work sample"); // API requires a description
      formData.append('files', file); // Field name 'files' from Postman

      try {
        const response = await axios.post(
          'https://digiservices-backend-6hc3.onrender.com/api/v1/works',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' }
          }
        );

        if (response.status === 201 || response.status === 200) {
          // Use the Cloudinary URL returned by the API for the preview
          const newExample = {
            id: response.data._id,
            imageUrl: response.data.files[0], 
          };
          setWorkExamples([...workExamples, newExample]);
        }
      } catch (error) {
        console.error('Upload Error:', error.response?.data || error.message);
        alert('Failed to upload work example.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveExample = (id) => {
    // Note: You might want to add an API DELETE call here later
    setWorkExamples(workExamples.filter(item => item.id !== id));
  };

  return (
    <div className="relative h-full w-full">
      {/* Add Work Example Button */}
      <div className="absolute border-2 border-[rgba(0,0,0,0.8)] border-dashed h-[224px] left-[79px] overflow-clip rounded-[16px] top-[80px] w-[190px]">
        <label className={`absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[197px] cursor-pointer hover:opacity-80 transition-opacity ${loading ? 'pointer-events-none' : ''}`}>
          <input
            type="file"
            onChange={handleAddWorkExample}
            className="hidden"
            accept="image/*"
            disabled={loading}
          />
          <div className="flex items-center justify-center bg-[#EBEBEB] rounded-full size-[49px]">
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#6364ff]"></div>
            ) : (
              <Plus color="#666666" size={32} strokeWidth={3} />
            )}
          </div>
          <p className="font-['Poppins'] leading-[1.2] text-[14px] text-black text-center tracking-[-0.28px] w-full">
            {loading ? 'Uploading...' : 'Add Work Example'}
          </p>
        </label>
      </div>

      {/* Existing Work Examples Preview */}
      {workExamples.map((example, index) => (
        <div
          key={example.id}
          className="absolute bg-white h-[224px] overflow-visible rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] top-[80px] w-[190px]"
          style={{ left: `${289 + index * 210}px` }}
        >
          <div className="relative h-[224px] w-[190px] rounded-[16px] overflow-hidden">
            <img
              alt="Work Example"
              className="object-cover size-full"
              src={example.imageUrl}
            />
          </div>

          <button
            onClick={() => handleRemoveExample(example.id)}
            className="absolute -top-3 -right-3 bg-white rounded-full text-red-500 hover:text-red-700 transition-colors shadow-md z-10"
          >
            <CircleX size={28} fill="white" />
          </button>
        </div>
      ))}

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] right-[68px] rounded-[15px] top-[400px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
      >
        <p className="font-['Poppins'] text-[24px] text-white">Next</p>
      </button>
    </div>
  );
}