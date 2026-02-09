// import React, { useState } from 'react';
// import { Play, AlertTriangle } from 'lucide-react';

// const NavigationComponent = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const navItems = [
//     'HOME',
//     'ABOUT US',
//     'PRODUCTS',
//     'MACHINERY',
//     'APPLICATIONS',
//     'RESOURCES',
//     'CONTACT US'
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             {/* Logo placeholder */}
//             <div className="flex items-center">
//               <div className="h-8 w-32 bg-blue-600 rounded"></div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-blue-600"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {isMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden border-t border-gray-200">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 {navItems.map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             CORPORATE VIDEO
//           </h1>
//           <p className="text-lg text-gray-600">
//             Watch our company introduction video
//           </p>
//         </div>

//         {/* Video Section */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
//           {/* Video Error Display */}
//           <div className="bg-gray-900 p-8 text-center">
//             <div className="relative">
//               {/* Video Error Overlay */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-sm z-10">
//                 <div className="bg-red-500/20 rounded-full p-6 mb-4">
//                   <AlertTriangle className="h-16 w-16 text-red-500" />
//                 </div>
                
//                 <div className="text-white">
//                   <div className="text-6xl font-bold text-red-500 mb-2">
//                     Error 153
//                   </div>
//                   <div className="text-2xl font-semibold mb-4">
//                     Video player configuration error
//                   </div>
//                   <p className="text-gray-300 max-w-md mx-auto">
//                     The video player cannot be loaded due to configuration issues.
//                   </p>
//                 </div>
//               </div>

//               {/* Video Player Placeholder */}
//               <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="h-24 w-24 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Play className="h-12 w-12 text-white ml-1" />
//                   </div>
//                   <p className="text-white/60 text-lg">
//                     Video player unavailable
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* YouTube Link Section */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Watch on YouTube instead
//                 </h3>
//                 <p className="text-gray-600 mt-1">
//                   The video is available directly on YouTube
//                 </p>
//               </div>
              
//               <a
//                 href="https://www.youtube.com/watch?v=example"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm hover:shadow-md"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                 </svg>
//                 Watch video on YouTube
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="mt-8 text-center text-gray-500 text-sm">
//           <p>
//             If the issue persists, please contact our technical support team.
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <div className="h-6 w-40 bg-blue-500 rounded"></div>
//             </div>
//             <div className="flex flex-wrap justify-center gap-6">
//               {navItems.slice(0, 4).map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-gray-300 hover:text-white transition-colors duration-200"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
//             <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default NavigationComponent;




import React, { useState } from 'react';
import { AlertTriangle, Play, Youtube, X } from 'lucide-react';

const CorporateVideo = () => {
  const [showError, setShowError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeUrl = "https://youtu.be/OTYtQKm8O9E?si=Ys8pxUWdOyYonHcD";
  
  // Extract video ID from URL
  const getVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CORPORATE VIDEO
          </h1>
          <p className="text-gray-600 text-lg">
            Watch our official company introduction
          </p>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          {/* Video Player Section */}
          <div className="relative bg-gray-900">
            {/* Video Player */}
            {isPlaying ? (
              <div className="relative">
                {/* Close button for video */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 z-20 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {/* YouTube Embed */}
                <div className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title="Corporate Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              /* Video Preview with Error State */
              <div className="relative">
                {/* Error Overlay - Toggleable */}
                {showError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-sm z-10 p-4">
                    <div className="bg-red-500/20 rounded-full p-6 mb-4">
                      <AlertTriangle className="h-16 w-16 text-red-500" />
                    </div>
                    
                    <div className="text-white text-center">
                      <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                        Error 153
                      </div>
                      <div className="text-xl md:text-2xl font-semibold mb-4">
                        Video player configuration error
                      </div>
                      <p className="text-gray-300 max-w-md mx-auto mb-6">
                        The video player cannot be loaded due to configuration issues.
                      </p>
                      <button
                        onClick={() => setShowError(false)}
                        className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-200"
                      >
                        Hide Error
                      </button>
                    </div>
                  </div>
                )}

                {/* Video Preview Thumbnail */}
                <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                  {/* YouTube Thumbnail */}
                  <div className="relative mb-6">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Video Thumbnail"
                      className="rounded-lg shadow-lg max-w-md w-full opacity-80"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={handlePlayVideo}
                        className="group relative"
                      >
                        <div className="h-24 w-24 md:h-32 md:w-32 bg-red-600 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700 shadow-2xl">
                          <Play className="h-12 w-12 md:h-16 md:w-16 text-white ml-2" />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Error Toggle Button */}
                  <button
                    onClick={() => setShowError(!showError)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 rounded-lg transition-colors duration-200"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    {showError ? 'Hide Error' : 'Show Error 153'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* YouTube Link Section */}
          <div className="bg-linear-to-r from-red-50 to-red-100 p-6 border-t border-red-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Watch on YouTube
                  </h3>
                  <p className="text-gray-600 text-sm">
                    For best viewing experience
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                {!isPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Play Video
                  </button>
                )}
                
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Open YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        
      </div>
    </div>
  );
};

export default CorporateVideo;