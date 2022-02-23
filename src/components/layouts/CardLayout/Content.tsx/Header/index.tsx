import MoreIcon from '@components/icons/More';
import { Box, CircularProgress, Menu, MenuItem, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { CardLayoutContentHeaderButton, CardLayoutContentHeaderContainer } from './CardLayoutContentHeader.styled';
import CardLayoutContentHeaderTab, { HeaderTab } from './Tab';

interface CardLayoutContentHeaderProps {
  title: string;
  cardLayoutContent?: string;
  getCurrentTab?: (value: HeaderTab) => void;
}

const CardLayoutContentHeader = ({ title, getCurrentTab }: CardLayoutContentHeaderProps) => {
  const intl = useIntl();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { item, fetching } = useSelector((state: WattAppState) => state.site.detail);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CardLayoutContentHeaderContainer display="flex" px={3} py={4} flexDirection="column" justifyContent="space-between">
        <Box>
          <Box mb={4} display="flex" alignItems="center" justifyContent="space-between">
            <Box>{fetching ? <CircularProgress size={20} /> : <Typography variant="h2">{item?.name || title}</Typography>}</Box>
            <Box>
              <CardLayoutContentHeaderButton disableRipple aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreIcon />
              </CardLayoutContentHeaderButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
          <CardLayoutContentHeaderTab getCurrentTab={getCurrentTab} />
        </Box>
      </CardLayoutContentHeaderContainer>
    </>
  );
};

export default CardLayoutContentHeader;
