import { Box, BoxProps } from '@material-ui/core';
import styled from '@emotion/styled';
import WButton from '@components/Controls/WButton';

interface WAutoCompleteContainerProps {
  isFocus?: boolean;
  ref?: React.MutableRefObject<null>;
}

export const WAutoCompleteContainer = styled(Box)<WAutoCompleteContainerProps & BoxProps>`
  background-color: ${({ theme }) => theme.palette.common.white};
  ${({ isFocus }) => isFocus && ' box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.09)'};
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`;

export const WAutoCompleteInputContainer = styled(Box)<WAutoCompleteContainerProps>`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
`;

export const WAutoCompleteOptionsContainer = styled(Box)<BoxProps>`
  max-height: ${({ theme }) => theme.spacing(35)}px;
  overflow-y: auto;
`;

export const WAutoCompleteClearButton = styled(WButton)`
  padding: 0;
  min-width: auto;
`;
