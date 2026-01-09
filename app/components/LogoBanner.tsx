import Image from 'next/image';

export function LogoBanner() {
  return (
    <div className="absolute top-6 left-6 z-50">
      <Image 
        src="/dti-logo.png" 
        alt="DTI Logo" 
        width={64}
        height={64}
        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
