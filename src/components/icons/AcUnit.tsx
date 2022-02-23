import React, { SVGProps } from 'react';

const AcUnitIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#B8B8B8', ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-site-device-management_power-management" transform="translate(-799.000000, -393.000000)">
        <g id="Group-9" transform="translate(787.000000, 385.000000)">
          <g id="ac_unit-24px" transform="translate(12.000000, 8.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <polygon
              id="Path"
              fill={color}
              fillRule="nonzero"
              points="22 11 17.83 11 21.07 7.76 19.66 6.34 15 11 13 11 13 9 17.66 4.34 16.24 2.93 13 6.17 13 2 11 2 11 6.17 7.76 2.93 6.34 4.34 11 9 11 11 9 11 4.34 6.34 2.93 7.76 6.17 11 2 11 2 13 6.17 13 2.93 16.24 4.34 17.66 9 13 11 13 11 15 6.34 19.66 7.76 21.07 11 17.83 11 22 13 22 13 17.83 16.24 21.07 17.66 19.66 13 15 13 13 15 13 19.66 17.66 21.07 16.24 17.83 13 22 13"
            ></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default AcUnitIcon;
