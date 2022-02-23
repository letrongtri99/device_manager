import React from 'react';

interface HomeIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color = 'black', ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 26 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <title>DE2B7493-690B-4D3D-87D1-B1C873AFF857@1x</title>
    <g id="↪️-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home-null" transform="translate(-73.000000, -182.000000)" stroke={color} strokeWidth="3">
        <g id="Group-6" transform="translate(68.000000, 184.000000)">
          <g id="Group-14" transform="translate(7.000000, 0.000000)">
            <path d="M0,20 L0,4.16666667 C0,1.86548021 2.23857625,0 5,0 L17,0 C19.7614237,0 22,1.86548021 22,4.16666667 L22,20 L22,20" id="Path"></path>
            <path d="M7,20 L7,13.6666667 C7,12.7461921 7.81402773,12 8.81818182,12 L13.1818182,12 C14.1859723,12 15,12.7461921 15,13.6666667 L15,20 L15,20" id="Path"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default HomeIcon;
