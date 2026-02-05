import React from 'react';

const ProductAdvantages = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12 animate-fade-in">
          Our Product Advantages
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://www.shutterstock.com/shutterstock/photos/2491400853/display_1500/stock-vector-make-in-india-concept-vector-illustration-lion-made-with-blue-gears-industrial-development-2491400853.jpg" 
              alt="Make in India Lion Logo" 
              className="w-80 h-auto transform transition-transform duration-500 hover:scale-105 hover:rotate-3 animate-pulse-slow"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-in animation-delay-300">
              We pride ourselves on being pioneers of innovative stainless steel solutions that make our products far superior compared to our competitors.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start animate-fade-in animation-delay-500">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">Maintaining high level standards for quality stainless steel products.</span>
              </li>
              <li className="flex items-start animate-fade-in animation-delay-700">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">Unique and Classy designs to fulfill customer needs.</span>
              </li>
              <li className="flex items-start animate-fade-in animation-delay-900">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">Rich experience in exporting anywhere in the world.</span>
              </li>
              <li className="flex items-start animate-fade-in animation-delay-1100">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">Our products are 100% reusable and recyclable.</span>
              </li>
              <li className="flex items-start animate-fade-in animation-delay-1300">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">We stock the largest inventory in India for stainless steel products.</span>
              </li>
              <li className="flex items-start animate-fade-in animation-delay-1500">
                <span className="flex-shrink-0 w-3 h-3 mt-1.5 mr-3 rounded-full bg-red-500"></span>
                <span className="text-gray-700">Corrosion free, Dent free, Scratch free, sustainable and hygiene proof etc.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdvantages;