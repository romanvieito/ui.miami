export default function Testimonials() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="text-gray-300 mb-4">
              "InCubando transformed our online presence. We've seen a 300% increase in digital engagement."
            </p>
            <div className="font-semibold">Maria Rodriguez</div>
            <div className="text-orange-400">Owner, Rodriguez Bakery</div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="text-gray-300 mb-4">
              "Finally, someone who understands Cuban businesses in Miami. The results speak for themselves."
            </p>
            <div className="font-semibold">Carlos Martinez</div>
            <div className="text-orange-400">CEO, Martinez Construction</div>
          </div>
        </div>
      </div>
    </section>
  );
}