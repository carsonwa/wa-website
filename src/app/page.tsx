'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePassword } from '@/context/PasswordContext';
import { useSignupModal } from '@/context/SignupModalContext';
import { useState } from 'react';
import PasswordProtection from '@/components/PasswordProtection';
import Testimonials from '@/components/Testimonials';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const { isAuthenticated } = usePassword();
  const { openModal: openSignupModal } = useSignupModal();
  const [email, setEmail] = useState('');

  if (!isAuthenticated) {
    return <PasswordProtection />;
  }

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
    <main>
      <Navigation />
      <header className="hero pt-8 md:pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create. Launch. Earn. Your Online Side Hustle Starts Here.
        </h1>
        <p>Build a blog, channel, product, or service with AI-powered tools, expert training, and a creator community that's always in your corner.</p>
        <div className="max-w-md mx-auto mt-8">
          <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 rounded-xl p-6 border border-white/30 shadow-lg">
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
                className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864F2] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all whitespace-nowrap"
              >
                <span className="flex items-center gap-3 whitespace-nowrap">
                  <i className="fab fa-facebook text-xl"></i>
                  Continue with Facebook
                </span>
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
      </header>

      <section className="section" id="how-it-works">
        <h2>How Side Hustlers & Creators Get Started</h2>
        <div className="features">
          <div className="feature">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/goals.svg"
                alt="Choose Your Focus"
                fill
                className="object-contain"
              />
            </div>
            <h3>Choose Your Focus</h3>
            <p>Pick from affiliate marketing, content creation, e-commerce, or digital products.</p>
          </div>
          <div className="feature">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/ai.svg"
                alt="AI Setup Help"
                fill
                className="object-contain"
              />
            </div>
            <h3>AI Setup Help</h3>
            <p>WA AI recommends niches, builds websites, and drafts your first content with you.</p>
          </div>
          <div className="feature">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/teamwork.svg"
                alt="Training + Community"
                fill
                className="object-contain"
              />
            </div>
            <h3>Training + Community</h3>
            <p>Follow step-by-step paths while learning from peers and mentors.</p>
          </div>
          <div className="feature">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/business_chat.svg"
                alt="AI Business Coach"
                fill
                className="object-contain"
              />
            </div>
            <h3>AI Business Coach</h3>
            <p>Get instant, tailored guidance from a built-in AI that helps map out your business strategy and next steps in real time.</p>
          </div>
        </div>
      </section>

      <section className="section relative rounded-3xl overflow-hidden" id="tools">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/illustrations/innovation.svg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <h2>Tools That Help You Launch Faster and Smarter</h2>
        <div className="tile-grid relative z-10">
          <div className="tile">
            <h3>AI Business Coach</h3>
            <p>Get instant, tailored guidance from a built-in AI that helps map out your business strategy and next steps in real time.</p>
          </div>
          <div className="tile">
            <h3>Smart Templates & Funnels</h3>
            <p>Launch faster with AI-generated content, landing pages, email funnels, and traffic plans designed to match your goals.</p>
          </div>
          <div className="tile">
            <h3>Niche & Trend Discovery</h3>
            <p>Use real-time data tools to uncover profitable topics, products, or services to build around, even if you're just starting.</p>
          </div>
          <div className="tile">
            <h3>One-Click Website Builder</h3>
            <p>Create and customize your website instantly, hosted and optimized for search engines and speed out of the box.</p>
          </div>
        </div>
      </section>

      <section className="section flex flex-col items-center gap-8" id="platform">
        <h2 className="mb-2 text-center">Your Creator Business, All in One Place</h2>
        <div className="w-full max-w-xl h-64 relative mx-auto">
          <Image
            src="/illustrations/content-creator.svg"
            alt="Content Creator"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <div className="block">
            <h3>Plan. Write. Publish.</h3>
            <p>With our integrated AI content planner and SiteContent editor, you can move from idea to publish-ready article or video script in minutes.</p>
          </div>
          <div className="block">
            <h3>Monetize Your Way</h3>
            <p>Sell affiliate products, digital downloads, coaching, or memberships, WA helps you pick your path and provides the tools to succeed.</p>
          </div>
          <div className="block">
            <h3>Track Real Progress</h3>
            <p>See what's working with built-in analytics, traffic tracking, keyword rankings, and personalized learning paths based on your results.</p>
          </div>
        </div>
      </section>

      <section className="section rounded-3xl overflow-hidden" id="support">
        <h2>Smart Tools + Real Support for Every Hustle</h2>
        <div className="grid-4">
          <div className="grid-item">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/seo.svg"
                alt="SEO-Optimized Hosting"
                fill
                className="object-contain"
              />
            </div>
            <h3>SEO-Optimized Hosting</h3>
            <p>Fast, secure, and scalable infrastructure designed for search visibility, uptime, and speed, no plugins or setups required.</p>
          </div>
          <div className="grid-item">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/research.svg"
                alt="AI Content & Research"
                fill
                className="object-contain"
              />
            </div>
            <h3>AI Content & Research</h3>
            <p>Tap into Author AI and Jaaxy tools to write, research, and optimize content across blogs, pages, and social media channels.</p>
          </div>
          <div className="grid-item">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/community.svg"
                alt="24/7 Community & Support"
                fill
                className="object-contain"
              />
            </div>
            <h3>24/7 Community & Support</h3>
            <p>Ask questions, join discussions, or get direct help from fellow entrepreneurs and experienced mentors around the clock.</p>
          </div>
          <div className="grid-item">
            <div className="relative w-full h-32 mb-4">
              <Image
                src="/illustrations/mentorship.svg"
                alt="Expert Guidance & Coaching"
                fill
                className="object-contain"
              />
            </div>
            <h3>Expert Guidance & Coaching</h3>
            <p>Get 1-on-1 coaching, feedback, and tailored help from vetted experts, available 24/7 when you need it most.</p>
          </div>
        </div>
      </section>

      <div className="pt-8 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Testimonials />
      </div>

      <section className="section testimonials rounded-3xl overflow-hidden" id="why-choose">
        <h2>Why Side Hustlers and Creators Choose WA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Trending Content Strategies</h3>
                <p className="text-gray-600">Master current algorithms and viral content formats across TikTok, Instagram, YouTube, and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">AI Content Creation</h3>
                <p className="text-gray-600">Generate engaging content, scripts, and captions that resonate with today's audiences using cutting-edge AI tools.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Multi-Platform Growth</h3>
                <p className="text-gray-600">Build authentic followings across platforms with strategies that work in 2025's social media landscape.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Creator Economy Tools</h3>
                <p className="text-gray-600">Access tools for monetizing through sponsorships, digital products, and creator memberships.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Real-Time Trend Analysis</h3>
                <p className="text-gray-600">Stay ahead with AI-powered insights into emerging topics and viral content opportunities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Engagement Optimization</h3>
                <p className="text-gray-600">Learn current best practices for maximizing reach and engagement across all major platforms.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Creator Community</h3>
                <p className="text-gray-600">Connect with successful creators who are actively growing their audiences in today's digital landscape.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-check text-green-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Start Free Today</h3>
                <p className="text-gray-600">Begin your creator journey with our latest tools and training - no credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section rounded-3xl overflow-hidden" id="faqs">
        <h2>FAQs: Everything You Need to Know</h2>
        <div className="faq-grid">
          <div className="faq">
            <h3>Do I need a business idea to start?</h3>
            <p>Nope! WA helps you brainstorm and validate niche ideas using AI-powered suggestions and real market data.</p>
          </div>
          <div className="faq">
            <h3>What kind of people use WA?</h3>
            <p>WA is for creators, freelancers, coaches, and aspiring entrepreneurs who want to turn skills or passions into online income.</p>
          </div>
          <div className="faq">
            <h3>How does the AI actually help?</h3>
            <p>It guides you through decisions, builds content drafts, identifies trending topics, and helps you launch faster with confidence.</p>
          </div>
          <div className="faq">
            <h3>Do I need to be technical or know how to code?</h3>
            <p>Not at all. WA handles hosting, setup, design tools, and automation so you can focus on your content and growth.</p>
          </div>
          <div className="faq">
            <h3>Is this just for affiliate marketing?</h3>
            <p>Nope! WA now supports affiliate models, digital product sales, services, memberships, and coaching businesses.</p>
          </div>
          <div className="faq">
            <h3>Can I try it before paying?</h3>
            <p>Absolutely. Start with a free account—no credit card required—and see how much you can build in just a few days.</p>
          </div>
        </div>
      </section>

      <section className="section" id="get-started">
        <h2>Let's Build Your Future Success</h2>
        <p className="text-center max-w-2xl mx-auto">Join a growing community of creators and entrepreneurs. Use the power of AI and expert guidance to make your business thrive.</p>
        <p className="text-center mt-8">
          <Link href="#" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold inline-block">
            Launch Your First Project – Free
          </Link>
        </p>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
