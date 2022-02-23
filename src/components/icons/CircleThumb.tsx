import React, { SVGProps } from 'react';

const CircleThumbIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#8A9AAD', ...props }) => {
  return (
    <svg width="41" height="37" viewBox="0 0 41 37" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d)">
        <circle cx="20.5" cy="14.5" r="14.5" fill="#8A9AAD" />
        <circle cx="20.5" cy="14.5" r="9.5" stroke="#B4BECA" strokeWidth="10" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="-4" width="41" height="41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

export default CircleThumbIcon;
