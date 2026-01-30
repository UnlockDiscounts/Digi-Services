import { useState } from 'react';

// interface AddServiceTabProps {
//   onNext: () => void;
// }

export default function AddServiceTab({ onNext }) {
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="relative h-full flex items-center justify-center">
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
    </div>
  );
}
