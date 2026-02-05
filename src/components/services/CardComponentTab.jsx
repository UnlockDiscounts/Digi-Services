import { useState, useEffect } from 'react';
import { getCards, createCard, updateCard } from '../../services/cardsApi';

export default function CardComponentTab({ cardItems, setCardItems, onNext }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch existing cards on mount
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getCards();
        if (data && Array.isArray(data)) {
          setCardItems(data);
        }
      } catch (error) {
        console.error('Failed to fetch cards:', error);
        setErrorMessage('Failed to load cards from server');
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [setCardItems]);
  const sections = [
    { id: 1, name: 'Section 1' },
    { id: 2, name: 'Section 2' },
  ];
  const [activeSection, setActiveSection] = useState(1);
  
  // Form state
  const [sectionTitle, setSectionTitle] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null); // Track which item is being edited

  // Filter items ONLY for the active section
  const currentSectionItems = cardItems.filter(item => item.sectionId === activeSection);

  const handleSave = async () => {
    if (sectionTitle && title && description) {
      try {
        setErrorMessage('');
        setLoading(true);
        
        const section = {
          sectionTitle,
          title,
          description,
        };

        if (editingId) {
          // UPDATE existing item
          const cardData = { sections: [section] };
          const updated = await updateCard(editingId, cardData);
          const updatedItems = cardItems.map(item => 
            (item.id || item._id) === editingId 
              ? { ...updated, id: updated._id || updated.id } 
              : item
          );
          setCardItems(updatedItems);
        } else {
          // ADD new item - send sections array as API expects
          const cardData = { sections: [section] };
          const newCard = await createCard(cardData);
          setCardItems([...cardItems, { ...newCard, id: newCard._id || newCard.id }]);
        }
        
        // Reset form and editing state
        clearForm();
      } catch (error) {
        console.error('Failed to save card:', error);
        setErrorMessage('Failed to save card. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const loadItem = (item) => {
    setSectionTitle(item.sectionTitle);
    setTitle(item.title);
    setDescription(item.description);
    setEditingId(item._id || item.id); // Set this ID so "Save" knows to update instead of add
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
              clearForm(); // Clear inputs when switching sections
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
                key={item._id || item.id}
                onClick={() => loadItem(item)} // CLICKING THE NUMBER LOADS DATA
                style={{ left: `${index * 80}px` }} 
                className={`absolute flex items-center justify-center h-[52px] w-[64px] rounded-[8px] border-2 cursor-pointer transition-colors ${
                  editingId === (item._id || item.id) ? 'border-[#6364ff] bg-[#6364ff]/10' : 'border-[rgba(102,102,102,0.75)]'
                }`}
              >
                <p className={`text-[24px] font-['Poppins'] ${editingId === (item._id || item.id) ? 'text-[#6364ff]' : 'text-[rgba(102,102,102,0.75)]'}`}>
                  {index + 1}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-[#6364ff] h-[56px] w-[184px] rounded-[15px] text-white text-[24px] font-['Poppins'] hover:bg-[#5253ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (editingId ? 'Update' : 'Save')}
          </button>
        </div>
        
        {errorMessage && (
          <p className="text-red-500 text-[16px] mt-2">{errorMessage}</p>
        )}
      </div>

      {/* Footer Navigation */}
      <button
        onClick={onNext}
        className="absolute bg-[#6364ff] h-[56px] rounded-[15px] w-[184px] text-white text-[24px] font-['Poppins'] hover:bg-[#5253ee] transition-colors right-[79px] bottom-[32px]"
      >
        Next
      </button>
    </div>
  );
}