const Services = () => {
  const services = [
    
    {
      title: "कैंसर सलाह",
      desc: "हम विशेषज्ञ डॉक्टरों द्वारा कैंसर से संबंधित सही मार्गदर्शन और सलाह प्रदान करते हैं ।",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      icon: "🧬",
    },

    // 🔥 NEW ADDED
    {
      title: "बेहतर क्लिनिक देखभाल",
      desc: "हम अपने मरीजों को साफ-सुथरा वातावरण और उच्च गुणवत्ता वाली चिकित्सा सेवाएं प्रदान करते हैं।",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      icon: "🏥",
    },
    {
      title: "मेडिकल सहायता",
      desc: "आपातकालीन स्थिति में तुरंत दवा और सहायता उपलब्ध कराई जाती है, जिससे मरीज को तुरंत राहत मिले।",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
      icon: "🚑",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

            {/* Image */}
            <img src={item.img} alt="" className="w-full h-48 object-cover" />

            {/* Content */}
            <div className="p-5">
              <div className="text-3xl mb-2">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;