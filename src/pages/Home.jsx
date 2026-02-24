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

<section className="py-20 bg-slate-900 text-gray-100 relative overflow-hidden group">
  {/* CSS Animation Styles */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .group:hover .animate-marquee {
      animation-play-state: paused;
    }
  `}} />

  {/* Subtle Background Glows */}
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="relative flex overflow-hidden">
    {/* We duplicate the array [...items, ...items] to create the infinite loop effect */}
    <div className="animate-marquee px-4">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {[
            {
              icon: 'clipboard.png',
              title: 'QUALITY CONTROL',
              desc: 'Our qualified specialists provide a full range of testing to ensure the highest quality.'
            },
            {
              icon: 'po.png',
              title: 'YOUR ORDERS',
              desc: "We'll do our best to process your order as fast as possible to get the material on time."
            },
            {
              icon: 'shield.png',
              title: 'LIFETIME WARRANTY',
              desc: 'We stand behind the legendary quality and craftsmanship of all our products.'
            },
            {
              icon: 'globe.png',
              title: 'DELIVERY',
              desc: 'Logistics and infrastructure capability for global coverage of product delivery.'
            },
            {
              icon: 'clock.png',
              title: 'FASTEST LEAD TIME',
              desc: 'We offer same or next day lead time delivery—the fastest in the industry.'
            },
            {
              icon: 'Images/Improving Metal Reliability for High-Performance Manufacturing.jpg',
              title: 'STURDY PACKAGING',
              desc: 'We use heavy duty wooden crates to package sheets for over the road shipments.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-[280px] mx-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/[0.08] transition-all duration-500 group/card shadow-2xl"
            >
              {/* Animated Icon Container */}
              <div className="w-16 h-16 mb-6 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 relative">
                 <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-md opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                 <img src={item.icon} alt={item.title} className="w-8 h-8 relative z-10 brightness-0 invert opacity-80 group-hover/card:opacity-100" />
              </div>

              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-3">
                {item.title}
              </h3>
              
              {/* Animated Accent Line */}
              <div className="w-6 h-[2px] bg-teal-500 mb-4 group-hover/card:w-12 transition-all duration-500"></div>

              <p className="text-[11px] leading-relaxed text-gray-400 whitespace-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>

    {/* Gradient Fades for the edges to make it look high-end */}
    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
  </div>
</section>

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


