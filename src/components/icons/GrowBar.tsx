import React, { SVGProps } from 'react';

const GrowBarIcon = ({ color = '#F1F1F3', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="315" height="18" viewBox="0 0 315 18" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 16.2317C0 15.4356 0.625545 14.7799 1.4208 14.7426L305.941 0.42592C310.874 0.193998 315 4.13095 315 9.06945C315 13.8484 311.126 17.7225 306.347 17.7225H1.49081C0.667458 17.7225 0 17.0551 0 16.2317Z" fill="#F1F1F3" />
    </svg>
  );
};

export default GrowBarIcon;
