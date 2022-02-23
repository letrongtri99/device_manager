import WButton from '@components/Controls/WButton';
import RemovePersonIcon from '@components/icons/RemovePerson';
import { SiteSetupModalUserManagermentAvatar } from '@components/SiteSetupModal/Shared/SiteSetupModalAvatar.styled';
import { SiteSetupModalHeaderSubtitle } from '@components/SiteSetupModal/Shared/SiteSetupModalHeader.styled';
import { Box, Button, Slide, SlideProps, Typography } from '@material-ui/core';
import React from 'react';
import data from './dataset';
import { useIntl } from 'react-intl';
import { SiteSetupModalUserManagermentCompanyDetailContainer, SiteSetupModalUserManagermentCompanyUserList } from './SiteSetupModalUserManagermentCompanyDetail.styled';
import LockIcon from '@components/icons/Lock';

interface SiteSetupModalUserManagermentCompanyDetailProps {
  onClose?: () => void;
  onSave?: () => void;
}

const SiteSetupModalUserManagermentCompanyDetail = ({ onClose, onSave, ...props }: SiteSetupModalUserManagermentCompanyDetailProps & SlideProps) => {
  const intl = useIntl();

  return (
    <Slide {...props} unmountOnExit direction="up">
      <SiteSetupModalUserManagermentCompanyDetailContainer>
        <Box display="flex" alignItems="center" mb={2.5}>
          <Box mr={3}>
            <SiteSetupModalUserManagermentAvatar src="https://images.unsplash.com/photo-1612831818835-04968d0746fa?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </Box>
          <Typography variant="h6">ZeroConstruction AS</Typography>
          <Box ml="auto">
            <WButton>
              <RemovePersonIcon />
            </WButton>
          </Box>
        </Box>
        <SiteSetupModalUserManagermentCompanyUserList mb={2}>
          {data.map((item, index) => (
            <SiteSetupModalUserManagermentAvatar key={index} src={item.avatar} alt={item.name} size="small" />
          ))}
        </SiteSetupModalUserManagermentCompanyUserList>
        <Box mb={2}>
          <SiteSetupModalHeaderSubtitle variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SiteSetupModalHeaderSubtitle>
        </Box>
        <Box mb={11}>
          <WButton startIcon={<LockIcon color="white" />} color="secondary" variant="contained">
            {intl.formatMessage({
              id: 'open_access',
              defaultMessage: 'Open Access',
            })}
          </WButton>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button onClick={onClose}>
            {intl.formatMessage({
              id: 'close',
              defaultMessage: 'Close',
            })}
          </Button>
          <Button onClick={onSave}>
            {intl.formatMessage({
              id: 'save',
              defaultMessage: 'Save',
            })}
          </Button>
        </Box>
      </SiteSetupModalUserManagermentCompanyDetailContainer>
    </Slide>
  );
};

export default SiteSetupModalUserManagermentCompanyDetail;
