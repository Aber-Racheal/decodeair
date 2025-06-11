// 'use client'

// import { ReactNode } from "react";

// export default function Modal({
//   children,
//   onClose,
// }: {
//   children: ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal content */}
//       <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }
