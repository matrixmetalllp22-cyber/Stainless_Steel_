// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const testimonials = [
//   {
//      text: `Matrix Metals represents a rare blend of engineering intelligence, operational discipline, and real-world manufacturing experience. Their mastery in coil processing technology and precision line integration elevated our plant’s performance to standards we did not think were possible. A partner with true technical depth.`,
//      author: "Director",
//      role: "Stainless Steel Processing Division"
//    },
//    {
//      text: `What makes Matrix Metals exceptional is their unwavering reliability. Every commitment—technical, commercial, or operational—was executed with absolute clarity and precision. Their team understands the urgency of industrial production, and they consistently deliver above expectation.`,
//      author: "Head of Operations",
//      role: "Metal Solutions Group"
//    },
//    {
//      text: `Matrix Metals brought a level of process understanding that transformed our efficiency. Their insights into slitting, CTL systems, polishing lines, and automation allowed us to streamline multiple stages of manufacturing. Their knowledge mirrors that of top-tier international engineering houses.`,
//      author: "Plant Manager",
//      role: "Industrial Metals Corporation"
//    },
//    {
//      text: `Whenever we encountered technical roadblocks, Matrix Metals was the only partner capable of delivering fast, intelligent, and actionable solutions. Their approach is analytical, structured, and deeply grounded in industrial science. They operate with the mindset of global engineering consultants.`,
//      author: "General Manager",
//      role: "Precision Facility"
//    },
//    {
//      text: `Matrix Metals executed our project with remarkable professionalism — from line specification to vendor coordination to commissioning. Their documentation, quality protocols, and technical detailing exceeded international benchmarks. They are redefining project execution standards in India.`,
//      author: "Vice President – Projects",
//      role: "Alloy & Coil Division"
//    },
//    {
//      text: `Working with Matrix Metals gives us a sense of long-term stability. Their transparency, accuracy in communication, and commitment to safeguarding client interests make them more than a supplier — they are a strategic partner driving our growth curve.`,
//      author: "CEO",
//      role: "Metal Infrastructure Group"
//    },
//    {
//      text: `Matrix Metals has a strong command over automation, industrial controls, and process safety. Their ability to modernize existing lines and embed Industry 4.0 features helped us achieve traceability, energy optimization, and consistent product quality across batches.`,
//      author: "Technical Director",
//      role: "Advanced Manufacturing Unit"
//    },
//    {
//      text: `Matrix Metals is one of the few companies in the Indian market with global-standard engineering documentation. Their specifications, RFQs, and process manuals are comprehensive, precise, and highly professional — a reflection of their deep industry credibility.`,
//      author: "Senior Consultant",
//      role: "International Engineering Firm"
//    },
//    {
//      text: `Matrix Metals delivers engineering competence at a genuinely global level. Their ability to decode complex technical environments and provide solutions that are both innovative and production-ready is truly impressive.`,
//      author: "Global Sourcing Head",
//      role: "Multinational Steel Processor"
//    },
//    {
//      text: `Every interaction with Matrix Metals reflects meticulous accuracy — from dimensional tolerances to process parameters, nothing is left to assumption. Their precision-driven culture has significantly improved our line performance.`,
//      author: "Quality Assurance Director",
//      role: "Coil Processing Unit"
//    },
//    {
//      text: `Matrix Metals operates with a standard of excellence that is rare in the industry. Their professionalism, responsiveness, and attention to detail consistently exceeded our internal benchmarks.`,
//      author: "Senior Executive",
//      role: "Industrial Engineering Services"
//    },
//    {
//      text: `The technical leadership at Matrix Metals is outstanding. They understand machinery at a depth that allows them to foresee challenges long before they occur. Their guidance saved us both time and significant cost.`,
//      author: "Project Leader",
//      role: "Metals Automation Division"
//    },
//    {
//      text: `Matrix Metals earned our trust from day one. Their advice is unbiased, technically sound, and always aligned with long-term value — not short-term gains. A true engineering partner in every sense.`,
//      author: "COO",
//      role: "Heavy Industries Group"
//    },
//    {
//      text: `From concept to commissioning, Matrix Metals executed our turnkey solution with unmatched clarity. Their structured approach, strong vendor network, and deep technical capability resulted in a world-class installation.`,
//      author: "Head of Projects",
//      role: "Sheet Metal Technology Firm"
//    },
//    {
//      text: `Matrix Metals produces the most detailed and accurate technical documentation we have ever received from an Indian engineering company. Their RFQs, line layouts, and process manuals are global-quality deliverables.`,
//      author: "Engineering Consultant",
//      role: "International Procurement Firm"
//    },
//    {
//      text: `Our plant’s efficiency, yield, and process reliability improved significantly after implementing Matrix Metals' recommendations. Their technical diagnostics are incredibly sharp and backed by data-driven reasoning.`,
//      author: "Operations Manager",
//      role: "Stainless Steel Mill"
//    },
//    {
//      text: `Matrix Metals is one of the few teams that genuinely listens to customer pain points and crafts solutions that work in real industrial environments. Their support system is proactive, fast, and highly competent.`,
//      author: "Plant Director",
//      role: "Precision Fabrication Industry"
//    },
//    {
//      text: `Matrix Metals’ knowledge of coil-to-coil systems, polishing lines, slitting, CTL, and automation rivals international manufacturers. Their expertise is not theoretical—it is field-tested and reliable.`,
//      author: "Technical Head",
//      role: "Modern Metal Processing Facility"
//    }
//   ];
// export default function TestimonialSlider() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
//   const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   useEffect(() => {
//     const timer = setInterval(next, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden px-4 sm:px-6 lg:px-10 py-10">

//       {/* Arrows */}
//       <button
//         onClick={prev}
//         className="absolute left-3 sm:left-6 text-gray-400 hover:text-black text-3xl sm:text-4xl transition-all z-20"
//       >
//         <FiChevronLeft />
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-3 sm:right-6 text-gray-400 hover:text-black text-3xl sm:text-4xl transition-all z-20"
//       >
//         <FiChevronRight />
//       </button>

//       {/* Content Wrapper */}
//       <div className="max-w-4xl md:max-w-5xl text-center px-2 sm:px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.92 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="space-y-5 sm:space-y-6"
//           >
//             <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-relaxed md:leading-snug px-1">
//               “{testimonials[index].text}”
//             </p>

//             <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
//               — {testimonials[index].author}
//             </h4>

//             <h4 className="text-sm sm:text-lg md:text-xl font-medium text-gray-700">
//               {testimonials[index].role}
//             </h4>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: `Matrix Metals represents a rare blend of engineering intelligence, operational discipline, and real-world manufacturing experience. Their mastery in coil processing technology and precision line integration elevated our plant's performance to standards we did not think were possible. A partner with true technical depth.`,
    author: "Director",
    role: "Stainless Steel Processing Division",
    company: "Industrial Metals Corporation"
  },
  {
    text: `What makes Matrix Metals exceptional is their unwavering reliability. Every commitment—technical, commercial, or operational—was executed with absolute clarity and precision. Their team understands the urgency of industrial production, and they consistently deliver above expectation.`,
    author: "Head of Operations",
    role: "Metal Solutions Group",
    company: "Global Steel Solutions"
  },
  {
    text: `Matrix Metals brought a level of process understanding that transformed our efficiency. Their insights into slitting, CTL systems, polishing lines, and automation allowed us to streamline multiple stages of manufacturing. Their knowledge mirrors that of top-tier international engineering houses.`,
    author: "Plant Manager",
    role: "Industrial Metals Corporation",
    company: "Precision Manufacturing Group"
  },
  {
    text: `Whenever we encountered technical roadblocks, Matrix Metals was the only partner capable of delivering fast, intelligent, and actionable solutions. Their approach is analytical, structured, and deeply grounded in industrial science. They operate with the mindset of global engineering consultants.`,
    author: "General Manager",
    role: "Precision Facility",
    company: "Advanced Engineering Works"
  },
  {
    text: `Matrix Metals executed our project with remarkable professionalism — from line specification to vendor coordination to commissioning. Their documentation, quality protocols, and technical detailing exceeded international benchmarks. They are redefining project execution standards in India.`,
    author: "Vice President – Projects",
    role: "Alloy & Coil Division",
    company: "National Steel Corporation"
  },
  {
    text: `Working with Matrix Metals gives us a sense of long-term stability. Their transparency, accuracy in communication, and commitment to safeguarding client interests make them more than a supplier — they are a strategic partner driving our growth curve.`,
    author: "CEO",
    role: "Metal Infrastructure Group",
    company: "InfraMetals Group"
  },
  {
    text: `Matrix Metals has a strong command over automation, industrial controls, and process safety. Their ability to modernize existing lines and embed Industry 4.0 features helped us achieve traceability, energy optimization, and consistent product quality across batches.`,
    author: "Technical Director",
    role: "Advanced Manufacturing Unit",
    company: "Smart Manufacturing Solutions"
  },
  {
    text: `Matrix Metals is one of the few companies in the Indian market with global-standard engineering documentation. Their specifications, RFQs, and process manuals are comprehensive, precise, and highly professional — a reflection of their deep industry credibility.`,
    author: "Senior Consultant",
    role: "International Engineering Firm",
    company: "Global Engineering Partners"
  },
  {
    text: `Matrix Metals delivers engineering competence at a genuinely global level. Their ability to decode complex technical environments and provide solutions that are both innovative and production-ready is truly impressive.`,
    author: "Global Sourcing Head",
    role: "Multinational Steel Processor",
    company: "International Steel Consortium"
  },
  {
    text: `Every interaction with Matrix Metals reflects meticulous accuracy — from dimensional tolerances to process parameters, nothing is left to assumption. Their precision-driven culture has significantly improved our line performance.`,
    author: "Quality Assurance Director",
    role: "Coil Processing Unit",
    company: "Quality First Metals"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToSlide = useCallback((slideIndex) => {
    if (isAnimating || slideIndex === index) return;
    setIsAnimating(true);
    setIndex(slideIndex);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 600);
  }, [index, isAnimating]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + (100 / 60); // 6 seconds total
      });
    }, 100);

    return () => clearInterval(interval);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section 
      className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-50/50 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-20">
        <div 
          className="h-full bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter Display */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
          <span className="text-black font-bold text-lg">{index + 1}</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{testimonials.length}</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 sm:px-6 lg:px-12 z-30 pointer-events-none">
        <button
          onClick={prev}
          disabled={isAnimating}
          className="p-3 sm:p-4 rounded-full bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl text-gray-600 hover:text-black text-2xl sm:text-3xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft />
        </button>
        
        <button
          onClick={next}
          disabled={isAnimating}
          className="p-3 sm:p-4 rounded-full bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl text-gray-600 hover:text-black text-2xl sm:text-3xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next testimonial"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
            Discover why industry leaders trust Matrix Metals for their most critical projects
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Author Info Section */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 border-2 border-white/20">
                        {testimonials[index].author.charAt(0)}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {testimonials[index].author}
                      </h3>
                      <p className="text-gray-300 text-lg mb-1">
                        {testimonials[index].role}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[index].company}
                      </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="mt-6">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="w-6 h-6 text-yellow-400 fill-current" 
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-300">Verified Review</p>
                    </div>
                  </div>

                  {/* Testimonial Text Section */}
                  <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-center">
                    <div className="relative">
                      {/* Large Quote Icon */}
                      <div className="absolute -top-6 -left-2 text-8xl text-gray-100 font-serif">
                        "
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-relaxed italic relative z-10 pt-8">
                        {testimonials[index].text}
                      </p>

                      {/* Decorative Line */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500 text-sm">
                            <span className="font-medium">Industry:</span> Metal Processing & Engineering
                          </p>
                          <div className="hidden sm:flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-400 text-sm">Auto-rotating</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              disabled={isAnimating}
              className={`relative focus:outline-none transition-all duration-300 ${
                i === index ? 'transform scale-125' : ''
              }`}
              aria-label={`View testimonial ${i + 1} from ${testimonials[i].author}`}
              aria-current={i === index ? "true" : "false"}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index 
                    ? "bg-gradient-to-r from-gray-900 to-gray-700" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
              {i === index && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                  {testimonials[i].author.split(' ')[0]}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="block sm:hidden text-center mt-6">
          <p className="text-gray-400 text-sm">
            ← Swipe left/right to navigate →
          </p>
        </div>

        {/* Desktop Navigation Hint */}
        <div className="hidden sm:block text-center mt-6">
          <p className="text-gray-400 text-sm">
            Use arrow keys or click arrows to navigate
          </p>
        </div>
      </div>

      {/* Accessibility Announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial {index + 1} of {testimonials.length}
      </div>
    </section>
  );
}