import React, { SVGProps } from 'react';

const PowerIcon = ({ color = '#FFFFFF', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Home-site-device-management_power-management" transform="translate(-674.000000, -391.000000)">
          <g id="Group-10" transform="translate(664.000000, 385.000000)">
            <g id="power_settings_new-24px" transform="translate(10.000000, 6.000000)">
              <polygon id="Path" points="0 0 28 0 28 28 0 28"></polygon>
              <path
                d="M15.1666667,3.5 L12.8333333,3.5 L12.8333333,15.1666667 L15.1666667,15.1666667 L15.1666667,3.5 Z M20.8016667,6.03166667 L19.145,7.68833333 C20.9883333,9.17 22.1666667,11.445 22.1666667,14 C22.1666667,18.515 18.515,22.1666667 14,22.1666667 C9.485,22.1666667 5.83333333,18.515 5.83333333,14 C5.83333333,11.445 7.01166667,9.17 8.84333333,7.67666667 L7.19833333,6.03166667 C4.935,7.95666667 3.5,10.8033333 3.5,14 C3.5,19.7983333 8.20166667,24.5 14,24.5 C19.7983333,24.5 24.5,19.7983333 24.5,14 C24.5,10.8033333 23.065,7.95666667 20.8016667,6.03166667 Z"
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
};

export default PowerIcon;
