import React, { SVGProps } from 'react';

const AddIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#283039', ...props }) => (
  <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <title>6A888450-6D67-4702-BE6D-D0FDFD8529C4@1x</title>
    <g id="↪️-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-null" transform="translate(-555.000000, -190.000000)">
        <g id="Group-7" transform="translate(556.000000, 191.000000)">
          <circle id="Oval" stroke="#283039" strokeWidth="2" cx="14" cy="14" r="14"></circle>
          <g id="add-24px-2" transform="translate(2.000000, 2.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <polygon id="Path" fill="#283039" fillRule="nonzero" points="19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11"></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default AddIcon;
