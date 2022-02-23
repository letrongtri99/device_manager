import React from 'react';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import { CompanySearchOptionItem, CompanySearchOptionItemHighlight, CompanySearchOptionItemTitle } from './CompanySearch.styled';

interface WAutoCompleteItemCompanySearchProps {
  inputValue: string;
  name: string;
  phone: number;
}

const WAutoCompleteItemCompanySearch = ({ inputValue, name, phone }: WAutoCompleteItemCompanySearchProps) => {
  const matches = AutosuggestHighlightMatch(name, inputValue);
  const parts = AutosuggestHighlightParse(name, matches);
  return (
    <CompanySearchOptionItem>
      <CompanySearchOptionItemTitle>
        {parts.map((part, index) => {
          const highlight = !!part.highlight;
          return (
            <CompanySearchOptionItemHighlight highlight={highlight} key={index}>
              {part.text}
            </CompanySearchOptionItemHighlight>
          );
        })}
      </CompanySearchOptionItemTitle>
      <div>{phone}</div>
    </CompanySearchOptionItem>
  );
};

export default WAutoCompleteItemCompanySearch;
