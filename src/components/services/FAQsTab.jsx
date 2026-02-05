import { useState, useEffect } from 'react';
import { getFAQs, createFAQ, updateFAQ, deleteFAQ } from '../../services/faqsApi';

export default function FAQsTab({ faqs, setFaqs, onNext }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingId, setEditingId] = useState(null); // Tracks which FAQ is being edited
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch FAQs on mount
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const data = await getFAQs();
        if (data && Array.isArray(data)) {
          setFaqs(data);
        }
      } catch (error) {
        console.error('Failed to fetch FAQs:', error);
        setErrorMessage('Failed to load FAQs from server');
      } finally {
        setLoading(false);
      }
    };
    fetchFAQs();
  }, [setFaqs]);

  const handleSave = async () => {
    if (question && answer) {
      try {
        setErrorMessage('');
        if (editingId) {
          // UPDATE existing FAQ
          const updated = await updateFAQ(editingId, { question, answer });
          const updatedFaqs = faqs.map((f) =>
            (f.id || f._id) === editingId ? updated : f
          );
          setFaqs(updatedFaqs);
        } else {
          // ADD new FAQ
          const newFAQ = await createFAQ({ question, answer });
          setFaqs([...faqs, newFAQ]);
        }

        // Clear form and reset editing state
        clearForm();
      } catch (error) {
        setErrorMessage(error?.message || 'Failed to save FAQ');
      }
    }
  };

  const loadFAQ = (item) => {
    setQuestion(item.question);
    setAnswer(item.answer);
    setEditingId(item._id || item.id);
  };

  const clearForm = () => {
    setQuestion('');
    setAnswer('');
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    try {
      setErrorMessage('');
      setLoading(true);
      await deleteFAQ(id);
      setFaqs(faqs.filter(f => (f._id || f.id) !== id));
      if (editingId === id) {
        clearForm();
      }
    } catch (error) {
      console.error('Failed to delete FAQ:', error);
      setErrorMessage('Failed to delete FAQ. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full">
      {errorMessage && (
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-red-600 text-sm">
          {errorMessage}
        </p>
      )}
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
          disabled={loading}
          className="bg-[#6364ff] flex h-[56px] items-center justify-center px-[17px] py-[16px] rounded-[15px] w-[184px] cursor-pointer hover:bg-[#5253ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="text-[24px] text-white">
            {loading ? 'Saving...' : (editingId ? 'Update' : 'Save')}
          </p>
        </button>
      </div>

      {/* Dynamic Numbers List */}
      <div className="relative">
        {faqs.length > 0 && (
          <>
            {faqs.map((item, index) => (
              <div
                key={item._id || item.id}
                onClick={() => loadFAQ(item)} // Clicking loads the FAQ data
                style={{ left: `${79 + index * 80}px` }}
                className={`absolute flex flex-col h-[52px] items-center justify-center px-[16px] py-[8px] rounded-[8px] top-[461px] w-[64px] cursor-pointer transition-all group ${
                  editingId === (item._id || item.id) ? 'bg-[#6364ff]/10' : ''
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-[9px] ${
                    editingId === (item._id || item.id) ? 'border-[#6364ff]' : 'border-[rgba(102,102,102,0.75)]'
                  }`}
                />
                <p className={`text-[24px] text-center ${
                  editingId === (item._id || item.id) ? 'text-[#6364ff]' : 'text-[rgba(102,102,102,0.75)]'
                }`}>
                  {index + 1}
                </p>
                {/* Delete button - visible on hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('Are you sure you want to delete this FAQ?')) {
                      handleDelete(item._id || item.id);
                    }
                  }}
                  disabled={loading}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-[24px] h-[24px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[14px] font-bold hover:bg-red-600 disabled:opacity-50"
                >
                  ×
                </button>
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