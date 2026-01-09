export function LogoBanner() {
  return (
    <div className="absolute top-6 left-6 z-50">
      <img 
        src="/dti-logo.png" 
        alt="DTI Logo" 
        className="h-16 w-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
