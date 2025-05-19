'use client';

import { useSignupModal } from '@/context/SignupModalContext';
import { useState } from 'react';

export default function Pricing() {
  const { openModal } = useSignupModal();
  const [email, setEmail] = useState('');

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      openModal('email', email);
    }
  };

  const handleSocialSignup = (provider: 'google' | 'facebook') => {
    openModal(provider);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Everyone Starts for Free
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100">
            Join our community of successful entrepreneurs and start your journey today. No credit card required.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30 shadow-lg">
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

          <div className="text-center">
            <p className="text-indigo-100 text-sm">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 