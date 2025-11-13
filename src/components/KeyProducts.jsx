

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const KeyProducts = () => {
  const products = [
    {
      title: "HR (Hot Rolled) Black",
      description: "It is available in coil form, sheet form, and plates.",
      image: "/public/images/prague.jpg",
    },
    {
      title: "CR (Cold Rolled) Steel",
      description:
        "Used in applications requiring superior surface finish and tight thickness tolerances.",
      image: "/public/images/firenze-9292729_1280.jpg",
    },
    {
      title: "Galvanized Steel",
      description:
        "Provides superior corrosion resistance for construction and automotive applications.",
      image: "/public/images/architecture-2182003_1920.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* LEFT SIDE */}
        <div className="transition-all duration-700 ease-in-out">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Key Products
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Matrix plants are equipped with state-of-the-art lines to process
            flat rolled steel products to cater to the needs of Automotive,
            Home appliances, Electrical Steel, General Engineering, and other
            sectors.
          </p>

          {/* Product Info */}
          <div
            key={currentProduct.title}
            className="transition-all duration-700 ease-in-out opacity-100"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {currentProduct.title}
            </h3>
            <p className="text-gray-600">{currentProduct.description}</p>
          </div>
        </div>

        {/* RIGHT SIDE — Circular Image */}
        <div className="flex justify-center md:justify-end transition-transform duration-700 ease-in-out">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-96 h-96 object-cover rounded-full shadow-xl transform translate-x-6"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={handlePrev}
          className="bg-blue-300 hover:bg-orange-600 text-white p-3 rounded-md transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-300 hover:bg-orange-600 text-white p-3 rounded-md transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default KeyProducts;
