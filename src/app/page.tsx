'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePassword } from '@/context/PasswordContext';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  const { isAuthenticated } = usePassword();

  if (!isAuthenticated) {
    return <PasswordProtection />;
  }

  return (
    <main>
      <header className="hero">
        <h1>Create. Launch. Earn. Your Side Hustle Starts Here.</h1>
        <p>Build a blog, channel, product, or service with AI-powered tools, expert training, and a creator community that's always in your corner.</p>
        <Link href="#get-started">Start Your Side Hustle Free</Link>
      </header>

      <section className="section">
        <h2>How Side Hustlers & Creators Get Started</h2>
        <div className="features">
          <div className="feature">
            <h3>Choose Your Focus</h3>
            <p>Pick from affiliate marketing, content creation, e-commerce, or digital products.</p>
          </div>
          <div className="feature">
            <h3>AI Setup Help</h3>
            <p>WA AI recommends niches, builds websites, and drafts your first content with you.</p>
          </div>
          <div className="feature">
            <h3>Training + Community</h3>
            <p>Follow step-by-step paths while learning from peers and mentors.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Tools That Help You Launch Faster and Smarter</h2>
        <div className="tile-grid">
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

      <section className="section">
        <h2>Your Creator Business, All in One Place</h2>
        <div className="triple-row">
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

      <section className="section">
        <h2>Smart Tools + Real Support for Every Hustle</h2>
        <div className="grid-4">
          <div className="grid-item">
            <h3>SEO-Optimized Hosting</h3>
            <p>Fast, secure, and scalable infrastructure designed for search visibility, uptime, and speed, no plugins or setups required.</p>
          </div>
          <div className="grid-item">
            <h3>AI Content & Research</h3>
            <p>Tap into Author AI and Jaaxy tools to write, research, and optimize content across blogs, pages, and social media channels.</p>
          </div>
          <div className="grid-item">
            <h3>24/7 Community & Support</h3>
            <p>Ask questions, join discussions, or get direct help from fellow entrepreneurs and experienced mentors around the clock.</p>
          </div>
          <div className="grid-item">
            <h3>Mentorship Marketplace</h3>
            <p>Upgrade your progress with optional coaching and feedback from vetted experts, tailored help when you need it most.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>From First Steps to First Sales</h2>
        <div className="cards">
          <div className="card">
            <Image
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Maria R"
              width={64}
              height={64}
              className="member-img"
            />
            <h3>Maria R.</h3>
            <p>Parenting blogger turned digital creator. Launched her first niche site and now earns consistent affiliate income with content she built using WA's AI tools.</p>
          </div>
          <div className="card">
            <Image
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="Devon S"
              width={64}
              height={64}
              className="member-img"
            />
            <h3>Devon S.</h3>
            <p>Personal finance YouTuber who expanded to digital products and memberships with WA's funnel templates and SEO tools.</p>
          </div>
          <div className="card">
            <Image
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt="Lila G"
              width={64}
              height={64}
              className="member-img"
            />
            <h3>Lila G.</h3>
            <p>Freelancer who built an online course in 3 months using WA's training and mentorship. Now growing a full-time business from her side hustle roots.</p>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <h2>Why Side Hustlers and Creators Choose WA</h2>
        <div className="testimonial">
          <p>"WA gave me clarity and confidence. I turned my weekend writing hobby into a blog that pays my rent."</p>
          <strong>- Maria R., Creator & Blogger</strong>
        </div>
        <div className="testimonial">
          <p>"The people, the AI tools, the structure—I finally stopped spinning my wheels and launched a real product."</p>
          <strong>- Devon S., YouTube Coach</strong>
        </div>
        <div className="testimonial">
          <p>"As a total beginner, I launched a niche site in weeks. Now it's my main side income, and growing fast."</p>
          <strong>- Lila G., Side Hustler</strong>
        </div>
      </section>

      <section className="section">
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
        <p>&copy; 2025 Wealthy Affiliate. All rights reserved.</p>
      </footer>
    </main>
  );
}
