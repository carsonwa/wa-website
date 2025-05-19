'use client';

import { SignupModalProvider } from '@/context/SignupModalContext';
import { VideoModalProvider } from '@/context/VideoModalContext';
import VideoModal from '@/components/VideoModal';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SignupModalProvider>
      <VideoModalProvider>
        {children}
        <VideoModal />
      </VideoModalProvider>
    </SignupModalProvider>
  );
} 