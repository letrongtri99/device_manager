import React, { SVGProps } from 'react';

const OvalThumbIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#8A9AAD', ...props }) => {
  return (
    <svg width="37" height="40" viewBox="0 0 37 40" fill={color} xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <ellipse cx="18.5" cy="16" rx="12.5" ry="16" fill="#8A9AAD" />
        <path d="M26 16C26 23.2946 21.5632 27 18.5 27C15.4368 27 11 23.2946 11 16C11 8.70536 15.4368 5 18.5 5C21.5632 5 26 8.70537 26 16Z" stroke="#B4BECA" strokeWidth="10" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="-4" width="37" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.745098 0 0 0 0 0.792157 0 0 0 0.353092 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default OvalThumbIcon;
