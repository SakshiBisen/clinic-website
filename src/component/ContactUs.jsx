const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="bg-white p-8 rounded-xl shadow flex flex-col justify-center">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sakshi Health Clinic
          </h2>

          <p className="text-gray-600 mb-6">
            हम आपके स्वास्थ्य का पूरा ध्यान रखते हैं। किसी भी सहायता के लिए हमसे संपर्क करें।
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700 mb-6">
            <p>📍 Bhopal, Madhya Pradesh</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ sakshiclinic@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-blue-600 hover:scale-110">📘</a>
            <a href="#" className="text-pink-500 hover:scale-110">📸</a>
            <a href="#" className="text-blue-400 hover:scale-110">🐦</a>
          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=bhopal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;