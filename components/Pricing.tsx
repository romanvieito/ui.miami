export default function Pricing() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-4">$299<span className="text-lg font-normal">/month</span></div>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>Basic digital presence setup</li>
              <li>Social media management</li>
              <li>Monthly reporting</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-orange-500 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
            <div className="text-4xl font-bold mb-4">$599<span className="text-lg font-normal">/month</span></div>
            <ul className="mb-8 space-y-2">
              <li>Everything in Starter</li>
              <li>AI-powered marketing campaigns</li>
              <li>Website optimization</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-dark p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-4">$999<span className="text-lg font-normal">/month</span></div>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>Everything in Professional</li>
              <li>Custom AI solutions</li>
              <li>Dedicated account manager</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}