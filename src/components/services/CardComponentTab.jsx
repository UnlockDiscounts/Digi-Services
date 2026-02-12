import { useState } from 'react';
import axios from 'axios';

export default function CardComponentTab({ cardItems, setCardItems, onNext }) {
  const sections = [
    { id: 1, name: 'Section 1' },
    { id: 2, name: 'Section 2' },
  ];
  const [activeSection, setActiveSection] = useState(1);
  
  // Form state
  const [sectionTitle, setSectionTitle] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null); 
  const [loading, setLoading] = useState(false);

  // Filter items ONLY for the active section
  const currentSectionItems = cardItems.filter(item => item.sectionId === activeSection);

  const handleSave = async () => {
    if (sectionTitle && title && description) {
      setLoading(true);

      // Constructing the payload exactly like your API body example
      const payload = {
        service: localStorage.getItem('serviceId'), // Use the stored service ID
        sections: [
          {
            sectionTitle,
            title,
            description
          }
        ]
      };

      try {
        let response;

        if (editingId) {
          // IMPLEMENT UPDATE: PUT request to the specific card ID
          response = await axios.put(
            `https://digiservices-backend-6hc3.onrender.com/api/v1/cards/${editingId}`,
            payload
          );
        } else {
          // CREATE NEW: POST request
          response = await axios.post(
            'https://digiservices-backend-6hc3.onrender.com/api/v1/cards',
            payload
          );
        }

        if (response.status === 201 || response.status === 200) {
          // If update, replace item; if new, add to list
          if (editingId) {
            const updatedItems = cardItems.map(item => 
              item.id === editingId 
                ? { ...item, sectionTitle, title, description } 
                : item
            );
            setCardItems(updatedItems);
          } else {
            const newItem = {
              id: response.data._id || Date.now(), // Use API ID for the preview
              sectionId: activeSection,
              sectionTitle,
              title,
              description,
            };
            setCardItems([...cardItems, newItem]);
          }
          clearForm();
        }
      } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        alert('Failed to save card data.');
      } finally {
        setLoading(false);
      }
    }
  };

  const loadItem = (item) => {
    setSectionTitle(item.sectionTitle);
    setTitle(item.title);
    setDescription(item.description);
    setEditingId(item.id); 
  };

  const clearForm = () => {
    setSectionTitle('');
    setTitle('');
    setDescription('');
    setEditingId(null);
  };

  return (
    <div className="relative h-full w-full">
      
      {/* Section Tabs */}
      <div className="absolute flex gap-[27px] items-center left-[79px] top-[32px]">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => {
              setActiveSection(section.id);
              clearForm();
            }}
            className={`flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] w-[184px] cursor-pointer ${
              activeSection === section.id ? 'bg-[#6364ff]' : ''
            }`}
          >
            {activeSection !== section.id && (
              <div aria-hidden="true" className="absolute border-2 border-[#6364ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
            )}
            <p className={`font-['Poppins'] text-[24px] text-center ${activeSection === section.id ? 'text-white' : 'text-[#6364ff]'}`}>
              {section.name}
            </p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="absolute flex flex-col gap-[20px] left-[79px] top-[140px] w-[1093px]">
        
        <div className="flex flex-col gap-[15px] w-full">
          <div className="h-[63px] relative rounded-[8px] w-full border-2 border-[rgba(102,102,102,0.75)] px-[16px] flex items-center">
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="Section Title"
              className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
            />
          </div>
          <div className="h-[63px] relative rounded-[8px] w-full border-2 border-[rgba(102,102,102,0.75)] px-[16px] flex items-center">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
            />
          </div>
          <div className="h-[63px] relative rounded-[8px] w-full border-2 border-[rgba(102,102,102,0.75)] px-[16px] flex items-center">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="bg-transparent outline-none w-full text-[24px] font-['Poppins'] text-[rgba(102,102,102,0.75)]"
            />
          </div>
        </div>

        {/* Dynamic Number Row & Save Button */}
        <div className="flex items-center justify-between w-full mt-[10px] min-h-[60px]">
          <div className="relative flex-1 h-[52px]">
            {currentSectionItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => loadItem(item)} 
                style={{ left: `${index * 80}px` }} 
                className={`absolute flex items-center justify-center h-[52px] w-[64px] rounded-[8px] border-2 cursor-pointer transition-colors ${
                  editingId === item.id ? 'border-[#6364ff] bg-[#6364ff]/10' : 'border-[rgba(102,102,102,0.75)]'
                }`}
              >
                <p className={`text-[24px] font-['Poppins'] ${editingId === item.id ? 'text-[#6364ff]' : 'text-[rgba(102,102,102,0.75)]'}`}>
                  {index + 1}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-[#6364ff] h-[56px] w-[184px] rounded-[15px] text-white text-[24px] font-['Poppins'] hover:bg-[#5253ee] transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Saving...' : (editingId ? 'Update' : 'Save')}
          </button>
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={onNext}
            className="bg-[#6364ff] h-[56px] rounded-[15px] w-[184px] text-white text-[24px] font-['Poppins'] hover:bg-[#5253ee]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}