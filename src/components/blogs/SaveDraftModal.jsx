export function SaveDraftModal({ onDiscard, onSave }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[632px] px-[48px] py-[24px] space-y-[24px]">
        <p className="font-['Poppins',sans-serif] font-semibold text-[32px] text-black">Save as Draft?</p>

        <div className="font-['Poppins',sans-serif] font-medium text-[24px] text-black space-y-[12px]">
          <p>Your changes haven't been published yet.</p>
          <p>You can save them as a draft and continue editing later, or discard them permanently.</p>
        </div>

        <div className="flex gap-[164px]">
          <button
            onClick={onDiscard}
            className="bg-[#414141] px-[17px] py-[16px] rounded-[15px] w-[184px] hover:bg-[#303030] transition-colors"
          >
            <p className="font-['Poppins',sans-serif] text-[24px] text-white text-center">Discard</p>
          </button>

          <button
            onClick={onSave}
            className="bg-[#6364ff] px-[17px] py-[16px] rounded-[15px] w-[184px] hover:bg-[#5254ee] transition-colors"
          >
            <p className="font-['Poppins',sans-serif] text-[24px] text-white">Save</p>
          </button>
        </div>
      </div>
    </div>
  );
}
