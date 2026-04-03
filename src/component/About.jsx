import React from "react";
import AboutImage from "../Image/About.jpeg";

const Doctor = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
           src={AboutImage}
            alt="doctor"
            className="rounded-xl w-full h-100 "
          />

          {/* Small Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg p-4 text-sm">
            <p>👨‍⚕️ 3+ साल का अनुभव</p>
            <p>🧬 16+ कैंसर सलाह</p>
            <p>🏥 विशेषज्ञ क्लिनिक सेवा</p>
            <p className="bg-blue-600 text-white mt-2 px-2 py-1 rounded">
              जनरल सर्जन
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-gray-500 mb-2">— हमारे डॉक्टर</p>

          <h2 className="text-3xl font-bold text-gray-800">
            डॉ. अनुज प्रताप सिंह
          </h2>

          <h4 className="text-blue-600 font-semibold mt-2">
            अनुभवी सर्जन एवं कैंसर सलाहकार
          </h4>

          <p className="text-gray-600 mt-4">
            हमारे क्लिनिक में डॉ. अनुज प्रताप सिंह द्वारा आधुनिक तकनीक के साथ 
            बेहतर इलाज और सही मार्गदर्शन प्रदान किया जाता है।
          </p>

          {/* CHECKBOX POINTS */}
          <div className="mt-4 space-y-2 text-gray-700">
            <p>✅ 3+ वर्षों का अनुभव</p>
            <p>✅ 16+ कैंसर सलाहकार केस</p>
            <p>✅ सभी प्रकार की जांच और उपचार</p>
            <p>✅ मेडिकल स्टोर सुविधा उपलब्ध</p>
            <p>✅ मरीजों के लिए बेहतर देखभाल</p>
          </div>

          {/* Signature */}
          <p className="mt-4 italic text-xl">
            Anuj Pratap Singh
          </p>

          {/* Button */}
          <a href="">
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            और जानें
          </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Doctor;