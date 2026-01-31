export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Making Your Legacy Discoverable
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          AI-powered digital authority for Cuban small businesses in Miami. We translate 40 years of expertise into digital gold.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}