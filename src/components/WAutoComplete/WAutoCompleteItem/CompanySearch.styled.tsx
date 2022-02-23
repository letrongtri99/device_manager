import styled from '@emotion/styled';

interface Props {
  highlight?: boolean;
  currentChoose?: boolean;
}

export const CompanySearchOptionItem = styled.div<Props>`
  padding: ${({ theme }) => `${theme.spacing(1.25)}px ${theme.spacing(0)}px ${theme.spacing(1.25)}px ${theme.spacing(1.875)}px`};
  text-align: left;
  background-color: ${({ currentChoose, theme }) => currentChoose && theme.palette.gray[300]};
  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[300]};
    cursor: pointer;
  }
`;

export const CompanySearchOptionItemTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const CompanySearchOptionItemHighlight = styled.span<Props>`
  background-color: ${({ highlight, theme }) => highlight && theme.palette.yellow[100]};
`;
