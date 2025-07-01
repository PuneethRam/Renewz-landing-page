import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Zap, 
  Leaf, 
  Users, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Share2, 
  Star, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calculator
} from 'lucide-react';
import SavingsEstimator from './components/SavingsEstimator';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animated counters
  const [counters, setCounters] = useState({
    kwh: 0,
    co2: 0,
    users: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        kwh: 2847,
        co2: 1239,
        users: 2156
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      text: "I save $50+ monthly on electricity while supporting clean energy. It's amazing to go solar without any rooftop installation!",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Environmental Advocate",
      text: "Finally, a way to meaningfully contribute to renewable energy adoption. The impact dashboard shows exactly how much CO₂ I'm offsetting.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Working Parent",
      text: "Super simple setup and genuine savings every month. Love that my subscription helps fund solar installations at local schools.",
      rating: 5
    }
  ];

  // Show savings estimator page
  if (currentPage === 'calculator') {
    return <SavingsEstimator />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-xl">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Renewz</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How It Works</a>
              <a href="#impact" className="text-gray-600 hover:text-emerald-600 transition-colors">Impact</a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Reviews</a>
              <button 
                onClick={() => setCurrentPage('calculator')}
                className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center"
              >
                <Calculator className="h-4 w-4 mr-1" />
                Calculator
              </button>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-yellow-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Go Solar.{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    No Rooftop Needed.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Subscribe to clean energy and save on your electricity bill. We install solar panels at trusted locations, 
                  you get virtual energy credits monthly. It's solar made simple.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setCurrentPage('calculator')}
                  className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Savings
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2,000+</div>
                  <div className="text-sm text-gray-600">Happy Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$50+</div>
                  <div className="text-sm text-gray-600">Avg Monthly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-200 to-amber-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-green-200/30"></div>
                <div className="relative z-10 grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-4 flex items-center justify-center animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <Sun className="h-6 w-6 text-white" />
                    </div>
                  ))}
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3">
                  <Zap className="h-6 w-6 text-yellow-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting clean energy has never been this simple. Here's how we make solar accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-10 w-10 text-emerald-600" />
              </div>
              <div className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">Step 1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">We Install Solar</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with schools, factories, and community centers to install high-efficiency solar panels at trusted host locations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">Step 2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You Subscribe</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose a subscription plan that fits your energy needs. Get allocated a share of clean energy from our solar installations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-10 w-10 text-blue-600" />
              </div>
              <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">Step 3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You Save & Help Earth</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive monthly credits on your electricity bill while reducing your carbon footprint. Track your environmental impact in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section id="impact" className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Collective Impact
            </h2>
            <p className="text-xl text-gray-600">
              Together, we're making a real difference for our planet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {counters.kwh.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">kWh Generated</div>
              <div className="text-sm text-gray-500 mt-2">Clean energy produced this month</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {counters.co2.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Tons CO₂ Offset</div>
              <div className="text-sm text-gray-500 mt-2">Carbon emissions prevented</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {counters.users.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Happy Subscribers</div>
              <div className="text-sm text-gray-500 mt-2">People making a difference</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why People Love Renewz
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our community of solar subscribers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people already saving money and fighting climate change. 
            No rooftop required, no upfront costs.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-4 rounded-xl border-0 focus:ring-2 focus:ring-emerald-300 focus:outline-none text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {isSubmitted ? 'Thanks!' : 'Join Waitlist'}
              </button>
            </div>
          </form>

          <p className="text-emerald-200 text-sm mt-4">
            Free to join • No spam • Early access to savings
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-xl">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Renewz</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Making clean energy accessible to everyone. Subscribe to solar without the rooftop hassle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Renewz. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with 💚 for a sustainable future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;