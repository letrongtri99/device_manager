import AlertDialog from '@components/AlertDialog';
import WButton from '@components/Controls/WButton';
import Search from '@components/Search';
import { Box, CircularProgress, Divider, FormControl, List, ListItemAvatar, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { WattAppState } from '@stores/index';
import { RoleTypes } from '@stores/shared/types';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { employeeActions } from '@stores/slices/employee';
import { invitationActions } from '@stores/slices/invitation';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { BootstrapInput, BoxAction, ButtonClose, ButtonRightContainer, ButtonRole, ContainerOption, EmployeeAvatar, EmployeeDetailContainer, EmployeeItem, EmployeePhone, Modal, StyledMenuItem, StyledSelection } from './Modal.styled';

interface Props {
  handleOpenCloseEmployee: () => void;
}

const EmployeeListModal = ({ handleOpenCloseEmployee }: Props) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(true);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [invitationId, setInvitationId] = useState<number | null>(null);
  const [employeeId, setEmployeeId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [role, setRole] = useState<RoleTypes>(RoleTypes.CompanyEmployee);

  const userMe = useSelector((state: WattAppState) => state.user.me.item);
  const { items: employeesData, fetching: employeesLoading } = useSelector((state: WattAppState) => state.employee.list);
  const { items: invitationData, fetching: invitationsLoading } = useSelector((state: WattAppState) => state.invitation.list);
  const invitationStatus = useSelector((state: WattAppState) => state.invitation.create.status);

  useEffect(() => {
    !!userMe?.company &&
      dispatch(
        employeeActions.getCompanyEmployeesRequest({
          CompanyId: userMe.company.id,
        }),
      );
    !!userMe?.company &&
      dispatch(
        invitationActions.getEmployeeInvitationsRequest({
          CompanyId: userMe.company.id,
        }),
      );
  }, []);

  const clearInput = () => {
    setInputValue('');
  };

  const handleSendInvitation = () => {
    if (inputValue && role) {
      !!userMe?.company &&
        dispatch(
          invitationActions.createEmployeeInvitationRequest({
            roleType: role,
            phone: inputValue,
            companyId: userMe.company.id,
          }),
        );
    }
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setInvitationId(null);
    setEmployeeId(null);
    setOpenDialog(false);
  };

  const handleConfirmDialog = () => {
    if (userMe?.company) {
      !!invitationId &&
        dispatch(
          invitationActions.deleteEmployeeInvitationRequest({
            id: invitationId,
            CompanyId: userMe.company.id,
          }),
        );
      !!employeeId &&
        dispatch(
          employeeActions.deleteCompanyEmployeeRequest({
            id: employeeId,
            CompanyId: userMe.company.id,
          }),
        );
    }
    handleCloseDialog();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(!open);
        handleOpenCloseEmployee();
      }}
    >
      <div>
        <AlertDialog title="Confirm Message" content={'Do you want to remove this ' + (invitationId ? 'invitation' : 'employee')} open={openDialog} onConfirm={handleConfirmDialog} onClose={() => setOpenDialog(false)} onCancel={handleCloseDialog} />
        <Box mb={2}>
          <Typography variant="h4">
            {intl.formatMessage({
              id: 'employee_list_Typography',
              defaultMessage: 'Employees',
            })}
          </Typography>
        </Box>
        <Box mb={2} maxWidth="90%">
          <Typography variant="caption">
            {intl.formatMessage({
              id: 'employee_list_description',
              defaultMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            })}
          </Typography>
        </Box>
        <Search fetching={invitationStatus === RequestStatus.Loading} kind="employee" value={inputValue} changeInput={changeInput} clearInput={clearInput}>
          {!!inputValue && (
            <ContainerOption>
              <Divider />
              <BoxAction>
                <FormControl>
                  <StyledSelection value={role} onChange={(e) => setRole(e.target.value as RoleTypes)} input={<BootstrapInput />}>
                    <StyledMenuItem value={RoleTypes.CompanyEmployee} className="menu-item">
                      {intl.formatMessage({
                        id: 'employee_list_title',
                        defaultMessage: 'Employee',
                      })}
                    </StyledMenuItem>
                    <StyledMenuItem value={RoleTypes.CompanyAdmin} className="menu-item">
                      {intl.formatMessage({
                        id: 'admin',
                        defaultMessage: 'Admin',
                      })}
                    </StyledMenuItem>
                  </StyledSelection>
                </FormControl>
                <WButton loading={invitationStatus === RequestStatus.Loading} variant="text" onClick={handleSendInvitation} showShortLineBottom>
                  {intl.formatMessage({
                    id: 'send_an_invitation',
                    defaultMessage: 'Send an invitation',
                  })}
                </WButton>
              </BoxAction>
            </ContainerOption>
          )}
        </Search>
        {invitationsLoading || employeesLoading
          ? (
          <Box textAlign="center" pt={5} pb={5}>
            <CircularProgress size={20} />
          </Box>
            )
          : (
          <List>
            {invitationData?.map((item, index) => (
              <EmployeeItem isInvitation={true} key={index} mx={-4} px={4}>
                <ListItemAvatar>
                  <EmployeeAvatar isInvitation={true} />
                </ListItemAvatar>
                <EmployeeDetailContainer>
                  <Typography variant="h6">Pending invitation</Typography>
                  <EmployeePhone variant="caption">{item.phone}</EmployeePhone>
                </EmployeeDetailContainer>
                <ButtonRightContainer>
                  <ButtonRole position={item.roleType === RoleTypes.CompanyAdmin || item.roleType === RoleTypes.CompanyOwner}>{item.roleType}</ButtonRole>
                  <ButtonClose
                    onClick={() => {
                      setInvitationId(item.id);
                      handleOpenDialog();
                    }}
                    src="/employee/cancel.svg"
                  />
                </ButtonRightContainer>
              </EmployeeItem>
            ))}
            {employeesData.map((item, index) => (
              <EmployeeItem key={index}>
                <ListItemAvatar>
                  <EmployeeAvatar src={item.avatarUrl}>
                    <ImageIcon />
                  </EmployeeAvatar>
                </ListItemAvatar>
                <EmployeeDetailContainer>
                  <Typography variant="h6">
                    {item.firstName} {item.lastName}
                  </Typography>
                  <EmployeePhone variant="caption">{item.phone}</EmployeePhone>
                </EmployeeDetailContainer>
                <ButtonRightContainer>
                  <ButtonRole position={item.roleType === RoleTypes.CompanyAdmin || item.roleType === RoleTypes.CompanyOwner}>{item.roleType}</ButtonRole>
                  {item.roleType !== RoleTypes.CompanyOwner && (
                    <ButtonClose
                      onClick={() => {
                        setEmployeeId(item.id);
                        handleOpenDialog();
                      }}
                      src="/employee/circle_close.svg"
                    />
                  )}
                </ButtonRightContainer>
              </EmployeeItem>
            ))}
          </List>
            )}
      </div>
    </Modal>
  );
};

export default EmployeeListModal;
