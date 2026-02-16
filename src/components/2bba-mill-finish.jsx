// import React from 'react';
// import { CheckCircle, Download, Package, Ruler, Layers, Factory } from 'lucide-react';

// const StainlessSteelSheets = () => {
//   const materialGrades = ['202', '304', '304L', '316', '316L', '321', '430', '441'];
  
//   const applications = [
//     { icon: '🍺', name: 'Breweries and Distilleries' },
//     { icon: '🥛', name: 'Milk Cans and Boilers' },
//     { icon: '💊', name: 'Pharmaceutical Machinery' },
//     { icon: '⌚', name: 'Horology' },
//     { icon: '⚡', name: 'Electrical and Electronic Components' },
//     { icon: '🪑', name: 'Street Furniture' },
//     { icon: '🔪', name: 'Kitchen Equipment' },
//     { icon: '🚢', name: 'Marine Industry' },
//     { icon: '✈️', name: 'Automotive & Aviation Industries' },
//     { icon: '❄️', name: 'Refrigeration' }
//   ];

//   const dimensions = [
//     { size: '1260 mm x 2500 mm' },
//     { size: '1500 mm x 3000 mm' },
//     { size: 'Special dimensions on demand', special: true }
//   ];

//   const finishes = ['2B', 'BA', 'Other mill finishes available on request'];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//             Stainless Steel Sheets
//           </h1>
//           <p className="text-gray-600 text-lg">Premium quality stainless steel sheets for industrial applications</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Specifications */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Material Grades Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2 bg-blue-100 rounded-lg">
//                   <Layers className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Material Grades</h2>
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//                 {materialGrades.map((grade) => (
//                   <div key={grade} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
//                     <span className="font-semibold text-gray-900 text-lg">{grade}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//                 <p className="text-blue-800 flex items-center gap-2">
//                   <CheckCircle className="h-5 w-5" />
//                   <span className="font-medium">Other grades available on request</span>
//                 </p>
//               </div>
//             </div>

//             {/* Dimensions & Availability Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
//                   <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2 bg-green-100 rounded-lg">
//                   <Ruler className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">Dimensions & Availability</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-4 text-lg">Standard Dimensions</h3>
//                   <div className="space-y-3">
//                     {dimensions.map((dim, index) => (
//                       <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                         <div className="h-8 w-8 bg-white border border-gray-300 rounded-md flex items-center justify-center">
//                           <span className="font-medium text-gray-700">{index + 1}</span>
//                         </div>
//                         <span className={`font-medium ${dim.special ? 'text-amber-600' : 'text-gray-900'}`}>
//                           {dim.size}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-4 text-lg">Availability</h3>
//                   <div className="space-y-4">
//                     <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                       <div className="flex items-center gap-3">
//                         <Package className="h-6 w-6 text-green-600" />
//                         <div>
//                           <p className="font-semibold text-green-800">In Stock</p>
//                           <p className="text-green-700 text-sm">Ready for immediate dispatch</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//                       <div className="flex items-center gap-3">
//                         <Factory className="h-6 w-6 text-blue-600" />
//                         <div>
//                           <p className="font-semibold text-blue-800">To Produce</p>
//                           <p className="text-blue-700 text-sm">Custom manufacturing available</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Product Details & Applications */}
//           <div className="space-y-8">
//             {/* Product Details Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Details</h2>
//                 <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-2">Product Code</h3>
//                   <div className="bg-gray-900 text-white p-3 rounded-lg font-mono text-center">
//                     MX: 2B/BA Mill Finish
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-2">Finish</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {finishes.map((finish, index) => (
//                       <span key={index} className={`px-3 py-1.5 rounded-full text-sm font-medium ${index < 2 ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-gray-100 text-gray-800'}`}>
//                         {finish}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <h3 className="font-semibold text-gray-700 mb-2">Color</h3>
//                     <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
//                       <span className="font-medium text-gray-900">Mill Finish</span>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700 mb-2">Thickness</h3>
//                     <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
//                       <span className="font-medium text-gray-900">0.40 - 20.00 mm</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Datasheet Section */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <h3 className="font-semibold text-gray-700 mb-4">Datasheet</h3>
//                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                   <p className="text-gray-700 mb-4 text-sm">
//                     Datasheet MX: 2B/BA Mill Finish. We supply stainless steel sheets as per our catalogue. Any minor colour difference and in the brightness might be because of difference in raw material reflection.
//                   </p>
//                   <button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
//                     <Download className="h-5 w-5" />
//                     Download Datasheet
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Applications Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">Applications</h2>
//                 <div className="h-1 w-20 bg-green-600 rounded-full"></div>
//               </div>

//               <div className="space-y-3">
//                 {applications.map((app, index) => (
//                   <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                     <span className="text-2xl">{app.icon}</span>
//                     <span className="text-gray-800 font-medium">{app.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quality Note */}
//         <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
//           <div className="flex items-center gap-4">
//             <CheckCircle className="h-8 w-8 text-blue-600 flex-shrink-0" />
//             <div>
//               <h3 className="font-bold text-gray-900 text-lg mb-1">Quality Assurance</h3>
//               <p className="text-gray-700">
//                 All our stainless steel sheets undergo rigorous quality checks and are certified for industrial use. Custom specifications and special finishes available upon request.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StainlessSteelSheets;














import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Download, Package, Ruler, Layers, Factory, ChevronRight, Thermometer, Droplets, Shield, Clock, Calendar } from 'lucide-react';

const StainlessSteelSheets = () => {
  const [activeTab, setActiveTab] = useState("specifications");
  const [selectedGrade, setSelectedGrade] = useState("304");
  const [showCustomOptions, setShowCustomOptions] = useState(false);
  
  const materialGrades = [
    { code: '202', description: 'Economical grade with good corrosion resistance', color: 'from-amber-100 to-amber-50' },
    { code: '304', description: 'Most common austenitic grade, excellent corrosion resistance', color: 'from-blue-100 to-blue-50' },
    { code: '304L', description: 'Low carbon version of 304, ideal for welding', color: 'from-emerald-100 to-emerald-50' },
    { code: '316', description: 'Superior corrosion resistance with molybdenum', color: 'from-purple-100 to-purple-50' },
    { code: '316L', description: 'Low carbon version of 316 for welded applications', color: 'from-violet-100 to-violet-50' },
    { code: '321', description: 'Stabilized with titanium for high temperature', color: 'from-orange-100 to-orange-50' },
    { code: '430', description: 'Ferritic grade with good formability', color: 'from-gray-100 to-gray-50' },
    { code: '441', description: 'High temperature ferritic stainless steel', color: 'from-rose-100 to-rose-50' }
  ];
  
  const applications = [
    { icon: '🍺', name: 'Breweries and Distilleries', category: 'food' },
    { icon: '🥛', name: 'Milk Cans and Boilers', category: 'food' },
    { icon: '💊', name: 'Pharmaceutical Machinery', category: 'medical' },
    { icon: '⌚', name: 'Horology', category: 'precision' },
    { icon: '⚡', name: 'Electrical and Electronic Components', category: 'industrial' },
    { icon: '🪑', name: 'Street Furniture', category: 'architectural' },
    { icon: '🔪', name: 'Kitchen Equipment', category: 'food' },
    { icon: '🚢', name: 'Marine Industry', category: 'industrial' },
    { icon: '✈️', name: 'Automotive & Aviation Industries', category: 'transport' },
    { icon: '❄️', name: 'Refrigeration', category: 'industrial' }
  ];

  const dimensions = [
    { size: '1260 × 2500 mm', standard: true, availability: 'In Stock' },
    { size: '1500 × 3000 mm', standard: true, availability: 'In Stock' },
    { size: 'Custom Dimensions', standard: false, availability: 'On Demand' }
  ];

  const finishes = [
    { name: '2B Finish', description: 'Standard bright cold rolled finish', color: 'bg-slate-100' },
    { name: 'BA Finish', description: 'Bright annealed mirror-like finish', color: 'bg-blue-50' },
    { name: 'Custom Finishes', description: 'Available on special request', color: 'bg-emerald-50' }
  ];

  const thicknessOptions = [
    { range: '0.40 - 3.00 mm', common: true, applications: 'Light industrial, decorative' },
    { range: '3.00 - 8.00 mm', common: true, applications: 'Structural, heavy equipment' },
    { range: '8.00 - 20.00 mm', common: false, applications: 'Specialized industrial' }
  ];

  const tabs = [
    { id: "specifications", label: "Specifications", icon: Layers },
    { id: "applications", label: "Applications", icon: Package },
    { id: "technical", label: "Technical Data", icon: Factory }
  ];

  const selectedGradeData = materialGrades.find(grade => grade.code === selectedGrade);

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-linear-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-xl" />
            <h1 className="relative text-5xl md:text-6xl font-light text-slate-800 mb-3 tracking-tight">
              Stainless Steel Sheets
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Premium quality stainless steel sheets engineered for industrial excellence and architectural precision.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-linear-to-r from-slate-700 to-slate-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Specifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Material Grades Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">Material Grades</h2>
                    <p className="text-gray-500 text-sm">Select grade for detailed information</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {materialGrades.map((grade) => (
                    <motion.div
                      key={grade.code}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedGrade(grade.code)}
                      className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                        selectedGrade === grade.code
                          ? "bg-linear-to-r from-slate-700 to-slate-600 text-white shadow-lg"
                          : `bg-linear-to-br ${grade.color} hover:shadow-md`
                      }`}
                    >
                      <div className="text-center">
                        <span className="text-2xl font-bold block mb-1">{grade.code}</span>
                        {selectedGrade === grade.code && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Selected Grade Information */}
                <AnimatePresence mode="wait">
                  {selectedGradeData && (
                    <motion.div
                      key={selectedGrade}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-linear-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">
                          Grade {selectedGradeData.code} Details
                        </h3>
                        <span className="text-sm text-gray-500 px-3 py-1 bg-white rounded-full border border-gray-200">
                          Selected
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{selectedGradeData.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700">High Temp Resistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700">Corrosion Resistant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700">Durable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700">Long Lifespan</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Dimensions & Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-linear-to-r from-emerald-500 to-teal-400 rounded-xl">
                    <Ruler className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">Dimensions & Availability</h2>
                    <p className="text-gray-500 text-sm">Standard sizes and custom options</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Dimensions */}
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-6 text-lg flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-emerald-500" />
                      Standard Dimensions
                    </h3>
                    <div className="space-y-4">
                      {dimensions.map((dim, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="p-4 rounded-xl border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-800">{dim.size}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${dim.standard ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                              {dim.availability}
                            </span>
                          </div>
                          {dim.standard ? (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Package className="h-3 w-3" />
                              <span>Ready for immediate dispatch</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Factory className="h-3 w-3" />
                              <span>Custom manufacturing available</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Thickness Options */}
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-6 text-lg flex items-center gap-2">
                      <Layers className="h-5 w-5 text-emerald-500" />
                      Thickness Range
                    </h3>
                    <div className="space-y-4">
                      {thicknessOptions.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="p-4 rounded-xl border border-gray-200 hover:border-emerald-200 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-800">{option.range}</span>
                            {option.common && (
                              <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                                Most Common
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{option.applications}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Custom Options Toggle */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowCustomOptions(!showCustomOptions)}
                        className="w-full py-3 bg-linear-to-r from-slate-50 to-gray-100 text-slate-700 rounded-xl hover:from-slate-100 hover:to-gray-200 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200"
                      >
                        <span>Custom Requirements</span>
                        <ChevronRight className={`h-4 w-4 transform transition-transform ${showCustomOptions ? 'rotate-90' : ''}`} />
                      </motion.button>
                      
                      <AnimatePresence>
                        {showCustomOptions && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200"
                          >
                            <p className="text-sm text-blue-800 mb-2">
                              Special dimensions, custom finishes, and unique requirements available upon request.
                            </p>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                              Contact for custom quotation →
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Details & Applications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Product Details Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-3">Product Details</h2>
                  <div className="h-1 w-12 bg-linear-to-r from-slate-600 to-slate-400 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {/* Product Code */}
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-3">Product Identification</h3>
                    <div className="bg-linear-to-r from-slate-800 to-slate-700 text-white p-4 rounded-xl font-mono text-center">
                      MX: 2B/BA Mill Finish
                    </div>
                  </div>

                  {/* Finishes */}
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-3">Available Finishes</h3>
                    <div className="space-y-3">
                      {finishes.map((finish, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className={`p-3 rounded-lg border border-gray-200 ${finish.color}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-800">{finish.name}</span>
                            {index < 2 && (
                              <CheckCircle className="h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{finish.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-linear-to-br from-slate-50 to-gray-50 border border-gray-200">
                      <h4 className="text-sm text-gray-500 mb-1">Surface Color</h4>
                      <p className="font-medium text-slate-800">Mill Finish</p>
                    </div>
                    <div className="p-4 rounded-xl bg-linear-to-br from-slate-50 to-gray-50 border border-gray-200">
                      <h4 className="text-sm text-gray-500 mb-1">Thickness Range</h4>
                      <p className="font-medium text-slate-800">0.40 - 20.00 mm</p>
                    </div>
                  </div>
                </div>

                {/* Datasheet Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-slate-700 mb-4">Technical Documentation</h3>
                  <div className="bg-linear-to-r from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      Datasheet MX: 2B/BA Mill Finish. We supply stainless steel sheets as per our catalogue. 
                      Any minor colour difference and brightness variation may occur due to material characteristics.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-3">Applications</h2>
                  <div className="h-1 w-12 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                </div>

                <div className="space-y-3">
                  {applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {app.icon}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-slate-900 transition-colors">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Assurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  All our stainless steel sheets undergo rigorous quality checks and are certified 
                  for industrial use. Each batch is tested for mechanical properties, corrosion 
                  resistance, and dimensional accuracy to ensure consistent quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Material Test Certificates</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Custom Specifications Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StainlessSteelSheets;