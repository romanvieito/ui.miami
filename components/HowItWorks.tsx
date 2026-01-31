export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-4">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Assessment</h3>
            <p className="text-gray-300">
              We analyze your current digital presence and identify opportunities for improvement.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Strategy</h3>
            <p className="text-gray-300">
              Our AI creates a customized digital marketing strategy tailored to your business.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
            <p className="text-gray-300">
              We execute the strategy and continuously optimize for maximum results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}