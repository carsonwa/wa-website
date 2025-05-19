'use client';

import { useSignupModal } from '@/context/SignupModalContext';
import { useVideoModal } from '@/context/VideoModalContext';
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Hero() {
  const { openModal: openSignupModal } = useSignupModal();
  const { openModal: openVideoModal } = useVideoModal();
  const [email, setEmail] = useState('');

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      openSignupModal('email', email);
    }
  };

  const handleSocialSignup = async (provider: 'google' | 'facebook') => {
    try {
      if (provider === 'google') {
        const googleProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, googleProvider);
        // Handle successful Google sign-in
        console.log('Google sign-in successful:', result.user);
      } else if (provider === 'facebook') {
        const facebookProvider = new FacebookAuthProvider();
        const result = await signInWithPopup(auth, facebookProvider);
        // Handle successful Facebook sign-in
        console.log('Facebook sign-in successful:', result.user);
      }
    } catch (error) {
      console.error('Social sign-in error:', error);
      // Fallback to modal if social sign-in fails
      openSignupModal(provider);
    }
  };

  return (
    <section className="gradient-bg min-h-[80vh] flex items-center justify-center text-white">
      <div className="w-full max-w-6xl mx-auto text-center px-4 py-12 sm:py-24">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-6xl mx-auto" style={{ letterSpacing: '-0.03em' }}>
          Start Earning Affiliate Commissions Faster Than Ever With Expert-Led Training and <span className="underline bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Tools</span> that Anyone Can Use!
        </h1>
        <div className="text-lg sm:text-xl font-medium mb-8 max-w-xl mx-auto">
          <ul className="text-left space-y-4 list-none text-base sm:text-lg">
            <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <span className="mr-3 text-green-400 mt-1">
                <i className="fas fa-check-circle text-lg"></i>
              </span>
              <span className="opacity-90">Grow your audience across Google, Facebook, YouTube, Instagram, X, Pinterest, Reddit, Quora, and more.</span>
            </li>
            <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <span className="mr-3 text-green-400 mt-1">
                <i className="fas fa-check-circle text-lg"></i>
              </span>
              <span className="opacity-90">Even Beginners can drive massive traffic from multiple platforms - We Teach it All!</span>
            </li>
            <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <span className="mr-3 text-green-400 mt-1">
                <i className="fas fa-check-circle text-lg"></i>
              </span>
              <span className="opacity-90">No Experience Required - Wealthy Affiliate is For Everyone!</span>
            </li>
          </ul>
        </div>

        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center whitespace-nowrap">
            Your Free Starter Course is Waiting!
          </h2>
          <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 rounded-xl p-6 mb-8 border border-white/30 shadow-lg">
            <div className="space-y-4">
              <button 
                onClick={() => handleSocialSignup('google')}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
              <button 
                onClick={() => handleSocialSignup('facebook')}
                className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864F2] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
              >
                <i className="fab fa-facebook text-xl"></i>
                Continue with Facebook
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-white/60 text-sm">or</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>
              <form onSubmit={handleEmailSignup} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                >
                  <i className="fas fa-envelope text-xl"></i>
                  Sign up with Email
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={openVideoModal}
            className="btn-primary bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg transition-all flex items-center gap-2"
          >
            <i className="fas fa-play-circle"></i>
            Watch Demo
          </button>
          <p className="text-white/80 text-lg">
            See how our experts can help you succeed
          </p>
        </div>
      </div>
    </section>
  );
} 