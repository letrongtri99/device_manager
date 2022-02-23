import styled from '@emotion/styled';
import { Typography, TypographyProps } from '@material-ui/core';
import theme from '@styles/theme';

export const HightLightText = styled(Typography)<TypographyProps & { hightlight?: boolean; textname?: boolean; component?: string }>`
  color: ${({ theme }) => theme.palette.common.black};
  line-height: 1;
  background-color: ${(props) => (props.hightlight ? theme.palette.yellow[100] : 'transparent')};
  font-size: ${(props) => (props.textname ? '14px' : '12px')};
`;
