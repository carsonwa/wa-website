'use client';

import { useState, useEffect } from 'react';
import { useVideoModal } from '@/context/VideoModalContext';
import CloseButton from '@/components/common/CloseButton';

export default function VideoModal() {
  const { isOpen, closeModal } = useVideoModal();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed z-50 inset-0 overflow-y-auto transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 transition-all duration-500 ease-in-out
            ${isOpen ? 'opacity-90 bg-gray-900' : 'opacity-0 bg-gray-900'}`} 
          aria-hidden="true" 
          onClick={closeModal}
        />
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        {/* Modal panel */}
        <div 
          className={`inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full
            ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'}`}
        >
          <div className="absolute top-4 right-4 z-10">
            <CloseButton 
              onClick={closeModal}
              size="lg"
              color="light"
            />
          </div>
          
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jTFE0dbQgdw?si=q9rY-CJ7wUcuEpR9&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
} 