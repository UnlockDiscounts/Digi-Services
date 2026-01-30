import { useState } from 'react';
import { Plus, CircleX } from 'lucide-react'; // Import icons

export default function WorkExampleTab({ workExamples, setWorkExamples, onNext }) {
  
  const handleAddWorkExample = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newExample = {
        id: Date.now(),
        imageUrl,
      };
      setWorkExamples([...workExamples, newExample]);
    }
  };

  const handleRemoveExample = (id) => {
    setWorkExamples(workExamples.filter(item => item.id !== id));
  };

  return (
    <div className="relative h-full w-full">
      {/* LAYOUT FIX: Changed 'top' from 186px to 80px 
          to reduce the gap between tabs and content.
      */}
      
      {/* Add Work Example Button */}
      <div className="absolute border-2 border-[rgba(0,0,0,0.8)] border-dashed h-[224px] left-[79px] overflow-clip rounded-[16px] top-[80px] w-[190px]">
        <label className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[197px] cursor-pointer hover:opacity-80 transition-opacity">
          <input
            type="file"
            onChange={handleAddWorkExample}
            className="hidden"
            accept="image/*"
          />
          <div className="flex items-center justify-center bg-[#EBEBEB] rounded-full size-[49px]">
            {/* Plus Icon from Lucide */}
            <Plus color="#666666" size={32} strokeWidth={3} />
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.2] text-[14px] text-black text-center tracking-[-0.28px] w-full">
            Add Work Example
          </p>
        </label>
      </div>

      {/* Existing Work Examples */}
      {workExamples.map((example, index) => (
        <div
          key={example.id}
          className="absolute bg-white h-[224px] overflow-visible rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] top-[80px] w-[190px]"
          style={{ left: `${289 + index * 210}px` }}
        >
          {/* Image Container */}
          <div className="relative h-[224px] w-[190px] rounded-[16px] overflow-hidden">
            <img
              alt="Work Example"
              className="object-cover size-full"
              src={example.imageUrl}
            />
          </div>

          {/* Delete (Cross) Button */}
          <button
            onClick={() => handleRemoveExample(example.id)}
            className="absolute -top-3 -right-3 bg-white rounded-full text-red-500 hover:text-red-700 transition-colors shadow-md z-10"
          >
            <CircleX size={28} fill="white" />
          </button>
        </div>
      ))}

      {/* Next Button - Adjusted top to follow the new layout height */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] right-[68px] rounded-[15px] top-[400px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
      >
        <p className="font-['Poppins:Regular',sans-serif] text-[24px] text-white">Next</p>
      </button>
    </div>
  );
}