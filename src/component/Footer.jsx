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
            <p>📍 Bhopal, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ sakshiclinic@gmail.com</p>
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
            <a href="#" className="hover:scale-110">📘</a>
            <a href="#" className="hover:scale-110">📸</a>
            <a href="#" className="hover:scale-110">🐦</a>
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