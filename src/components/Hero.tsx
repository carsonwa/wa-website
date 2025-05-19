'use client';

import { useSignupModal } from '@/context/SignupModalContext';
import { useVideoModal } from '@/context/VideoModalContext';
import { useState } from 'react';

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

  const handleSocialSignup = (provider: 'google' | 'facebook') => {
    openSignupModal(provider);
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
                <i className="fab fa-google text-xl"></i>
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