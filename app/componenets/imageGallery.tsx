"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State to keep track of selected image index

  // Function to handle the click on a small image
  const handleSmallImageClick = (image: any, index: number) => {
    setBigImage(image); // Set the big image to the clicked image
    setSelectedImageIndex(index); // Set the selected image index
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: number) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-lg bg-gray-100 ${
              selectedImageIndex === idx ? "border-4 border-gray-400" : ""
            }`} // Conditional class to add a grey border to the selected image
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer hover:border-4 hover:border-gray-400"
              onClick={() => handleSmallImageClick(image, idx)} // Pass the index to the handler
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        {/* Adding a Banner */}
        <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-lg font-semibold uppercase tracking-wider text-white ">
          SALE
        </span>
      </div>
    </div>
  );
}

// ORIGINAL CODE
// "use client";

// import Image from "next/image";
// import { urlFor } from "../lib/sanity";
// import { useState } from "react";

// interface iAppProps {
//   images: any;
// }

// export default function ImageGallery({ images }: iAppProps) {
//   const [bigImage, setBigImage] = useState(images[0]);
//   const [purpleBorder, setPurpleBorder] = useState(false);

//   const theBorder = () => {
//     setPurpleBorder(!purpleBorder);

//     return <div className="border border-primary"></div>;
//   };

//   const handleSmallImageClick = (image: any) => {
//     setBigImage(image);
//   };
//   return (
//     <div className="grid gap-4 lg:grid-cols-5">
//       <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//         {images.map((image: any, idx: any) => (
//           <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//             <Image
//               src={urlFor(image).url()}
//               width={200}
//               height={200}
//               alt="photo"
//               className="h-full w-full object-cover object-center cursor-pointer"
//               onClick={() => {
//                 handleSmallImageClick(image);
//                 theBorder();
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//         <Image
//           src={urlFor(bigImage).url()}
//           alt="photo"
//           width={500}
//           height={500}
//           className="h-full w-full object-cover object-center"
//         />

//         {/* adding a Banner */}
//         <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-lg font-semibold uppercase tracking-wider text-white ">
//           SALE
//         </span>
//       </div>
//     </div>
//   );
// }
