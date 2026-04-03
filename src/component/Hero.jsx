import HeroImage from "../Image/Hero"

const Hero = () => {
  return (
    <section  id="home" className="bg-gray-100 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow text-sm mb-4">
            आपके लिए बेहतरीन  केयर
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            आपका <span className="text-blue-600">सबसे अच्छा डेंटल</span><br />
            अनुभव यहाँ शुरू होता है
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 mt-4">
            हम आपको बेहतर इलाज और आधुनिक सुविधाओं के साथ सुरक्षित और प्रभावी डेंटल सेवाएं प्रदान करते हैं।
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              हमारी सेवाएं देखें
            </button>

            <a
              href="tel:8989011754"
              className="text-black px-5 py-3 rounded-full shadow-lg hover:bg-blue-100 flex items-center gap-2"
            >
              📞 अभी कॉल करें
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-50 h-50 bg-blue-600 rounded-full right-10 top-10"></div>

          <img
            src={HeroImage}
            alt="doctor"
            className="relative w-80 h-80 rounded-50 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;