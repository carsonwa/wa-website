'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  fullQuote: string;
  platform: string;
  gradient: string;
}

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Facebook Marketing Expert",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The advanced Facebook strategies I learned here transformed my business. In just 6 months, I grew my following from 500 to 50,000+ engaged followers.",
      fullQuote: "The advanced Facebook strategies I learned here transformed my business. In just 6 months, I grew my following from 500 to 50,000+ engaged followers. The expert guidance made all the difference. I was struggling to get any traction on Facebook before joining WA. The step-by-step training and community support helped me understand exactly what works in 2024. Now I'm helping other businesses grow their social media presence too!",
      platform: "facebook",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Michael Chen",
      role: "YouTube Content Creator",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote: "Thanks to the YouTube mastery training, I went from 0 to 100K subscribers in under a year. The combination of expert coaching and AI tools helped me optimize every aspect of my channel.",
      fullQuote: "Thanks to the YouTube mastery training, I went from 0 to 100K subscribers in under a year. The combination of expert coaching and AI tools helped me optimize every aspect of my channel. I was skeptical about AI tools at first, but they've been a game-changer for my content creation process. The community here is incredibly supportive, and the expert feedback has been invaluable for my growth.",
      platform: "youtube",
      gradient: "from-red-500 to-orange-600"
    },
    {
      name: "Lisa Martinez",
      role: "Pinterest Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      quote: "The Pinterest strategies here are cutting-edge. I learned from actual Pinterest success stories, and now my pins generate over 1M monthly views.",
      fullQuote: "The Pinterest strategies here are cutting-edge. I learned from actual Pinterest success stories, and now my pins generate over 1M monthly views. The community support is incredible. I was able to monetize my Pinterest presence through affiliate marketing and digital products. The AI tools helped me identify trending topics and optimize my content strategy.",
      platform: "pinterest",
      gradient: "from-pink-500 to-red-600"
    },
    {
      name: "David Wilson",
      role: "Digital Product Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The AI tools helped me launch my first digital product in just 2 weeks. Now I'm making passive income while helping others succeed.",
      fullQuote: "The AI tools helped me launch my first digital product in just 2 weeks. Now I'm making passive income while helping others succeed. The step-by-step guidance and community support made all the difference. I was able to validate my idea, create the product, and launch it to my first customers in record time.",
      platform: "digital",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Emma Thompson",
      role: "Affiliate Marketer",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "I went from zero to $10K in affiliate commissions in my first 6 months. The training and tools here are unmatched.",
      fullQuote: "I went from zero to $10K in affiliate commissions in my first 6 months. The training and tools here are unmatched. The AI-powered content creation and optimization tools helped me rank my pages quickly. The community support and mentorship were invaluable in my journey.",
      platform: "affiliate",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "James Wilson",
      role: "Instagram Influencer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "The Instagram growth strategies here are revolutionary. I built a 200K+ following in the fitness niche and now work with major brands.",
      fullQuote: "The Instagram growth strategies here are revolutionary. I built a 200K+ following in the fitness niche and now work with major brands. The content planning tools and hashtag research features saved me countless hours. The community feedback helped me refine my content strategy and connect with my audience on a deeper level.",
      platform: "instagram",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Sophia Lee",
      role: "E-commerce Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "I launched my online store and hit $50K in sales within 3 months. The e-commerce training and tools here are game-changing.",
      fullQuote: "I launched my online store and hit $50K in sales within 3 months. The e-commerce training and tools here are game-changing. The product research tools helped me identify winning products, and the marketing automation features saved me hours every week. The community support was crucial in navigating the challenges of starting an online business.",
      platform: "shopify",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Alex Rodriguez",
      role: "TikTok Content Creator",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      quote: "The TikTok strategies here helped me grow to 500K followers in 6 months. Now I'm monetizing through brand deals and digital products.",
      fullQuote: "The TikTok strategies here helped me grow to 500K followers in 6 months. Now I'm monetizing through brand deals and digital products. The trend analysis tools and content planning features were invaluable. The community feedback helped me understand what resonates with my audience and how to create viral content consistently.",
      platform: "tiktok",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "Olivia Brown",
      role: "Podcast Host",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "I launched my podcast and reached 100K downloads in my first year. The audio production tools and marketing strategies here are top-notch.",
      fullQuote: "I launched my podcast and reached 100K downloads in my first year. The audio production tools and marketing strategies here are top-notch. The guest outreach features and episode planning tools helped me maintain a consistent publishing schedule. The community support and expert feedback were crucial in growing my audience.",
      platform: "spotify",
      gradient: "from-green-500 to-green-700"
    },
    {
      name: "Daniel Kim",
      role: "LinkedIn Business Coach",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "I built a 6-figure coaching business through LinkedIn. The platform-specific strategies and automation tools here are invaluable.",
      fullQuote: "I built a 6-figure coaching business through LinkedIn. The platform-specific strategies and automation tools here are invaluable. The content calendar and engagement tracking features helped me maintain a consistent presence. The community support and expert feedback were crucial in refining my personal brand and attracting high-value clients.",
      platform: "linkedin",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      name: "Isabella Garcia",
      role: "Email Marketing Expert",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "I grew my email list to 100K subscribers and generate $30K monthly through email marketing. The automation tools here are incredible.",
      fullQuote: "I grew my email list to 100K subscribers and generate $30K monthly through email marketing. The automation tools here are incredible. The email sequence builder and A/B testing features helped me optimize my campaigns. The community support and expert feedback were crucial in developing effective email strategies.",
      platform: "envelope",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      name: "William Taylor",
      role: "SEO Consultant",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "I help businesses rank on Google's first page. The SEO tools and training here helped me master modern search optimization.",
      fullQuote: "I help businesses rank on Google's first page. The SEO tools and training here helped me master modern search optimization. The keyword research and content optimization features are powerful. The community support and expert feedback were crucial in staying ahead of algorithm changes and implementing effective SEO strategies.",
      platform: "google",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      name: "Mia Anderson",
      role: "Course Creator",
      image: "https://randomuser.me/api/portraits/women/88.jpg",
      quote: "I created an online course that generated $200K in its first year. The course creation tools and marketing strategies here are amazing.",
      fullQuote: "I created an online course that generated $200K in its first year. The course creation tools and marketing strategies here are amazing. The content planning and student engagement features helped me create a high-quality learning experience. The community support and expert feedback were crucial in refining my course and marketing strategy.",
      platform: "graduation-cap",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Ethan Clark",
      role: "Social Media Manager",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "I manage social media for 10+ clients and generate $15K monthly. The management tools and automation features here are a game-changer.",
      fullQuote: "I manage social media for 10+ clients and generate $15K monthly. The management tools and automation features here are a game-changer. The content calendar and analytics features help me deliver consistent results. The community support and expert feedback were crucial in developing effective social media strategies for different industries.",
      platform: "share-alt",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "Ava Martinez",
      role: "Content Writer",
      image: "https://randomuser.me/api/portraits/women/95.jpg",
      quote: "I built a successful freelance writing business. The content creation tools and client management features here are essential.",
      fullQuote: "I built a successful freelance writing business. The content creation tools and client management features here are essential. The writing templates and SEO optimization features help me deliver high-quality content consistently. The community support and expert feedback were crucial in improving my writing skills and finding high-paying clients.",
      platform: "pen",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value based on your card width
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section pt-20" id="success-stories">
      <h2>Stories from Wealthy Affiliate Members</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-none w-[400px] bg-gradient-to-br ${testimonial.gradient} p-6 rounded-xl text-white shadow-lg`}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-white/80">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-lg mb-4">
                {expandedId === index ? testimonial.fullQuote : testimonial.quote}
              </p>

              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="text-white/90 hover:text-white font-medium"
              >
                {expandedId === index ? 'Read Less' : 'Read More'}
              </button>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className={`fab fa-${testimonial.platform} text-2xl`}></i>
                    <span className="text-sm font-medium">Member Testimonial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fas fa-star text-yellow-300"></i>
                    <i className="fas fa-star text-yellow-300"></i>
                    <i className="fas fa-star text-yellow-300"></i>
                    <i className="fas fa-star text-yellow-300"></i>
                    <i className="fas fa-star text-yellow-300"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
} 