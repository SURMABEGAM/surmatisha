import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen  from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or feedback? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send us a Message
            </h2>

            <form className="space-y-5">
              <input
                className="input input-bordered w-full"
                placeholder="Full Name"
              />
              <input
                className="input input-bordered w-full"
                placeholder="Email Address"
              />
              <input
                className="input input-bordered w-full"
                placeholder="Subject"
              />
              <textarea
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Message"
              />

              <button className="btn btn-primary w-full rounded-full flex items-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center">
                <Mail className="mx-auto mb-2" />
                <h3 className="font-bold">Email</h3>
                <p className="text-sm">support@utilitybill.com</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl text-center">
                <Phone className="mx-auto mb-2" />
                <h3 className="font-bold">Call</h3>
                <p className="text-sm">+880 123 456 789</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
                <MessageCircle className="mx-auto mb-2" />
                <h3 className="font-bold">Live Chat</h3>
                <p className="text-sm">24/7 Available</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex gap-3">
                <MapPin className="text-primary" />
                <div>
                  <h3 className="font-bold text-white">Office Address</h3>
                  <p className="text-gray-300">Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277!2d90.366!3d23.806"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-3 rounded-full">
            <CheckCircle size={18} />
            Average response time: under 2 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
