
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
// ThemeContext removed — dark mode disabled

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Resoure from "./pages/resources";
// import News from "./pages/News";
import Contact from "./pages/Contact";
import Applications from "./pages/Applications";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";

// Service Pages
import Slitting from "./pages/services/Slitting";
import CutToLength from "./pages/services/CutToLength";
import Packing from "./pages/services/Packing";
import Blanking from "./pages/services/Blanking";

// Product pages
import StainlessSteelSheets from "./components/2bba-mill-finish";
import BrushedFinish from "./components/BrushedFinish";
import Hairline from "./components/Hairline";
import SuperMirror from "./components/SuperMirror";
import BeadBlast from "./components/BeadBlast";
import Vibration from "./components/Vibration";
// import S.S.Strips from "./components/S.S.Strips";
import SSStrips from "./components/S.S.Strips";
import Etched from "./components/Etched";
import Embossed from "./components/Embossed";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // 🔒 Disable right-click (prevents "Inspect" & "Save As")
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 🔒 Disable copy / cut / paste
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("paste", disableCopy);

    // 🔒 Disable key shortcuts like Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
    const disableShortcuts = (e) => {
      if (
        (e.ctrlKey && ["u", "s", "c", "x", "i", "j"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Action disabled for content protection.");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("paste", disableCopy);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen select-none">
        <Header />
        <CommandPalette />
        <main className="grow pt-0 bg-linear-to-br from-slate-50 to-white-300 :from-slate-900 dark:to-white   transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resoure />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/2b-ba-mill-finish" element={<StainlessSteelSheets />} />
            <Route path="/products/4-brushed" element={<BrushedFinish />} />
            <Route path="/products/hairline" element={<Hairline />} />
            <Route path="/products/8-super-mirror" element={<SuperMirror />} />
            <Route path="/products/bead-blast" element={<BeadBlast />} />
            <Route path="/products/vibration" element={<Vibration />} />
           
            <Route path="/products/s-s-strips" element={<SSStrips />} />
            {/* <Route path="/products/S.S.Strips" element={<S.S.Strips />} /> */}
            <Route path="/products/etched" element={<Etched />} />
            <Route path="/products/embossed" element={<Embossed />} />
            
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/case-studsies" element={<CaseStudies />} />

            {/* Service Routes */}
            <Route path="/services/slitting" element={<Slitting />} />
            <Route path="/services/cut-to-length" element={<CutToLength />} />
            <Route path="/services/packing" element={<Packing />} />
            <Route path="/services/blanking" element={<Blanking />} />

            {/* Machinery Routes */}
            <Route path="/machinery/cut-to-length-leveling" element={<CutToLength />} />
            <Route path="/machinery/narrow-width-slitting" element={<Slitting />} />
            <Route path="/machinery/wider-width-slitting" element={<Slitting />} />
            <Route path="/machinery/coil-to-coil-grinding" element={<Slitting />} />
            <Route path="/machinery/cut-to-length" element={<CutToLength />} />
            <Route path="/machinery/slitting" element={<Slitting />} />
            <Route path="/machinery/blanking" element={<Blanking />} />
            <Route path="/machinery/packing" element={<Packing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return <AppContent />;
}

export default App;
