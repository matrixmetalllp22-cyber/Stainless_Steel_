import React from 'react';

const EurocutCTL800 = () => {
  const features = [
    {
      number: 1,
      title: "Structural Design & Precision Engineering",
      description:
        "EUROCUT™ Precision CTL 800 is engineered for ultra-light gauge materials requiring exceptional dimensional fidelity. The machine frame is stress-relieved and vibration-dampened to ensure geometric stability. Structural rigidity prevents harmonic distortion during high-speed operation. The design guarantees micron-level sheet accuracy. This platform ensures repeatable precision under continuous industrial duty cycles.",
    },
    {
      number: 2,
      title: "Intelligent Decoiling System",
      description:
        "The servo-regulated decoiler employs torque-balanced mandrels for controlled coil payoff. Adaptive tension control eliminates sudden torque fluctuations. Coil memory and edge distortion are minimised through controlled unwinding dynamics. The system ensures stable strip presentation to downstream modules. This preserves material integrity from the first revolution to the final pass.",
    },
    {
      number: 3,
      title: "Multi-Roll Precision Levelling",
      description:
        "The high-density levelling cassette neutralises internal stress and crossbow deformation. Independently adjustable work rolls optimise penetration ratios for various alloys. Residual stress redistribution ensures absolute flatness. The leveller architecture prevents micro-waviness and edge curl. The result is metallurgical stress equilibrium and superior sheet planarity.",
    },
    {
      number: 4,
      title: "High-Response Servo Shearing Module",
      description:
        "The servo-driven shear provides high-speed, burr-free cutting precision. Blade synchronisation ensures distortion-free cut edges. Adaptive stroke control maintains repeat length accuracy. Dynamic cutting geometry prevents material drag and deformation. This ensures production of dimensionally exact sheets with pristine edge quality.",
    },
    {
      number: 5,
      title: "Surface Integrity Preservation",
      description:
        "Non-marking rollers and polymer-coated contact surfaces prevent abrasion. The line is optimised for mirror finish stainless steel and coated metals. Surface friction is reduced through low-contact pressure engineering. Micro-scratching and finish degradation are eliminated. This ensures premium cosmetic quality for high-value applications.",
    },
    {
      number: 6,
      title: "Dynamic Tension Loop Control",
      description:
        "The floating loop system ensures uninterrupted strip flow. Closed-loop tension monitoring prevents micro-elongation. Stress fluctuations are absorbed without affecting material geometry. The system stabilises strip movement at varying speeds. This guarantees uniform stress distribution throughout processing.",
    },
    {
      number: 7,
      title: "Automation & Synchronised Drives",
      description:
        "PLC-controlled servo drives harmonise decoiling, levelling, and shearing operations. Adaptive speed algorithms optimise throughput efficiency. Real-time diagnostics ensure operational precision. Intelligent automation reduces operator dependency. The system achieves high productivity with minimal human intervention.",
    },
    {
      number: 8,
      title: "Sheet Handling & Stacking System",
      description:
        "Vacuum or magnetic stacking systems ensure scratch-free sheet handling. Precision alignment ensures uniform stacking geometry. Automated palletisation improves handling safety. Stack integrity is maintained even at high production speeds. This enables efficient downstream logistics and packaging.",
    },
    {
      number: 9,
      title: "Industrial Application Versatility",
      description:
        "The system is ideal for aerospace panels, architectural finishes, and appliance components. It processes stainless steel, aluminium, and coated substrates. Dimensional consistency supports laser cutting and precision fabrication. Surface quality meets premium aesthetic standards. EUROCUT™ enables high-value manufacturing applications.",
    },
    {
      number: 10,
      title: "Energy Efficiency & Maintenance Philosophy",
      description:
        "European design principles prioritise energy optimisation and low friction drives. Modular architecture simplifies maintenance access. Predictive servicing reduces downtime. Component longevity ensures lifecycle cost efficiency. The system delivers sustainable and reliable industrial performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-zinc-100 mb-6">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="uppercase tracking-[3px] text-xs font-medium text-zinc-500">
              Ultra-Light Gauge
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-zinc-900">
            EUROCUT™
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-800 mt-2">
            Precision CTL 800
          </h2>
          <p className="mt-6 text-2xl text-zinc-600 max-w-2xl mx-auto">
            Ultra-Light Gauge Cut-to-Length Line
          </p>

          {/* Key Specs */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6 text-lg">
            <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-sm border border-zinc-100">
              <span className="text-zinc-400">Thickness</span>
              <span className="font-semibold text-zinc-900">0.10 – 1.20 mm</span>
            </div>
            <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-sm border border-zinc-100">
              <span className="text-zinc-400">Width</span>
              <span className="font-semibold text-zinc-900">800 mm</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group bg-white border border-zinc-100 hover:border-blue-200 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex gap-8">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white text-4xl font-bold shadow-inner group-hover:scale-110 transition-transform">
                  {feature.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-semibold text-zinc-900 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-6 text-[15.5px] leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            Built for precision. Engineered for performance.
          </p>
          <button
            onClick={() => window.open('mailto:sales@yourcompany.com?subject=EUROCUT™ CTL 800 Inquiry', '_blank')}
            className="mt-6 px-10 py-4 bg-zinc-900 hover:bg-black text-white rounded-2xl font-medium text-lg transition-all active:scale-95"
          >
            Request Quote / Technical Datasheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EurocutCTL800;