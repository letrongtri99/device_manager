import React from 'react';
import { Box } from '@material-ui/core';
import { HightLightText, HightLightTextDivider, CompanyItemStyled } from './CompanySearch.styled';
import uid from 'lodash/uniqueId';

export interface CompanyItemProps {
  data: { [name: string]: { text: string; highlight: boolean }[] };
  onItemClick: () => void;
}

const CompanyItem = ({ data, onItemClick }: CompanyItemProps) => {
  return (
    <CompanyItemStyled onClick={onItemClick}>
      <>
        {data.companyName?.map((part, index) => (
          <HightLightText isCompanyName hightlight={part.highlight} variant="caption" component="span" key={uid()}>
            {part.text}
          </HightLightText>
        ))}
        <HightLightTextDivider />
      </>
      {data.phoneNumber?.map((part, index) => (
        <HightLightText hightlight={part.highlight} variant="caption" component="span" key={uid()}>
          {part.text}
        </HightLightText>
      ))}
    </CompanyItemStyled>
  );
};
export default CompanyItem;
