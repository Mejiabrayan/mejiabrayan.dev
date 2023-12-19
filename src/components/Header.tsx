// import React from 'react';
// import { navLinks } from 'config/site';

// export default function Header() {
//   return (
//     <nav className='sticky top-0 z-50 flex items-center justify-between w-full backdrop-filter backdrop-blur-md bg-opacity-20 px-10 py-2'>
//       <div className='flex items-center flex-shrink-0 text-white'>
//         <svg
//           className='fill-current h-8 w-8 mr-2'
//           width='54'
//           height='54'
//           viewBox='0 0 54 54'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
//           <span className='font-semibold text-xl tracking-tight'>Brayan</span>
//         </svg>
//       </div>
//       <div className='w-full flex-grow md:flex md:items-center lg:flex lg:items-center lg:justify-center lg:w-auto'>
//         <div className='text-center lg:text-right lg:flex-grow'>
//           {Object.entries(navLinks[0]).map(([key, link]) => (
//             <a
//               key={key}
//               href={link.href}
//               className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 text-base'
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className='block lg:hidden'>
//         <button className='flex items-center px-3 py-2 rounded text-white'>
//           <svg
//             className='fill-current h-3 w-3'
//             viewBox='0 0 20 20'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <title>Menu</title>
//             <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }
