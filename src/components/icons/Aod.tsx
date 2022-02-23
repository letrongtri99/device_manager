import React, { SVGProps } from 'react';

const AodIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#283039', ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-site-device-management" transform="translate(-657.000000, -596.000000)">
        <g id="aod-24px" transform="translate(657.000000, 596.000000)">
          <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M17,1.01 L7,1 C5.9,1 5,1.9 5,3 L5,21 C5,22.1 5.9,23 7,23 L17,23 C18.1,23 19,22.1 19,21 L19,3 C19,1.9 18.1,1.01 17,1.01 Z M17,21 L7,21 L7,18 L17,18 L17,21 Z M17,18 L7,18 L7,6 L17,6 L17,18 Z M17,6 L7,6 L7,3 L17,3 L17,6 Z M8,10 L16,10 L16,11.5 L8,11.5 L8,10 Z M9,13 L15,13 L15,14.5 L9,14.5 L9,13 Z"
            id="Shape"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default AodIcon;
