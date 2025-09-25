export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#1976D2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#64748B] font-medium">Loading Medi-Check...</p>
      </div>
    </div>
  );
}
