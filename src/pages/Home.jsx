import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import IndustriesSection from "../components/IndustriesSection";
import KeyProducts from "../components/KeyProducts";
import { motion } from "framer-motion";
import Leadership from "../components/Leadership";
import ClientsSection from "../components/clientsSection";
import Testimonial from "../components/Testimonial";
import NewsUpdate from "../components/newsUpdate";

export default function Home() {
  // const industries = [
  //   { name: 'Manufacturing', icon: '🏭' },
  //   { name: 'Mining', icon: '⛏️' },
  //   { name: 'Steel', icon: '⚙️' },
  //   { name: 'Power', icon: '⚡' },
  //   { name: 'Infrastructure', icon: '🏗️' },
  //   { name: 'Cement', icon: '🏢' },
  // ];

  return (
    // <div className="min-h-screen">
    <div>

      {  /* Image Slider Section */}
      <section >
        <div >
          {/* <h2 className="heading-secondary text-center mb-8">Our Projects</h2> */}
          <ImageSlider />
        </div>
      </section>

      { /*       Latest News Section   */}
      
      <section className="section-padding">
        <div className="container-custom">
          <NewsUpdate />
        </div>
      </section>

      {/* About Section */}


 <section className="py-20 bg-teal-500 text-gray-800 relative overflow-hidden transition-colors duration-300">
  {/* Subtle overlay if needed */}
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/noise.png')] pointer-events-none"></div>

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {[
        {
          icon: 'clipboard.png', // Replace with actual icon path or component
          title: 'QUALITY CONTROL',
          desc: 'Our qualified specialists, who help us to create statistics of a group leader, provide us a full range of testing the quality.'
        },
        {
          icon: 'po.png',
          title: 'YOUR ORDERS',
          desc: 'We\'ll do our best to process your order as fast as possible to get the material in your hands on time.'
        },
        {
          icon: 'shield.png',
          title: 'LIFETIME WARRANTY',
          desc: 'We stand behind the legendary quality and craftsmanship of all our products.'
        },
        {
          icon: 'globe.png',
          title: 'DELIVERY',
          desc: 'We have a logistics and infrastructure capability for global coverage of product delivery be it pan India or Exports.'
        },
        {
          icon: 'clock.png',
          title: 'FASTEST LEAD TIME',
          desc: 'We offer same or next day lead time delivery which is the fastest lead time all over the industry.'
        },
        {
          icon: 'box.png',
          title: 'STURDY PACKAGING',
          desc: 'We use heavy duty wooden crates to package sheets for \'over the road\' shipments.'
        }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src={item.icon} alt={item.title} className="w-8 h-8" /> {/* Or use icon component */}
          </div>
          <h3 className="text-sm font-bold uppercase">
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed max-w-xs">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      
      {/* Industries Section */}



<section>
   <div>
      {/* Other sections */}
      <KeyProducts />
    </div>
</section>

{/* <section>
   <div>
      <Leadership />
    </div>
</section> */}


<section>
  <div>
        <Testimonial />
  </div>
</section>

 <section>
    <div>
      <ClientsSection />
    </div>
</section> 

      
    </div>
  );
}


