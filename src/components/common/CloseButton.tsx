'use client';

interface CloseButtonProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark';
  className?: string;
}

export default function CloseButton({ 
  onClick, 
  size = 'md', 
  color = 'light',
  className = ''
}: CloseButtonProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const colorClasses = {
    light: 'text-white hover:text-gray-300',
    dark: 'text-gray-600 hover:text-gray-800'
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-black/20 backdrop-blur-sm p-2 transition-all duration-200 ease-in-out hover:bg-black/30 ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg 
        className="w-full h-full" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2.5" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
} 