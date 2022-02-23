import React, { SVGProps } from 'react';

const ChevronLeftIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#283039', ...props }) => (
  <svg width="8" height="15" viewBox="0 0 8 15" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 1.96975L6.78663 0.777832L0 7.4445L6.78663 14.1112L8 12.9192L2.42674 7.4445L8 1.96975Z" fill={color} />
  </svg>
);

export default ChevronLeftIcon;
