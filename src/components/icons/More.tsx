import React, { SVGProps } from 'react';

const MoreIcon = ({ color = 'black' }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>D83CEE6E-F7CE-4507-8111-30B22A658C77@1x</title>
      <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <g id="Home-site-null_user-mgt-prompt" transform="translate(-1341.000000, -220.000000)">
          <g id="more_horiz-24px-2" transform="translate(1341.000000, 220.000000)">
            <path
              d="M6,10 C4.9,10 4,10.9 4,12 C4,13.1 4.9,14 6,14 C7.1,14 8,13.1 8,12 C8,10.9 7.1,10 6,10 Z M18,10 C16.9,10 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,10 18,10 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z"
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

export default MoreIcon;
