import React, { SVGProps } from 'react';

const SmileIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = 'black', ...props }) => (
  <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <title>211C2AB9-68FC-4265-AEDE-EDCE98128B9D@1x</title>
    <g id="↪️-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-null" transform="translate(-240.000000, -65.000000)">
        <g id="sentiment_satisfied_alt-24px" transform="translate(240.000000, 65.000000)">
          <polygon id="Path" points="0 0 36 0 36 36 0 36"></polygon>
          <circle id="Oval" fill={color} fillRule="nonzero" cx="23.5" cy="14.5" r="2.5"></circle>
          <circle id="Oval" fill={color} fillRule="nonzero" cx="12.5" cy="14.5" r="2.5"></circle>
          <path
            d="M18,24 C15.78,24 13.875,22.785 12.825,21 L10.32,21 C11.52,24.075 14.505,26.25 18,26.25 C21.495,26.25 24.48,24.075 25.68,21 L23.175,21 C22.14,22.785 20.22,24 18,24 Z M17.985,3 C9.705,3 3,9.72 3,18 C3,26.28 9.705,33 17.985,33 C26.28,33 33,26.28 33,18 C33,9.72 26.28,3 17.985,3 Z M18,30 C11.37,30 6,24.63 6,18 C6,11.37 11.37,6 18,6 C24.63,6 30,11.37 30,18 C30,24.63 24.63,30 18,30 Z"
            id="Shape"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default SmileIcon;
