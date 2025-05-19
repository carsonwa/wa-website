export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">2M+</div>
            <div className="text-gray-600 text-lg">Active Members</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-600 text-lg">Expert Trainers</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">15+</div>
            <div className="text-gray-600 text-lg">Marketing Channels</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600 text-lg">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
} 