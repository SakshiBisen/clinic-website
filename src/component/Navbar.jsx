import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // ✅ menu with links
  const menu = [
    { name: "About", link: "#about" },
    { name: "Service", link: "#services" },
    { name: "Booking", link: "#booking" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="w-full bg-gray-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 text-2xl">🩺</span>
          <h1 className="text-xl font-semibold text-blue-700">
            साक्षी हेल्थकेयर क्लिनिक
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link} // ✅ yahi fix hai
              onClick={() => setActive(item.name)}
              className={`relative hover:text-blue-600 transition ${
                active === item.name ? "text-blue-600" : ""
              }`}
            >
              {item.name}
              {active === item.name && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link} // ✅ fix
              onClick={() => {
                setActive(item.name);
                setOpen(false);
              }}
              className={`block hover:text-blue-600 ${
                active === item.name ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;