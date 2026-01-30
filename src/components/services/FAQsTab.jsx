import { useState } from 'react';

export default function FAQsTab({ faqs, setFaqs, onNext }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingId, setEditingId] = useState(null); // Tracks which FAQ is being edited

  const handleSave = () => {
    if (question && answer) {
      if (editingId) {
        // UPDATE existing FAQ
        const updatedFaqs = faqs.map((f) =>
          f.id === editingId ? { ...f, question, answer } : f
        );
        setFaqs(updatedFaqs);
      } else {
        // ADD new FAQ
        const newFAQ = {
          id: Date.now(),
          question,
          answer,
        };
        setFaqs([...faqs, newFAQ]);
      }

      // Clear form and reset editing state
      clearForm();
    }
  };

  const loadFAQ = (item) => {
    setQuestion(item.question);
    setAnswer(item.answer);
    setEditingId(item.id);
  };

  const clearForm = () => {
    setQuestion('');
    setAnswer('');
    setEditingId(null);
  };

  return (
    <div className="relative h-full">
      {/* Questions Input */}
      <div className="absolute content-stretch flex flex-col h-[63px] items-center justify-center left-[79px] px-[16px] py-[8px] rounded-[8px] top-[32px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Questions"
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full bg-transparent outline-none"
        />
      </div>

      {/* Answers Textarea */}
      <div className="absolute content-stretch flex flex-col h-[119px] items-start left-[79px] px-[16px] py-[8px] rounded-[8px] top-[127px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answers"
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full h-full bg-transparent outline-none resize-none"
        />
      </div>

      {/* Save Button (Centered) */}
      <div className="absolute content-stretch flex items-center left-[calc(50%-1px)] top-[278px] translate-x-[-50%]">
        <button
          onClick={handleSave}
          className="bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] rounded-[15px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors"
        >
          <p className="text-[24px] text-white">
            {editingId ? 'Update' : 'Save'}
          </p>
        </button>
      </div>

      {/* Dynamic Numbers List */}
      <div className="relative">
        {faqs.length > 0 && (
          <>
            {faqs.map((item, index) => (
              <div
                key={item.id}
                onClick={() => loadFAQ(item)} // Clicking loads the FAQ data
                style={{ left: `${79 + index * 80}px` }}
                className={`absolute flex flex-col h-[52px] items-center justify-center px-[16px] py-[8px] rounded-[8px] top-[461px] w-[64px] cursor-pointer transition-all ${
                  editingId === item.id ? 'bg-[#6364ff]/10' : ''
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-[9px] ${
                    editingId === item.id ? 'border-[#6364ff]' : 'border-[rgba(102,102,102,0.75)]'
                  }`}
                />
                <p className={`text-[24px] text-center ${
                  editingId === item.id ? 'text-[#6364ff]' : 'text-[rgba(102,102,102,0.75)]'
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

      {/* New Entry Helper */}
      {editingId && (
        <button
          onClick={clearForm}
          className="absolute left-[79px] top-[278px] text-[#6364ff] underline font-['Poppins'] text-[18px]"
        >
          + Add New Question
        </button>
      )}
    </div>
  );
}