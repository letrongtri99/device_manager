import React, { SVGProps } from 'react';

const ThunderIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '283039', ...props }) => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.91664 19.75H3.8333L4.91664 12.1667H1.12497C0.171636 12.1667 0.767469 11.3542 0.789136 11.3217C2.18664 8.85167 4.2883 5.16833 7.09414 0.25H8.17747L7.09414 7.83333H10.8966C11.33 7.83333 11.5683 8.03917 11.33 8.54833C7.0508 16.0125 4.91664 19.75 4.91664 19.75Z" fill={color} />
  </svg>
);

export default ThunderIcon;
