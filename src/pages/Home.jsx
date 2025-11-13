import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import IndustriesSection from "../components/IndustriesSection";
import KeyProducts from "../components/KeyProducts";
import LeadershipAndClients from "../components/LeadershipAndClients";

export default function Home() {
  const industries = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Mining', icon: '⛏️' },
    { name: 'Steel', icon: '⚙️' },
    { name: 'Power', icon: '⚡' },
    { name: 'Infrastructure', icon: '🏗️' },
    { name: 'Cement', icon: '🏢' },
  ];

  return (
    <div className="min-h-screen">

      {  /* Image Slider Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* <h2 className="heading-secondary text-center mb-8">Our Projects</h2> */}
          <ImageSlider />
        </div>
      </section>

      { /*       Latest News Section   */}
      
      
       <div className="bg-gray-100 p-8 rounded-2xl shadow-md max-w mx-auto mt-10 h-[300px] flex flex-col justify-center text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        News Updates 
      </h2>

      <p className="text-gray-600 max-w-md mx-auto mb-6">
        Stay informed with the latest news and updates from Matrix Metals. Discover our recent projects, industry insights, and company announcements.
      </p>

      {/* Button aligned right */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-300 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
          Read More
        </button>
      </div>
    </div>
      {/* <section>
         <div className="bg-gray-100 p-8 rounded-2xl shadow-md max-w mx-auto mt-10 h-[300px] ">
      <h1 className="text-4xl font-semibold mb-4 text-gray-800">
        Latest Updates 
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        We are passionate about building innovative digital experiences that help
        businesses grow. Explore our services, projects, and values to learn more
        about what we do.
      </p>
      <p> 
        
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
        Learn More
      </button>
      </p>
    </div>
         </section> */}
      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrial-hero.jpg')" }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrial-hero.jpg')" }}
        />
        <div className="container-custom relative z-20 text-white">
          <h1 className="heading-primary mb-6">
            Leading Industrial Solutions Provider
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Delivering excellence through innovation and sustainable practices
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md transition-colors"
            >
              Our Solutions
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-orange-600 text-black px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6 p-15">
                Engineering Tomorrow's Solutions
              </h2>
              <p className="text-content mb-6 p-15">
                With decades of experience in industrial solutions, we deliver innovative
                technologies and services that drive efficiency and sustainability across
                multiple sectors.
              </p>
              {/* <Link
                to="/about"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link> */}
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  {[
    { number: "50+", label: "Years Experience", icon: "⏳" },
    { number: "1000+", label: "Projects Completed", icon: "🚀" },
    { number: "20+", label: "Countries Served", icon: "🌍" },
    { number: "500+", label: "Expert Team", icon: "👨‍💻" },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="text-4xl mb-3">{item.icon}</div>
      <h3 className="font-extrabold text-3xl text-blue-300 mb-2">{item.number}</h3>
      <p className="text-gray-600 font-medium">{item.label}</p>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Industries Section */}


      <section className="section-padding py-10">
  <div>
      {/* Other sections */}
      <IndustriesSection />
    </div>
</section>

<section>
   <div>
      {/* Other sections */}
      <KeyProducts />
    </div>
</section>

<section>
   <div>
      <LeadershipAndClients />
    </div>
</section>

      
    </div>
  );
}


