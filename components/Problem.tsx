export default function Problem() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The Problem</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Traditional businesses struggle in the digital age</h3>
            <p className="text-gray-300">
              Cuban small businesses in Miami have decades of experience and loyal customers,
              but they struggle to compete online with modern marketing techniques.
            </p>
          </div>
          <div className="bg-dark p-8 rounded-lg">
            <div className="text-4xl mb-4">📉</div>
            <h4 className="text-xl font-semibold mb-2">Lost Opportunities</h4>
            <p className="text-gray-300">
              Without proper digital presence, businesses miss out on new customers and growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}