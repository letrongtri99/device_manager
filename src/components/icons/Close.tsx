import React, { SVGProps } from 'react';

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = 'black', ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <title>D69065EB-6BA3-4189-B8F8-FD22E298BA82@1x</title>
    <g id="↪️-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Profile-no-image" transform="translate(-1056.000000, -142.000000)">
        <g id="close-24px" transform="translate(1056.000000, 142.000000)">
          <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
          <polygon id="Path" fill={color} fillRule="nonzero" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon>
        </g>
      </g>
    </g>
  </svg>
);

export default CloseIcon;
