'use client';

import { useSignupModal } from '@/context/SignupModalContext';

export default function CTA() {
  const { openModal } = useSignupModal();

  const handleClick = () => {
    openModal();
  };

  return (
    <section className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Master Multiple Traffic Sources with Expert Guidance
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join our community of successful entrepreneurs and learn proven strategies for Facebook, YouTube, Instagram, X, Pinterest, and SEO. Get started today with expert-led training and AI-powered tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleClick}
            className="btn-primary bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
          >
            Start Your Journey Free
          </button>
          <p className="text-indigo-100 text-lg">
            Join 2M+ entrepreneurs building successful online businesses
          </p>
        </div>
      </div>
    </section>
  );
} 