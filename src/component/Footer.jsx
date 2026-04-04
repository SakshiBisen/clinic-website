const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT - Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Sakshi Health Clinic
          </h2>
          <p className="text-gray-400">
            हम आपके स्वास्थ्य का पूरा ध्यान रखते हैं। हमारे क्लिनिक में बेहतर इलाज और सेवाएं उपलब्ध हैं।
          </p>

          <div className="mt-4 space-y-1 text-gray-400">
            <p>📍Himayunpur,mainpuri Uttar pradesh 205262</p>
            <p>📞  +919033545074</p>
            <p>✉️ at5857298@gmail.com</p>
          </div>
        </div>

        {/* MIDDLE - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT - Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Follow Us
          </h3>

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


          <p className="text-gray-400 mt-4">
            Stay connected with us on social media.
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 Sakshi Health Clinic. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;