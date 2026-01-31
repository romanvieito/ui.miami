export default function Features() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Marketing</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to optimize your digital marketing strategies.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Digital Presence</h3>
            <p className="text-gray-300">
              Build a strong online presence that attracts and converts customers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Growth Analytics</h3>
            <p className="text-gray-300">
              Track your progress and optimize your strategies with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}