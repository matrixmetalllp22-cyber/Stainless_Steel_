import React from 'react';
import { CheckCircle, Download, Package, Ruler, Layers, Factory } from 'lucide-react';

const StainlessSteelSheets = () => {
  const materialGrades = ['202', '304', '304L', '316', '316L', '321', '430', '441'];
  
  const applications = [
    { icon: '🍺', name: 'Breweries and Distilleries' },
    { icon: '🥛', name: 'Milk Cans and Boilers' },
    { icon: '💊', name: 'Pharmaceutical Machinery' },
    { icon: '⌚', name: 'Horology' },
    { icon: '⚡', name: 'Electrical and Electronic Components' },
    { icon: '🪑', name: 'Street Furniture' },
    { icon: '🔪', name: 'Kitchen Equipment' },
    { icon: '🚢', name: 'Marine Industry' },
    { icon: '✈️', name: 'Automotive & Aviation Industries' },
    { icon: '❄️', name: 'Refrigeration' }
  ];

  const dimensions = [
    { size: '1260 mm x 2500 mm' },
    { size: '1500 mm x 3000 mm' },
    { size: 'Special dimensions on demand', special: true }
  ];

  const finishes = ['2B', 'BA', 'Other mill finishes available on request'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Stainless Steel Sheets
          </h1>
          <p className="text-gray-600 text-lg">Premium quality stainless steel sheets for industrial applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Specifications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Material Grades Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Layers className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Material Grades</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {materialGrades.map((grade) => (
                  <div key={grade} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                    <span className="font-semibold text-gray-900 text-lg">{grade}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Other grades available on request</span>
                </p>
              </div>
            </div>

            {/* Dimensions & Availability Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Ruler className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Dimensions & Availability</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 text-lg">Standard Dimensions</h3>
                  <div className="space-y-3">
                    {dimensions.map((dim, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="h-8 w-8 bg-white border border-gray-300 rounded-md flex items-center justify-center">
                          <span className="font-medium text-gray-700">{index + 1}</span>
                        </div>
                        <span className={`font-medium ${dim.special ? 'text-amber-600' : 'text-gray-900'}`}>
                          {dim.size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 text-lg">Availability</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <Package className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-semibold text-green-800">In Stock</p>
                          <p className="text-green-700 text-sm">Ready for immediate dispatch</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Factory className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="font-semibold text-blue-800">To Produce</p>
                          <p className="text-blue-700 text-sm">Custom manufacturing available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details & Applications */}
          <div className="space-y-8">
            {/* Product Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Details</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Product Code</h3>
                  <div className="bg-gray-900 text-white p-3 rounded-lg font-mono text-center">
                    MX: 2B/BA Mill Finish
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Finish</h3>
                  <div className="flex flex-wrap gap-2">
                    {finishes.map((finish, index) => (
                      <span key={index} className={`px-3 py-1.5 rounded-full text-sm font-medium ${index < 2 ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-gray-100 text-gray-800'}`}>
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Color</h3>
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                      <span className="font-medium text-gray-900">Mill Finish</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Thickness</h3>
                    <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                      <span className="font-medium text-gray-900">0.40 - 20.00 mm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Datasheet Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-4">Datasheet</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 text-sm">
                    Datasheet MX: 2B/BA Mill Finish. We supply stainless steel sheets as per our catalogue. Any minor colour difference and in the brightness might be because of difference in raw material reflection.
                  </p>
                  <button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <Download className="h-5 w-5" />
                    Download Datasheet
                  </button>
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Applications</h2>
                <div className="h-1 w-20 bg-green-600 rounded-full"></div>
              </div>

              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-2xl">{app.icon}</span>
                    <span className="text-gray-800 font-medium">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Note */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-4">
            <CheckCircle className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Quality Assurance</h3>
              <p className="text-gray-700">
                All our stainless steel sheets undergo rigorous quality checks and are certified for industrial use. Custom specifications and special finishes available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StainlessSteelSheets;