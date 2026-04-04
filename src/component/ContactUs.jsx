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
            <p>📍Himayunpur,mainpuri Uttar pradesh 205262</p>
            <p>📞 +919033545074</p>
            <p>✉️ at5857298@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl">
  
  {/* Email */}
  <a 
    href="at5857298@gmail.com" 
    className="text-red-500 hover:scale-110"
  >
    📧
  </a>

  {/* Call */}
  <a 
    href="tel:+91928693615" 
    className="text-green-600 hover:scale-110"
  >
    📞
  </a>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/919876543210" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-green-500 hover:scale-110"
  >
    💬
  </a>

</div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div>
      <a 
  href="https://www.google.com/maps/search/?api=1&query=Himayunpur+Mainpuri+Uttar+Pradesh+205262"

  rel="noopener noreferrer"
  className="text-blue-500 hover:scale-110"
>
  📍 Location
</a>
        </div>

      </div>
    </section>
  );
};

export default Contact;