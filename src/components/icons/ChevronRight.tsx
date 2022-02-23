import React, { SVGProps } from 'react';

const ChevronRightIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#283039', ...props }) => (
  <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 1.96975L1.21337 0.777832L8 7.4445L1.21337 14.1112L0 12.9192L5.57326 7.4445L0 1.96975Z" fill={color} />
  </svg>
);

export default ChevronRightIcon;
