import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { siteActions } from '@stores/slices/site';
import { SideItemAvatar, SiteItemContainer } from './SiteItem.styled';

interface SiteItemProps {
  avatar?: string;
  name: string;
  address: string;
  active?: boolean;
  id: number;
}

const SiteItem = ({ avatar, name, address, active, id }: SiteItemProps) => {
  const dispatch = useDispatch();

  const markCurrentItem = (id: number) => () => {
    dispatch(siteActions.setIdCurrent(id));
  };

  return (
    <SiteItemContainer
      active={active}
      display="flex"
      alignItems="center"
      onClick={markCurrentItem(id)}
    >
      <SideItemAvatar alt={name} src={avatar} />
      <Box>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="body1">{address}</Typography>
      </Box>
    </SiteItemContainer>
  );
};

export default SiteItem;
