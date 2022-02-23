import React, { SVGProps } from 'react';

const BoltIcon: React.FC<SVGProps<SVGSVGElement>> = ({ color = '#6595EE', ...props }) => (
  <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <defs>
      <filter x="-141.7%" y="-141.7%" width="383.3%" height="383.3%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="6.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.341164231   0 0 0 0 0.586576462   0 0 0 0 0.960733354  0 0 0 0.796137456 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g id="↪️-All-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-device-details" transform="translate(-768.000000, -354.000000)">
        <g id="bolt-24px" filter="url(#filter-1)" transform="translate(787.000000, 373.000000)">
          <rect id="Rectangle" x="0" y="0" width="18" height="18"></rect>
          <path
            d="M8.19678048,16 L7.39718919,16 L8.19678048,10.5555556 L5.39821095,10.5555556 C4.69457061,10.5555556 5.13434582,9.97222222 5.15033765,9.94888889 C6.18181042,8.17555556 7.73301753,5.53111111 9.80395899,2 L10.6035503,2 L9.80395899,7.44444444 L12.6105244,7.44444444 C12.930361,7.44444444 13.106271,7.59222222 12.930361,7.95777778 C9.77197534,13.3166667 8.19678048,16 8.19678048,16 Z"
            id="Path"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default BoltIcon;
