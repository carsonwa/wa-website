'use client';

import { SignupModalProvider } from '@/context/SignupModalContext';
import { VideoModalProvider } from '@/context/VideoModalContext';
import { PasswordProvider } from '@/context/PasswordContext';
import VideoModal from '@/components/VideoModal';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PasswordProvider>
    <SignupModalProvider>
      <VideoModalProvider>
        {children}
        <VideoModal />
      </VideoModalProvider>
    </SignupModalProvider>
    </PasswordProvider>
  );
} 