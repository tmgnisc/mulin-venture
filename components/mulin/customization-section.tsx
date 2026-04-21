// 'use client'
//
// import { useState, useEffect } from 'react'
// import { CheckIcon } from './svg-assets'
//
// const plants = ['Monstera Deliciosa', 'Fiddle Leaf', 'ZZ Plant', 'Snake Plant']
// const vessels = ['Ceramic White', 'Terracotta', 'Concrete', 'Glass']
// const sizes = ['Small', 'Medium', 'Large', 'Statement']
// const finishes = ['Matte', 'Gloss', 'Natural']
//
// const basePrice = 89
// const priceModifiers = {
//   plant: { 'Monstera Deliciosa': 40, 'Fiddle Leaf': 55, 'ZZ Plant': 30, 'Snake Plant': 25 },
//   vessel: { 'Ceramic White': 35, 'Terracotta': 25, 'Concrete': 45, 'Glass': 40 },
//   size: { 'Small': 0, 'Medium': 30, 'Large': 60, 'Statement': 120 },
//   finish: { 'Matte': 0, 'Gloss': 10, 'Natural': 5 },
// }
//
// const vesselColors = {
//   'Ceramic White': '#FAFAFA',
//   'Terracotta': '#C4714B',
//   'Concrete': '#8B8B8B',
//   'Glass': '#D4E6E7',
// }
//
// const features = [
//   'Choose your species from 200+ varieties',
//   'Select from ceramic, terracotta, concrete, or glass vessels',
//   'Personalize soil blend and drainage setup',
//   'Add a handwritten care note or gift wrap',
// ]
//
// export function CustomizationSection() {
//   const [selectedPlant, setSelectedPlant] = useState(plants[0])
//   const [selectedVessel, setSelectedVessel] = useState(vessels[0])
//   const [selectedSize, setSelectedSize] = useState(sizes[1])
//   const [selectedFinish, setSelectedFinish] = useState(finishes[0])
//   const [price, setPrice] = useState(basePrice)
//
//   useEffect(() => {
//     const newPrice = 
//       basePrice +
//       priceModifiers.plant[selectedPlant as keyof typeof priceModifiers.plant] +
//       priceModifiers.vessel[selectedVessel as keyof typeof priceModifiers.vessel] +
//       priceModifiers.size[selectedSize as keyof typeof priceModifiers.size] +
//       priceModifiers.finish[selectedFinish as keyof typeof priceModifiers.finish]
//     setPrice(newPrice)
//   }, [selectedPlant, selectedVessel, selectedSize, selectedFinish])
//
//   return (
//     <section id="customize" className="py-[clamp(80px,10vw,140px)] bg-moss text-white">
//       <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
//           {/* Left Column - Content */}
//           <div data-aos="fade-right">
//             <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
//               ✦ Make It Yours
//             </span>
//             <h2 
//               className="font-serif text-white mb-6"
//               style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
//             >
//               Every Plant, Perfectly Yours
//             </h2>
//             <p className="font-sans font-light text-white/70 leading-relaxed mb-8">
//               Design your perfect indoor plant from start to finish. Choose the species, vessel, 
//               size, and finishing touches — we&apos;ll craft it by hand and deliver it to your door.
//             </p>
//
//             {/* Feature List */}
//             <ul className="space-y-4 mb-10">
//               {features.map((feature, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
//                     <CheckIcon className="w-3 h-3 text-gold" />
//                   </span>
//                   <span className="font-sans font-light text-white/80">
//                     {feature}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//
//             <a
//               href="#"
//               className="inline-flex items-center px-8 py-4 border border-gold text-gold rounded-full text-sm tracking-[0.05em] font-medium hover:bg-gold hover:text-moss transition-all duration-300"
//             >
//               Start Your Order
//             </a>
//           </div>
//
//           {/* Right Column - Customizer UI */}
//           <div data-aos="fade-left" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//             {/* Plant Illustration */}
//             <div className="relative h-48 mb-8 flex items-center justify-center">
//               {/* Simple Plant SVG that changes vessel color */}
//               <svg viewBox="0 0 120 140" className="h-full w-auto">
//                 {/* Vessel */}
//                 <path
//                   d="M30 80 L35 130 L85 130 L90 80 Z"
//                   fill={vesselColors[selectedVessel as keyof typeof vesselColors]}
//                   className="transition-colors duration-500"
//                 />
//                 {/* Plant leaves */}
//                 <ellipse cx="60" cy="50" rx="35" ry="40" fill="#7A9E7E" opacity="0.9" />
//                 <ellipse cx="45" cy="45" rx="20" ry="30" fill="#4A6741" opacity="0.8" />
//                 <ellipse cx="75" cy="40" rx="18" ry="28" fill="#2C3B28" opacity="0.7" />
//                 <ellipse cx="60" cy="35" rx="15" ry="25" fill="#7A9E7E" opacity="0.9" />
//                 {/* Stem */}
//                 <rect x="57" y="70" width="6" height="15" fill="#4A6741" />
//               </svg>
//             </div>
//
//             {/* Option Pills */}
//             <div className="space-y-6">
//               {/* Plant Selection */}
//               <div>
//                 <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">
//                   Plant
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {plants.map((plant) => (
//                     <button
//                       key={plant}
//                       onClick={() => setSelectedPlant(plant)}
//                       className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
//                         selectedPlant === plant
//                           ? 'bg-gold text-moss border-transparent'
//                           : 'bg-transparent border border-white/30 text-white/80 hover:border-gold/50'
//                       }`}
//                     >
//                       {plant}
//                       {selectedPlant === plant && ' ✓'}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Vessel Selection */}
//               <div>
//                 <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">
//                   Vessel
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {vessels.map((vessel) => (
//                     <button
//                       key={vessel}
//                       onClick={() => setSelectedVessel(vessel)}
//                       className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
//                         selectedVessel === vessel
//                           ? 'bg-gold text-moss border-transparent'
//                           : 'bg-transparent border border-white/30 text-white/80 hover:border-gold/50'
//                       }`}
//                     >
//                       {vessel}
//                       {selectedVessel === vessel && ' ✓'}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Size Selection */}
//               <div>
//                 <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">
//                   Size
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
//                         selectedSize === size
//                           ? 'bg-gold text-moss border-transparent'
//                           : 'bg-transparent border border-white/30 text-white/80 hover:border-gold/50'
//                       }`}
//                     >
//                       {size}
//                       {selectedSize === size && ' ✓'}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Finish Selection */}
//               <div>
//                 <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">
//                   Finish
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {finishes.map((finish) => (
//                     <button
//                       key={finish}
//                       onClick={() => setSelectedFinish(finish)}
//                       className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
//                         selectedFinish === finish
//                           ? 'bg-gold text-moss border-transparent'
//                           : 'bg-transparent border border-white/30 text-white/80 hover:border-gold/50'
//                       }`}
//                     >
//                       {finish}
//                       {selectedFinish === finish && ' ✓'}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//
//             {/* Price Preview */}
//             <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1">
//                   Estimated Price
//                 </p>
//                 <p className="font-serif text-3xl text-gold">
//                   ${price}
//                 </p>
//               </div>
//               <button className="px-6 py-3 bg-gold text-moss rounded-full text-sm font-medium hover:bg-gold-light transition-colors">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
