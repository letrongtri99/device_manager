import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';

export const SiteListContainer = styled(InfiniteScroll)`
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(1)}px;
    background: ${({ theme }) => theme.palette.grey[300]};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.grey[400]};
  }
`;
