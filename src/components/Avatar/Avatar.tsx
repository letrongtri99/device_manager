import React from 'react';
import { Avatar as AvatarMUI, AvatarProps } from '@material-ui/core';
import SentimentIcon from '@assets/vectors/sentiment.svg';

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarMUI {...props}>
      <SentimentIcon />
    </AvatarMUI>
  );
};

export default Avatar;
