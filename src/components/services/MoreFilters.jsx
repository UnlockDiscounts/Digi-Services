export function MoreFilters({ isOpen, onClose, sortBy, onSortChange }) {
  if (!isOpen) return null;

  const handleOptionClick = (option) => {
    onSortChange(option);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-[60px] bg-white rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] w-[300px] h-[262px] z-50">
        <p className="font-medium leading-[normal] p-[10px] text-[18px] text-black">Sort By</p>
        
        <div className="bg-[#d5d5d5] flex h-[37px] items-center p-[10px]">
          <p className="font-medium leading-[normal] text-[18px] text-black">Sort by Date</p>
        </div>

        <div className="relative h-[60px]">
          <button
            onClick={() => handleOptionClick('newest')}
            className="absolute flex items-center gap-[17px] left-[8px] top-[5px] w-full py-2 px-2 rounded"
          >
            <div className="size-[17px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" fill={sortBy === 'newest' ? '#907AFF' : 'transparent'} r="8.5" />
                {sortBy === 'newest' && (
                  <circle cx="8.5" cy="8.5" fill="white" r="3.96667" />
                )}
                {sortBy !== 'newest' && (
                  <circle cx="8.5" cy="8.5" r="8" stroke="#9B9B9B" />
                )}
              </svg>
            </div>
            <p className="text-[18px] text-black">Newest First</p>
            {sortBy === 'newest' && (
              <div className="ml-auto mr-4">
                {/* <svg className="size-[14px]" fill="none" viewBox="0 0 14.5 10.3313">
                  <path d={svgPaths.p2186700} stroke="#907AFF" strokeLinecap="round" strokeWidth="2" />
                </svg> */}
              </div>
            )}
          </button>

          <button
            onClick={() => handleOptionClick('oldest')}
            className="absolute flex items-center gap-[17px] left-[8px] top-[35px] w-full py-2 px-2 rounded"
          >
            <div className="size-[17px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" fill={sortBy === 'oldest' ? '#907AFF' : 'transparent'} r="8.5" />
                {sortBy === 'oldest' && (
                  <circle cx="8.5" cy="8.5" fill="white" r="3.96667" />
                )}
                {sortBy !== 'oldest' && (
                  <circle cx="8.5" cy="8.5" r="8" stroke="#9B9B9B" />
                )}
              </svg>
            </div>
            <p className="text-[18px] text-black">Oldest First</p>
            {sortBy === 'oldest' && (
              <div className="ml-auto mr-4">
                {/* <svg className="size-[14px]" fill="none" viewBox="0 0 14.5 10.3313">
                  <path d={svgPaths.p2186700} stroke="#907AFF" strokeLinecap="round" strokeWidth="2" />
                </svg> */}
              </div>
            )}
          </button>
        </div>

        <div className="bg-[#d5d5d5] flex h-[37px] items-center p-[10px] mt-2">
          <p className="font-medium leading-[normal] text-[18px] text-black">Sort Alphabetically</p>
        </div>

        <div className="relative h-[70px]">
          <button
            onClick={() => handleOptionClick('a-z')}
            className="absolute flex items-center gap-[17px] left-[8px] top-[5px] w-full py-2 px-2 rounded"
          >
            <div className="size-[17px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" fill={sortBy === 'a-z' ? '#907AFF' : 'transparent'} r="8.5" />
                {sortBy === 'a-z' && (
                  <circle cx="8.5" cy="8.5" fill="white" r="3.96667" />
                )}
                {sortBy !== 'a-z' && (
                  <circle cx="8.5" cy="8.5" r="8" stroke="#9B9B9B" />
                )}
              </svg>
            </div>
            <p className="text-[18px] text-black">A-Z (Title)</p>
            {sortBy === 'a-z' && (
              <div className="ml-auto mr-4">
                {/* <svg className="size-[14px]" fill="none" viewBox="0 0 14.5 10.3313">
                  <path d={svgPaths.p2186700} stroke="#907AFF" strokeLinecap="round" strokeWidth="2" />
                </svg> */}
              </div>
            )}
          </button>

          <button
            onClick={() => handleOptionClick('z-a')}
            className="absolute flex items-center gap-[17px] left-[8px] top-[35px] w-full py-2 px-2 rounded"
          >
            <div className="size-[17px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" fill={sortBy === 'z-a' ? '#907AFF' : 'transparent'} r="8.5" />
                {sortBy === 'z-a' && (
                  <circle cx="8.5" cy="8.5" fill="white" r="3.96667" />
                )}
                {sortBy !== 'z-a' && (
                  <circle cx="8.5" cy="8.5" r="8" stroke="#9B9B9B" />
                )}
              </svg>
            </div>
            <p className="text-[18px] text-black">Z-A (Title)</p>
            {sortBy === 'z-a' && (
              <div className="ml-auto mr-4">
                {/* <svg className="size-[14px]" fill="none" viewBox="0 0 14.5 10.3313">
                  <path d={svgPaths.p2186700} stroke="#907AFF" strokeLinecap="round" strokeWidth="2" />
                </svg> */}
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
