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
      
      <section className="section-padding">
        <div className="container-custom">
          <NewsUpdate />
        </div>
      </section>

      {/* About Section */}
     <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-slate-900 dark:via-slate-400 dark:to-white-900 relative overflow-hidden transition-colors duration-300">

  {/* Subtle metallic noise overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/noise.png')] pointer-events-none"></div>

  <div className="container-custom relative">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="p-10 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
          Engineering Tomorrow's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Solutions</span>
        </h2>

        {/* <p className="p-10 text-gray-900 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
          Matrix Metals is a visionary industrial strategist whose career is defined by his ability to architect complex, technology-centric ecosystems within the aluminium manufacturing domain. His leadership style blends analytical rigor, cross-border technical intelligence, and precision-driven execution—positioning Matrix Metals as a formidable, innovation-forward enterprise in the global metals landscape.
Operating at the confluence of advanced manufacturing, automation engineering, materials science, and enterprise-scale operations, Jeeteen has cultivated a reputation for transforming conventional metal-processing workflows into digitally synchronized, high-throughput, quality-governed industrial infrastructures.
        </p> */}

          <p className="p-10 text-gray-900 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
  Matrix Metals, led by visionary industrial strategist Jeeteen, has redefined excellence in aluminium manufacturing through bold, technology-driven transformation.
  
  With a rare blend of analytical precision, global technical intelligence, and relentless execution, Jeeteen has positioned Matrix Metals as a pioneering force in the international metals industry building intelligent, future-ready ecosystems where advanced manufacturing, automation, materials science, and large-scale operations converge seamlessly.
  
  Under his leadership, traditional metal-processing plants evolve into digitally integrated, high-efficiency powerhouses delivering superior throughput, uncompromising quality, and sustainable innovation at scale.
</p>

        {/* <div className="w-40 p-10 h-0 rounded-full bg-gradient-to-r from-blue-500 to-gray-700"></div> */}
      </div>

      {/* RIGHT SIDE - Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { number: "50+", label: "Years of Engineering" },
          { number: "1000+", label: "Industrial Projects" },
          { number: "20+", label: "Countries Served" },
          { number: "500+", label: "Skilled Experts" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-gray-300 dark:border-slate-700
                       shadow-[0_8px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.4)]
                       transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">{item.number}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium text-sm tracking-wide uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>

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

<section>
   <div>
      <Leadership />
    </div>
</section>


<section>
  <div>
        <Testimonial />
  </div>
</section>

{/* <section>
    <div>
      <ClientsSection />
    </div>
</section> */}

      
    </div>
  );
}


