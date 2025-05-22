'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Affiliates() {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Promote the Innovator and Industry Leader in the Affiliate Marketing Space</h1>
        <p className="text-lg text-gray-600 mb-6">High-Converting, Recurring Commissions. The ELITE WA Affiliate Program.</p>
        <Link href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition">Get Your Affiliate Links Now</Link>
        <div className="flex justify-center mt-8">
          <Image src="/illustrations/innovation.svg" alt="Affiliate Hero" width={320} height={180} />
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">The Elite WA Affiliate Program</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
            <Image src="/illustrations/business_chat.svg" alt="WA Affiliate Program" width={100} height={100} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">The WA Affiliate Program</h3>
            <p className="text-gray-600">Our affiliate program lets you refer new members and earn the most lucrative, recurring commissions in the industry. Promote a platform that is trusted by 2M+ entrepreneurs and creators.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
            <Image src="/illustrations/goals.svg" alt="Lifetime Commissions" width={100} height={100} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lifetime Commissions</h3>
            <p className="text-gray-600">Earn up to $121.00 recurring per sale, with lifetime cookies and commissions. Our system ensures you get paid for every upgrade, forever.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
            <Image src="/illustrations/analytics.svg" alt="Millions in Commissions Paid" width={100} height={100} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Millions in Commissions Paid</h3>
            <p className="text-gray-600">We've paid out over $50 million in commissions to affiliates worldwide. Join a program with a proven track record of success and on-time payments.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
            <Image src="/illustrations/community.svg" alt="Send Us Free Members" width={100} height={100} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Send Us Free Members</h3>
            <p className="text-gray-600">Get special credit for free referrals. Our system tracks and rewards you for every member you send, even if they join for free and upgrade later.</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">A Service You Can Trust, A Service You Can Recommend</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-600 mb-4">Wealthy Affiliate has been in business since 2005. It is the most active, most helpful, and highest-converting affiliate marketing platform in the world. Our service puts your referrals in the best position to thrive, grow, and achieve real results.</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>2005</span>
              <span>-</span>
              <span>2025</span>
              <span>|</span>
              <span>20 Years of Trust</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/illustrations/mentorship.svg" alt="Trust Badge" width={120} height={120} />
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Affiliate Training That Creates Experts</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-600 mb-4">Grow as an affiliate with world-class training, live events, and a community that's always in your corner. Our affiliate bootcamp and resources are designed to help you succeed at every stage.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/illustrations/teamwork.svg" alt="Affiliate Training" width={120} height={120} />
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Promotional Toolbox</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
            <Image src="/illustrations/analytics.svg" alt="Affiliate Tracking" width={60} height={60} className="mb-2" />
            <span className="font-semibold">Affiliate Tracking</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
            <Image src="/illustrations/goals.svg" alt="Create Widgets" width={60} height={60} className="mb-2" />
            <span className="font-semibold">Create Widgets</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
            <Image src="/illustrations/research.svg" alt="Comparison Charts" width={60} height={60} className="mb-2" />
            <span className="font-semibold">Comparison Charts</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
            <Image src="/illustrations/seo.svg" alt="Comprehensive Stats" width={60} height={60} className="mb-2" />
            <span className="font-semibold">Comprehensive Stats</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Affiliate Bootcamp</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-600 mb-4">Our Affiliate Bootcamp is a step-by-step training platform for affiliates. Learn how to build a successful business, drive traffic, and maximize your commissions with our proven system.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/illustrations/business_chat.svg" alt="Affiliate Bootcamp" width={120} height={120} />
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Vegas, You Are INVITED.</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-600 mb-4">Hit the private conference milestone and you'll be invited to our annual Las Vegas Super Affiliate Conference. Network with top affiliates, learn from the best, and enjoy an unforgettable experience—on us!</p>
            <div className="flex items-center gap-8 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">150</span>
                <span className="text-gray-500 text-sm">Attendees</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">$6M+</span>
                <span className="text-gray-500 text-sm">All Expenses PAID</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Vegas Illustration */}
      <div className="w-full relative my-0 py-0 -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-64">
        <Image src="/illustrations/wa-vegas.png" alt="Las Vegas Full Width" width={1920} height={400} className="w-full h-auto object-cover" priority />
      </div>

      <section className="py-12 px-4 bg-yellow-50">
        <h2 className="text-2xl font-bold mb-4">It's More Than Evident, We Care About Affiliates.</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-center">Wealthy Affiliate is truly unique in the affiliate marketing world. The Wealthy Affiliate team and community are here to help you succeed. We care about your business and your referrals, and we're always working to improve the platform for you and your audience.</p>
        <div className="text-center">
          <Link href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition">Get Started Now</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 