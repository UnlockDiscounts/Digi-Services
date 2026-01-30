import preview from '../../assets/preview.svg';

export default function PreviewTab() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="w-full max-w-[900px] h-[500px] bg-gray-100 rounded-lg overflow-auto shadow-md border-2 border-[#6364ff]/20">
        <img
          src={preview}
          alt="Service Preview"
          className="w-full h-auto min-h-full object-cover block"
        />
      </div>
    </div>
  );
}
