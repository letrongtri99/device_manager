import NotificationsIcon from '@assets/vectors/notifications.svg';
import PeopleIcon from '@assets/vectors/people.svg';
import ReceiptIcon from '@assets/vectors/receipt.svg';
import EmployeeList from '@components/EmployeeListModal';
import ProfileUpdate from '@components/ProfileUpdate';
import { Badge, Box, Grid, IconButton, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderAvatar, RoleType } from './DashboardHeader.styled';

const DashboardHeader = () => {
  const [openModalUpdateProfile, setOpenModalUpdateProfile] = useState<boolean>(false);
  const [openModalEmployeeList, setOpenModalEmployeeList] = useState<boolean>(false);

  const { item } = useSelector((state: WattAppState) => state.user.me);

  const handleOpenCloseEmployee = () => {
    setOpenModalEmployeeList(!openModalEmployeeList);
  };

  return (
    <>
      <Box pt={5} pl={5} pr={3} flexGrow="1">
        <Grid container>
          <Grid item xs={6} alignItems="center">
            <Box display="flex" alignItems="center">
              <Box>
                <Box mr={2}>
                  <HeaderAvatar src={item?.avatarUrl} onClick={() => setOpenModalUpdateProfile(!openModalUpdateProfile)} />
                </Box>
              </Box>
              <Box>
                <Box mb={1}>
                  <Typography variant="h2">
                    {item?.firstName} {item?.lastName}
                  </Typography>
                </Box>

                <Box display="flex">
                  <Typography variant="body1">{item?.company?.name || '-'}</Typography>
                  {!!item?.company && (
                    <RoleType display="flex" alignItems="center" justifyContent="center">
                      {item?.company.roleType}
                    </RoleType>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item container xs={6} direction="row" justify="flex-end" spacing={2}>
            {!!item?.company && (
              <Grid item>
                <IconButton>
                  <PeopleIcon onClick={handleOpenCloseEmployee} />
                  {openModalEmployeeList && <EmployeeList handleOpenCloseEmployee={handleOpenCloseEmployee} />}
                </IconButton>
              </Grid>
            )}
            <Grid item>
              <IconButton>
                <ReceiptIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Badge variant="dot" invisible={false} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {openModalUpdateProfile && <ProfileUpdate setModalVisible={setOpenModalUpdateProfile} />}
    </>
  );
};
export default DashboardHeader;
