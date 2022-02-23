import React, { SVGProps } from 'react';

const CreditCardIcon = ({ color = 'black' }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>B8CAA9BB-57C3-46E0-8B7A-2B1E34F021F8@1x</title>
      <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <g id="Home-site-null_user-mgt-prompt" transform="translate(-643.000000, -623.000000)">
          <g id="credit_card-24px" transform="translate(643.000000, 623.000000)">
            <path
              d="M21.6666667,4.33333333 L4.33333333,4.33333333 C3.13083333,4.33333333 2.1775,5.2975 2.1775,6.5 L2.16666667,19.5 C2.16666667,20.7025 3.13083333,21.6666667 4.33333333,21.6666667 L21.6666667,21.6666667 C22.8691667,21.6666667 23.8333333,20.7025 23.8333333,19.5 L23.8333333,6.5 C23.8333333,5.2975 22.8691667,4.33333333 21.6666667,4.33333333 Z M21.6666667,19.5 L4.33333333,19.5 L4.33333333,13 L21.6666667,13 L21.6666667,19.5 Z M21.6666667,8.66666667 L4.33333333,8.66666667 L4.33333333,6.5 L21.6666667,6.5 L21.6666667,8.66666667 Z"
              id="Shape"
              fill={color}
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CreditCardIcon;
