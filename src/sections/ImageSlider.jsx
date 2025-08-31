// import React, { useState, useEffect } from "react";
// import img1 from "../assets/bgrem.png";
// import img2 from "../assets/phone.png";
// import img3 from "../assets/bgrem.png";
// import img4 from "../assets/bgrem.png";
// import img5 from "../assets/bgrem.png";
// import img6 from "../assets/bgrem.png";

// const images = [img1, img2, img3, img4, img5, img6];

// const ImageSlider = () => {
//   const visibleImages = 3; 
//   const [current, setCurrent] = useState(0);

//   // Autoplay
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => prev + 1);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // Reset when reaching the end (to create infinite effect)
//   const transitionStyle =
//     current >= images.length
//       ? { transform: `translateX(0%)`, transition: "none" }
//       : {
//           transform: `translateX(-${current * (100 / visibleImages)}%)`,
//           transition: "transform 0.7s ease",
//         };

//   // Images doubled for smooth infinite loop
//   const doubledImages = [...images, ...images];

//   return (
//     <div className="relative w-full mx-auto mt-10">
//       <div className="overflow-hidden rounded-2xl shadow-2xl w-full">
//         <div
//           className="flex"
//           style={{
//             width: `${(doubledImages.length / visibleImages) * 100}%`,
//             ...transitionStyle,
//           }}
//           onTransitionEnd={() => {
          
//             if (current >= images.length) {
//               setCurrent(0);
//             }
//           }}
//         >
//           {doubledImages.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index}`}
//               className="w-1/ h-96 object-cover"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import img1 from "../assets/bgrem.png";
import img2 from "../assets/phone.png";
import img3 from "../assets/bgrem.png";
import img4 from "../assets/Logo.png";
import img5 from "../assets/bgrem.png";
import img6 from "../assets/bgrem.png";

const galleryImages = [
  { src: img1, alt: "Dashboard SCHOOLIFY" },
  { src: img2, alt: "Application Mobile" },
  { src: img3, alt: "Interface Web" },
  { src: img4, alt: "Logo SCHOOLIFY" },
  { src: img5, alt: "Gestion Élèves" },
  { src: img6, alt: "Transport Scolaire" }
];

const ImageSlider = () => {
  // نضاعف الصور باش الدورة تبان متواصلة
  const imagesLoop = [...galleryImages, ...galleryImages];

  return (
    <section className="py-16 w-full bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Galerie SCHOOLIFY
        </h2>
        <p className="text-lg text-gray-500">
          Découvrez notre écosystème en images
        </p>
      </div>

      {/* Carousel infini */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {imagesLoop.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] mx-4 flex items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-auto object-contain rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
