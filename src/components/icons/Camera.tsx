import React, { SVGProps } from 'react';

const CameraIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#283039', ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.1555 3.88925L4.45216 2.40525C4.5126 2.10288 4.67597 1.8308 4.91446 1.63535C5.15295 1.43989 5.45181 1.33313 5.76016 1.33325H10.2402C10.5485 1.33313 10.8474 1.43989 11.0859 1.63535C11.3244 1.8308 11.4877 2.10288 11.5482 2.40525L11.8448 3.88925C11.8914 4.12178 12.003 4.33631 12.1667 4.50791C12.3304 4.6795 12.5394 4.80111 12.7695 4.85859C13.3115 4.99417 13.7926 5.30704 14.1364 5.74745C14.4802 6.18786 14.6669 6.73055 14.6668 7.28925V11.9999C14.6668 12.7072 14.3859 13.3854 13.8858 13.8855C13.3857 14.3856 12.7074 14.6666 12.0002 14.6666H4.00016C3.29292 14.6666 2.61464 14.3856 2.11454 13.8855C1.61445 13.3854 1.3335 12.7072 1.3335 11.9999V7.28925C1.33345 6.73055 1.52015 6.18786 1.86393 5.74745C2.2077 5.30704 2.68883 4.99417 3.23083 4.85859C3.4609 4.80111 3.66994 4.6795 3.83362 4.50791C3.99731 4.33631 4.10893 4.12178 4.1555 3.88925V3.88925Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00016 12.0001C9.47292 12.0001 10.6668 10.8062 10.6668 9.33341C10.6668 7.86066 9.47292 6.66675 8.00016 6.66675C6.5274 6.66675 5.3335 7.86066 5.3335 9.33341C5.3335 10.8062 6.5274 12.0001 8.00016 12.0001Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.3335 4H8.66683" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CameraIcon;