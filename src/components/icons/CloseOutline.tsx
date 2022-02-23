import React, { SVGProps } from 'react';
import theme from '@styles/theme';

const CloseOutlineIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = theme.palette.common.black, ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Site-Administrators-list" transform="translate(-989.000000, -309.000000)">
        <g id="Group-16" transform="translate(399.000000, 280.000000)">
          <g id="cancel-24px-2" transform="translate(590.000000, 29.000000)">
            <polygon id="Path" opacity="0.87" points="0 0 24 0 24 24 0 24"></polygon>
            <path
              d="M12,2 C6.47,2 2,6.47 2,12 C2,17.53 6.47,22 12,22 C17.53,22 22,17.53 22,12 C22,6.47 17.53,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M15.59,7 L12,10.59 L8.41,7 L7,8.41 L10.59,12 L7,15.59 L8.41,17 L12,13.41 L15.59,17 L17,15.59 L13.41,12 L17,8.41 L15.59,7 Z"
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

export default CloseOutlineIcon;
