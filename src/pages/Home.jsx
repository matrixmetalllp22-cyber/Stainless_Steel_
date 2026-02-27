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
      animation: marquee 40s linear infinite;
    }
    .group:hover .animate-marquee {
      animation-play-state: paused;
    }
  `}} />

  {/* Subtle Background Glows */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="relative flex overflow-hidden">
    <div className="animate-marquee px-4">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {[
            {
              image: 'Images/QualityControl.jpg',
              title: 'QUALITY CONTROL',
              desc: 'Full-range testing ensuring the highest standards.'
            },
            {
              image: 'Images/Orders.jpg',
              title: 'EFFICIENT PROCESSING',
              desc: "Fast-track order fulfillment for critical materials."
            },
            {
              image: 'Images/Warranty.jpg',
              title: 'LIFETIME WARRANTY',
              desc: 'Legendary quality backed by our craft guarantee.'
            },
            {
              image: 'Images/Delivery.jpg',
              title: 'GLOBAL DELIVERY',
              desc: 'Seamless logistics infrastructure for worldwide reach.'
            },
            {
              image: 'Images/LeadTime.jpg',
              title: 'FASTEST LEAD TIME',
              desc: 'Industry-leading same or next day delivery.'
            },
            {
              image: 'Images/Improving Metal Reliability for High-Performance Manufacturing.jpg',
              title: 'STURDY PACKAGING',
              desc: 'Heavy-duty wooden crates for maximum protection.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col w-[350px] mx-4 overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-500 group/card shadow-2xl"
            >
              {/* Photo Container */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[50%] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Caption Content */}
              <div className="p-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-teal-400 mb-2">
                  {item.title}
                </h3>
                
                <div className="w-8 h-[2px] bg-teal-500/50 mb-3 group-hover/card:w-16 group-hover/card:bg-teal-500 transition-all duration-500"></div>

                <p className="text-sm leading-relaxed text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>

    {/* Edge Gradient Fades */}
    <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
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


