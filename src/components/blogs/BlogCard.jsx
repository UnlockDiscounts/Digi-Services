import { useState } from 'react';

export function BlogCard({ blog, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  const statusStyles = {
    draft: {
      bg: 'rgba(119,125,121,0.38)',
      border: '#3c4743',
      dot: '#3c4743',
      text: '#3c4743',
    },
    published: {
      bg: 'rgba(133,176,145,0.38)',
      border: '#41873f',
      dot: '#2a846b',
      text: '#2b9676',
    },
    scheduled: {
      bg: 'rgba(122,92,12,0.13)',
      border: '#fabf28',
      dot: '#fabf28',
      text: '#fabf28',
    },
    archived: {
      bg: 'rgba(220,151,117,0.37)',
      border: '#db5d1f',
      dot: '#db5d1f',
      text: '#db5d1f',
    },
  };

  const style = statusStyles[blog.status] || statusStyles.draft;

  return (
    <div className="bg-[#ebebeb] rounded-[16px] overflow-hidden relative h-[371px]">
      <div className="h-[187px] rounded-[8px] m-3 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4">
        <p className="font-['Poppins',sans-serif] font-medium text-[20px] text-black text-center leading-[1.2] tracking-[-0.4px] mb-4">
          {blog.title}
        </p>

        <div className="flex justify-between text-[13px] text-[rgba(0,0,0,0.5)] mb-4">
          <span className="font-['Poppins',sans-serif]">Author- {blog.author}</span>
          <span className="font-['Poppins',sans-serif]">{blog.date}</span>
        </div>

        <div className="flex items-center justify-between">
          <div
            className="flex gap-[10px] h-[33px] items-center justify-center px-[10px] rounded-[24px] border"
            style={{
              backgroundColor: style.bg,
              borderColor: style.border,
            }}
          >
            <div
              className="rounded-[50px] size-[15px]"
              style={{ backgroundColor: style.dot }}
            />
            <p
              className="font-['Poppins',sans-serif] font-medium text-[16px] capitalize"
              style={{ color: style.text }}
            >
              {blog.status}
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <svg className="w-[12px] h-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 20">
<circle cx="2.5" cy="2.5" r="2.5" fill="#666666" />
                <circle cx="2.5" cy="10" fill="#666666" r="2.5" />
                <circle cx="2.5" cy="17.5" fill="#666666" r="2.5" />
              </svg>
            </button>

            {showMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute overflow-hidden right-6 top-0 z-50 bg-white rounded-[8px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] w-[120px]">
                  <button
                    onClick={() => {
                      onEdit(blog);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 font-['Poppins',sans-serif] text-[16px] text-black rounded-t-[8px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      onDelete(blog.id);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 font-['Poppins',sans-serif] text-[16px] text-red-600 rounded-b-[8px]"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}