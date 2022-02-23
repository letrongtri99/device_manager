import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

export const SiteSetupListAccordion = styled(Accordion)`
  box-shadow: none;
  padding: 0;
  border-bottom: 0;
  &::before {
    display: none;
  }
`;

export const SiteSetupListAccordionSummary = styled(AccordionSummary)`
  padding: 0;
  border-bottom: 0;
  align-items: flex-start;

  .MuiAccordionSummary-content {
    margin-bottom: 0;
  }
`;

export const SiteSetupListAccordionDetails = styled(AccordionDetails)`
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(6)}px;
`;
