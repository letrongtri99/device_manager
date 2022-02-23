import React from 'react';

interface AnalyticsIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const AnanlyticsIcon: React.FC<AnalyticsIconProps> = ({ color = 'black', ...props }) => (
  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <title>5FE99046-F640-49A8-BAFF-B01D46697ABB@1x</title>
    <g id="↪️-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="1">
      <g id="Home-null" transform="translate(-70.000000, -287.000000)">
        <g id="Group-13" transform="translate(58.000000, 287.000000)">
          <g id="analytics-24px" transform="translate(12.000000, 0.000000)">
            <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
            <g id="Group" transform="translate(4.000000, 4.000000)" fill={color} fillRule="nonzero">
              <path
                d="M21.3333333,0 L2.66666667,0 C1.2,0 0,1.2 0,2.66666667 L0,21.3333333 C0,22.8 1.2,24 2.66666667,24 L21.3333333,24 C22.8,24 24,22.8 24,21.3333333 L24,2.66666667 C24,1.2 22.8,0 21.3333333,0 Z M21.3333333,21.3333333 L2.66666667,21.3333333 L2.66666667,2.66666667 L21.3333333,2.66666667 L21.3333333,21.3333333 Z"
                id="Shape"
              ></path>
              <rect id="Rectangle" x="5.33333333" y="12" width="2.66666667" height="6.66666667"></rect>
              <rect id="Rectangle" x="16" y="5.33333333" width="2.66666667" height="13.3333333"></rect>
              <rect id="Rectangle" x="10.6666667" y="14.6666667" width="2.66666667" height="4"></rect>
              <rect id="Rectangle" x="10.6666667" y="9.33333333" width="2.66666667" height="2.66666667"></rect>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default AnanlyticsIcon;
