import styled from '@emotion/styled';
import { Typography, Box, TypographyProps } from '@material-ui/core';
import theme from '@styles/theme';

export const CompanyDescriptonText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

export const WAutoCompleteWrapper = styled(Box)`
  min-width: ${({ theme }) => theme.spacing(60)}px;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const HightLightText = styled(Typography)<TypographyProps & { hightlight?: boolean; textname?: boolean; component?: string; isCompanyName?: boolean }>`
  color: ${({ theme }) => theme.palette.common.black};
  line-height: 1;
  background-color: ${(props) => (props.hightlight ? theme.palette.yellow[100] : 'transparent')};
  font-size: ${(props) => (props.textname ? '14px' : '12px')};

  ${({ isCompanyName, theme }) =>
    isCompanyName &&
    `
    font-weight: ${theme.typography.fontWeightBold};
  `}
`;

export const HightLightTextDivider = styled(Box)`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

export const CompanyItemStyled = styled(Box)`
  cursor: pointer;
`;
