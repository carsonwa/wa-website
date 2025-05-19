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
  results: string[];
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
      results: [
        "50,000+ engaged followers",
        "3x increase in website traffic",
        "2x increase in sales",
        "Launched a successful coaching business"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Michael Chen",
      role: "YouTube Content Creator",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote: "Thanks to the YouTube mastery training, I went from 0 to 100K subscribers in under a year. The combination of expert coaching and AI tools helped me optimize every aspect of my channel.",
      fullQuote: "Thanks to the YouTube mastery training, I went from 0 to 100K subscribers in under a year. The combination of expert coaching and AI tools helped me optimize every aspect of my channel. I was skeptical about AI tools at first, but they've been a game-changer for my content creation process. The community here is incredibly supportive, and the expert feedback has been invaluable for my growth.",
      platform: "youtube",
      results: [
        "100K+ subscribers",
        "1M+ monthly views",
        "5x increase in ad revenue",
        "Launched successful digital products"
      ],
      gradient: "from-red-500 to-orange-600"
    },
    {
      name: "Lisa Martinez",
      role: "Pinterest Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      quote: "The Pinterest strategies here are cutting-edge. I learned from actual Pinterest success stories, and now my pins generate over 1M monthly views.",
      fullQuote: "The Pinterest strategies here are cutting-edge. I learned from actual Pinterest success stories, and now my pins generate over 1M monthly views. The community support is incredible. I was able to monetize my Pinterest presence through affiliate marketing and digital products. The AI tools helped me identify trending topics and optimize my content strategy.",
      platform: "pinterest",
      results: [
        "1M+ monthly pin views",
        "10x increase in website traffic",
        "Launched successful digital products",
        "Built a thriving Pinterest community"
      ],
      gradient: "from-pink-500 to-red-600"
    },
    {
      name: "David Wilson",
      role: "Digital Product Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The AI tools helped me launch my first digital product in just 2 weeks. Now I'm making passive income while helping others succeed.",
      fullQuote: "The AI tools helped me launch my first digital product in just 2 weeks. Now I'm making passive income while helping others succeed. The step-by-step guidance and community support made all the difference. I was able to validate my idea, create the product, and launch it to my first customers in record time.",
      platform: "digital",
      results: [
        "Launched 3 digital products",
        "5-figure monthly revenue",
        "Built a loyal customer base",
        "Helped 1000+ students succeed"
      ],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Emma Thompson",
      role: "Affiliate Marketer",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "I went from zero to $10K in affiliate commissions in my first 6 months. The training and tools here are unmatched.",
      fullQuote: "I went from zero to $10K in affiliate commissions in my first 6 months. The training and tools here are unmatched. The AI-powered content creation and optimization tools helped me rank my pages quickly. The community support and mentorship were invaluable in my journey.",
      platform: "affiliate",
      results: [
        "$10K+ monthly commissions",
        "Top 10 rankings for key terms",
        "Built 5 successful niche sites",
        "Mentored 50+ new affiliates"
      ],
      gradient: "from-green-500 to-teal-600"
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our members are achieving remarkable results across different platforms
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex-none w-[400px] snap-center bg-gradient-to-br ${testimonial.gradient} rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="p-6 text-white">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-white/80">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg mb-4">
                      "{expandedId === index ? testimonial.fullQuote : testimonial.quote}"
                    </p>
                    {testimonial.fullQuote.length > testimonial.quote.length && (
                      <button
                        onClick={() => setExpandedId(expandedId === index ? null : index)}
                        className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2"
                      >
                        {expandedId === index ? 'Show Less' : 'Read More'}
                        <i className={`fas fa-chevron-${expandedId === index ? 'up' : 'down'} text-xs`}></i>
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-white/90">
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className={`fab fa-${testimonial.platform} text-2xl`}></i>
                        <span className="text-sm font-medium">Success Story</span>
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
      </div>
    </section>
  );
} 