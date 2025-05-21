'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-indigo-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-indigo-100">support@wealthyaffiliate.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hours</h3>
                    <p className="text-indigo-100">Monday - Friday: 9am - 5pm PST</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-indigo-100">
                      Wealthy Affiliate<br />
                      123 Business Street<br />
                      Vancouver, BC V6B 1A1<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="text-gray-700 mb-2">Name</div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <div className="text-gray-700 mb-2">Email</div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <div className="text-gray-700 mb-2">Subject</div>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                        required
                      >
                        <option value="" className="text-gray-400 py-2">Select a subject</option>
                        <option value="general" className="py-2 text-gray-700">General Inquiry</option>
                        <option value="support" className="py-2 text-gray-700">Technical Support</option>
                        <option value="billing" className="py-2 text-gray-700">Billing Question</option>
                        <option value="partnership" className="py-2 text-gray-700">Partnership Opportunity</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-gray-700 mb-2">Message</div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-600">We typically respond to all inquiries within 24-48 business hours.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold mb-2">What information should I include in my message?</h3>
                <p className="text-gray-600">Please include your name, email, and a detailed description of your inquiry to help us assist you better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 