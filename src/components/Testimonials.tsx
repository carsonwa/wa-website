export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Facebook Marketing Expert",
      image: "/testimonials/sarah.jpg",
      quote: "The advanced Facebook strategies I learned here transformed my business. In just 6 months, I grew my following from 500 to 50,000+ engaged followers. The expert guidance made all the difference.",
      platform: "facebook"
    },
    {
      name: "Michael Chen",
      role: "YouTube Content Creator",
      image: "/testimonials/michael.jpg",
      quote: "Thanks to the YouTube mastery training, I went from 0 to 100K subscribers in under a year. The combination of expert coaching and AI tools helped me optimize every aspect of my channel.",
      platform: "youtube"
    },
    {
      name: "Lisa Martinez",
      role: "Pinterest Marketing Specialist",
      image: "/testimonials/lisa.jpg",
      quote: "The Pinterest strategies here are cutting-edge. I learned from actual Pinterest success stories, and now my pins generate over 1M monthly views. The community support is incredible.",
      platform: "pinterest"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from entrepreneurs who mastered our traffic strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="text-indigo-600">
                <i className={`fab fa-${testimonial.platform} text-2xl`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 