import React, { SVGProps } from 'react';

const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = 'black', ...props }) => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.1026 2.94609C16.2121 1.04751 13.6935 0.00188978 11.0108 0.00188978H10.9992C5.59693 -0.108681 0.857489 4.6489 0.968716 10.0492C1.11013 13.8624 4.77855 18.7052 7.63529 22.4257C8.47425 23.4279 9.69667 24 11.0099 24C12.3692 24 13.6313 23.3875 14.4724 22.3196C16.5917 19.686 21.1678 13.3518 21.0297 10.0491C21.0298 7.36442 19.9902 4.84187 18.1026 2.94609ZM12.9996 21.1594C12.0308 22.4374 9.9929 22.4397 9.02373 21.1616C5.1501 16.2292 2.84349 12.1215 2.84349 10.0491C2.84349 5.54289 6.50212 1.87681 10.9992 1.87681H11.0108C15.5015 1.87681 19.1549 5.54293 19.1549 10.0491C19.1549 12.144 16.9114 16.1936 12.9996 21.1594ZM11.0519 14.0164C8.85504 14.0164 7.06777 12.2291 7.06777 10.0323C7.28661 4.74686 14.8179 4.74841 15.036 10.0324C15.036 12.2292 13.2487 14.0164 11.0519 14.0164ZM11.0519 7.92308C9.88884 7.92308 8.94264 8.86928 8.94264 10.0323C9.05851 12.8305 13.0457 12.8297 13.1611 10.0323C13.1611 8.86928 12.2149 7.92308 11.0519 7.92308Z" fill="#283039"/>
  </svg>
);

export default LocationIcon;
