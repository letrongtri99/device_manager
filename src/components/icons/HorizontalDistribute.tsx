import React, { SVGProps } from 'react';

const HorizontalDistributeIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#B8B8B8', ...props }) => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fill-Rule="evenodd">
      <g id="Home-site-device-management_power-management" transform="translate(-962.000000, -395.000000)">
        <g id="Group-8" transform="translate(948.000000, 385.000000)">
          <g id="horizontal_distribute-24px" transform="translate(14.000000, 10.000000)">
            <rect id="Rectangle" x="0" y="0" width="20" height="20"></rect>
            <path
              d="M3.33333333,18.3333333 L1.66666667,18.3333333 L1.66666667,1.66666667 L3.33333333,1.66666667 L3.33333333,18.3333333 Z M18.3333333,1.66666667 L16.6666667,1.66666667 L16.6666667,18.3333333 L18.3333333,18.3333333 L18.3333333,1.66666667 Z M11.25,5.83333333 L8.75,5.83333333 L8.75,14.1666667 L11.25,14.1666667 L11.25,5.83333333 Z"
              id="Shape"
              fill={color}
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default HorizontalDistributeIcon;
