import Popup from '@components/Popup';
import styled from '@emotion/styled';
import { Button, Typography } from '@material-ui/core';

export const PopupStyled = styled(Popup)`
  .popup-wrapper {
    max-width: ${({ theme }) => theme.spacing(80)}px;
    padding: ${({ theme }) => `${theme.spacing(8)}px ${theme.spacing(17)}px`};
  }
`;

export const NotFound = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const SendInvitation = styled(Button)`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.common.black};
`;
