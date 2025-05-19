export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Path to Online Success</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our proven system to build your audience and drive targeted traffic across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">Choose Your Path</h3>
            <p className="text-gray-600">
              Select from multiple traffic strategies including Facebook, YouTube, Instagram, X, Pinterest, or SEO. Start with one and expand your reach.
            </p>
          </div>

          <div className="text-center relative">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">Learn from Experts</h3>
            <p className="text-gray-600">
              Access step-by-step training from successful entrepreneurs who are actively using these strategies to build their businesses.
            </p>
          </div>

          <div className="text-center relative">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">Implement & Scale</h3>
            <p className="text-gray-600">
              Use our AI-powered tools to implement what you've learned efficiently. Track your progress and optimize your results.
            </p>
          </div>

          <div className="text-center relative">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
            <h3 className="text-xl font-bold mb-4">Grow & Connect</h3>
            <p className="text-gray-600">
              Engage with our community of experts and fellow entrepreneurs. Get feedback, stay updated, and scale your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 