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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or feedback? We are always ready to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            rounded-3xl
            shadow-2xl
            p-8
            "
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Send us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full p-4 rounded-xl
                bg-white/10
                border border-white/20
                text-white
                placeholder-gray-300
                outline-none
                focus:border-sky-600
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full p-4 rounded-xl
                bg-white/10
                border border-white/20
                text-white
                placeholder-gray-300
                outline-none
                focus:border-sky-600
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                w-full p-4 rounded-xl
                bg-white/10
                border border-white/20
                text-white
                placeholder-gray-300
                outline-none
                focus:border-sky-600
                "
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="
                w-full p-4 rounded-xl
                bg-white/10
                border border-white/20
                text-white
                placeholder-gray-300
                outline-none
                focus:border-sky-600
                "
              ></textarea>

              <button
                className="
                w-full py-4 rounded-xl
                bg-gradient-to-r from-sky-700 to-purple-600
                text-white font-bold
                flex items-center justify-center gap-2
                hover:scale-105
                transition duration-300
                "
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* CONTACT BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center text-white">
                <Mail className="mx-auto mb-3 text-sky-700" />
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-sm text-gray-300">support@utilitybill.com</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center text-white">
                <Phone className="mx-auto mb-3 text-green-400" />
                <h3 className="font-bold mb-1">Call</h3>
                <p className="text-sm text-gray-300">+880 123 456 789</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center text-white">
                <MessageCircle className="mx-auto mb-3 text-pink-400" />
                <h3 className="font-bold mb-1">Live Chat</h3>
                <p className="text-sm text-gray-300">24/7 Available</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <MapPin className="text-sky-700 mt-1" />

                <div>
                  <h3 className="font-bold text-white text-lg">
                    Office Address
                  </h3>

                  <p className="text-gray-300">
                    Mohammadpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-72 backdrop-blur-xl">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184.54588802887739!2d90.3405547142029!3d23.758409690298762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf8265ece061%3A0x4b8aa1cc7a58bb87!2sUkil%20Bari!5e1!3m2!1sen!2sbd!4v1778529874891!5m2!1sen!2sbd"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
