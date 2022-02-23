import styled from '@emotion/styled';
import { Avatar } from '@material-ui/core';

interface Props {
  highlight?: boolean;
  currentChoose?: boolean;
}

export const SiteAccessOptionItem = styled.div<Props>`
  display: flex;
  align-items: center;
  text-align: left;
  background-color: ${({ currentChoose, theme }) => currentChoose && theme.palette.gray[300]};
`;

export const SiteAccessOptionItemAvatar = styled(Avatar)`
  height: ${({ theme }) => theme.spacing(6)}px;
  width: ${({ theme }) => theme.spacing(6)}px;
`;

export const SiteAccessOptionItemTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const SiteAccessOptionItemHighlight = styled.span<Props>`
  background-color: ${({ highlight, theme }) => highlight && theme.palette.yellow[100]};
`;
