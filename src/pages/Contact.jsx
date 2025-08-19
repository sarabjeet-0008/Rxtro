import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center px-4 py-16">
      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-200"></div>

      {/* Contact Card */}
      <div className="relative z-10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 w-full max-w-5xl bg-gradient-to-br from-green-600 to-teal-700">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10 tracking-tight">
          Get in Touch with <span className="text-green-300">Rxtro</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-200 leading-relaxed">
                Have a question or need support? Our team is here to help you with your electronics journey anytime.
              </p>
            </div>
            <div className="space-y-2 text-lg">
              <p>📍 <strong>Address:</strong> 123 Tech Lane, Delhi, India</p>
              <p>📧 <strong>Email:</strong> support@Rxtro.com</p>
              <p>📞 <strong>Phone:</strong> +91 9319595736</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1 font-medium">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all" 
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-medium">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all" 
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-medium">Your Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message..." 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all">
              </textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-400 via-green-500 to-teal-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
