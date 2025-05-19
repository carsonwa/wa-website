'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useSignupModal } from '@/context/SignupModalContext';

export default function SignupModal() {
  const { isOpen, closeModal, initialProvider, initialEmail } = useSignupModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initialProvider === 'email' && initialEmail) {
        setEmail(initialEmail);
        setCurrentStep(2); // Skip to email form if email is provided
      } else {
        setCurrentStep(1); // Start at provider selection for social logins
      }
    } else {
      // Reset form when modal closes
      setEmail('');
      setName('');
      setCurrentStep(1);
    }
  }, [isOpen, initialProvider, initialEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-center mb-6"
                >
                  {currentStep === 1 ? 'Join Wealthy Affiliate' : 'Complete Your Registration'}
                </Dialog.Title>

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                    >
                      <i className="fab fa-google text-xl"></i>
                      Continue with Google
                    </button>
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864F2] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                    >
                      <i className="fab fa-facebook text-xl"></i>
                      Continue with Facebook
                    </button>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-gray-200"></div>
                      <span className="text-gray-500 text-sm">or</span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="w-full flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                    >
                      <i className="fas fa-envelope text-xl"></i>
                      Sign up with Email
                    </button>
                  </div>
                )}

                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                    >
                      Create Free Account
                    </button>
                  </form>
                )}

                <div className="mt-4 text-center text-sm text-gray-500">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 