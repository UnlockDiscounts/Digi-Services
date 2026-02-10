import { useState } from 'react';
import axios from 'axios';

export default function FAQsTab({ faqs, setFaqs, onNext }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingId, setEditingId] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (question && answer) {
      setLoading(true);

      // JSON payload as per your Postman screenshot
      const payload = {
        service: localStorage.getItem('serviceId'), // Hardcoded service ID from your example
        question: question,
        answer: answer
      };

      try {
        // API Endpoint from your Postman screenshot
        const response = await axios.post(
          'https://digiservices-backend-6hc3.onrender.com/api/v1/faqs',
          payload
        );

        if (response.status === 201 || response.status === 200) {
          if (editingId) {
            // UPDATE existing FAQ in local state
            const updatedFaqs = faqs.map((f) =>
              f.id === editingId ? { ...f, question, answer } : f
            );
            setFaqs(updatedFaqs);
          } else {
            // ADD new FAQ with the ID returned from the API
            const newFAQ = {
              id: response.data._id || Date.now(),
              question,
              answer,
            };
            setFaqs([...faqs, newFAQ]);
          }
          clearForm();
        }
      } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        alert('Failed to save FAQ. Please check the console.');
      } finally {
        setLoading(false);
      }
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
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full bg-transparent outline-none font-['Poppins']"
        />
      </div>

      {/* Answers Textarea */}
      <div className="absolute content-stretch flex flex-col h-[119px] items-start left-[79px] px-[16px] py-[8px] rounded-[8px] top-[127px] w-[1093px]">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(102,102,102,0.75)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answers"
          className="text-[24px] text-[rgba(102,102,102,0.75)] w-full h-full bg-transparent outline-none resize-none font-['Poppins']"
        />
      </div>

      {/* Save Button */}
      <div className="absolute content-stretch flex items-center left-[calc(50%-1px)] top-[278px] translate-x-[-50%]">
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

      {/* Dynamic Numbers List (Preview) */}
      <div className="relative">
        {faqs.map((item, index) => (
          <div
            key={item.id}
            onClick={() => loadFAQ(item)}
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
            <p className={`text-[24px] text-center font-['Poppins'] ${
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

      {/* New Entry Link */}
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