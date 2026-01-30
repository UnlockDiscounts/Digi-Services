import { useState } from 'react';
import { X } from 'lucide-react'; 
import AddServiceTab from './AddServiceTab';
import CardComponentTab from './CardComponentTab';
import TestimonialsTab from './TestimonialsTab';
import FAQsTab from './FAQsTab';
import WorkExampleTab from './WorkExampleTab';
import PreviewTab from './PreviewTab';

export function ServiceModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('add-service');
  const [cardItems, setCardItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [workExamples, setWorkExamples] = useState([]);

  if (!isOpen) return null;

  const getTabTitle = () => {
    switch (activeTab) {
      case 'add-service': return 'Add Service';
      case 'card-component': return 'Add Card Components';
      case 'testimonials': return 'Add Testimonials';
      case 'faqs': return 'Add FAQs';
      case 'work-example': return 'Add Work Example';
      case 'preview': return 'Preview';
      default: return 'Add Service';
    }
  };

  const getTabClass = (tabId, position) => {
    const baseClass = "h-[56px] flex items-center justify-center cursor-pointer border-2 border-[#6364ff] box-border transition-colors";
    const activeClass = "bg-[#6364ff] text-white";
    const inactiveClass = "bg-white text-[#6364ff]";
    
    let roundedClass = "";
    if (position === 'first') roundedClass = "rounded-l-[20px]";
    if (position === 'last') roundedClass = "rounded-r-[20px]";

    return `${baseClass} ${activeTab === tabId ? activeClass : inactiveClass} ${roundedClass}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-[8px] w-[1250px] h-[720px] relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="absolute flex items-center justify-between left-1/2 top-[18px] translate-x-[-50%] w-[1093px]">
          <p className="font-['Poppins'] font-semibold text-[32px] text-black">
            {getTabTitle()}
          </p>
          <button onClick={onClose} className="cursor-pointer hover:opacity-70 transition-opacity">
            <X size={33} color="black" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="absolute flex items-center left-1/2 top-[98px] translate-x-[-50%] w-[1093px]">
          <div className="flex w-full">
            <div onClick={() => setActiveTab('add-service')} className={`${getTabClass('add-service', 'first')} w-[190px] border-r-0`}>
              <p className="font-['Poppins'] text-[24px]">Add Service</p>
            </div>
            <div onClick={() => setActiveTab('card-component')} className={`${getTabClass('card-component')} w-[242px] border-r-0`}>
              <p className="font-['Poppins'] text-[24px]">Card Component</p>
            </div>
            <div onClick={() => setActiveTab('testimonials')} className={`${getTabClass('testimonials')} w-[189px] border-r-0`}>
              <p className="font-['Poppins'] text-[24px]">Testimonials</p>
            </div>
            <div onClick={() => setActiveTab('faqs')} className={`${getTabClass('faqs')} w-[122px] border-r-0`}>
              <p className="font-['Poppins'] text-[24px]">FAQs</p>
            </div>
            <div onClick={() => setActiveTab('work-example')} className={`${getTabClass('work-example')} w-[210px] border-r-0`}>
              <p className="font-['Poppins'] text-[24px]">Work Example</p>
            </div>
            <div onClick={() => setActiveTab('preview')} className={`${getTabClass('preview', 'last')} w-[140px]`}>
              <p className="font-['Poppins'] text-[24px]">Preview</p>
            </div>
          </div>
        </div>

        {/* Tab Content Container - Scrollable with Bottom Spacer */}
        <div className="absolute inset-0 top-[154px] overflow-y-auto">
          {activeTab === 'add-service' && (
            <AddServiceTab onNext={() => setActiveTab('card-component')} />
          )}
          {activeTab === 'card-component' && (
            <CardComponentTab
              cardItems={cardItems}
              setCardItems={setCardItems}
              onNext={() => setActiveTab('testimonials')}
            />
          )}
          {activeTab === 'testimonials' && (
            <TestimonialsTab
              testimonials={testimonials}
              setTestimonials={setTestimonials}
              onNext={() => setActiveTab('faqs')}
            />
          )}
          {activeTab === 'faqs' && (
            <FAQsTab
              faqs={faqs}
              setFaqs={setFaqs}
              onNext={() => setActiveTab('work-example')}
            />
          )}
          {activeTab === 'work-example' && (
            <WorkExampleTab
              workExamples={workExamples}
              setWorkExamples={setWorkExamples}
              onNext={() => setActiveTab('preview')}
            />
          )}
          {activeTab === 'preview' && <PreviewTab />}

        </div>
      </div>
    </div>
  );
}