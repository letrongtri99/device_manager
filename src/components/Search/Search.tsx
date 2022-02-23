import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { BottomInput, ContainerSearch, ContainerSearchList, SearchIcon, SearchInput } from './Search.styled';

interface Suggestion {
  id: number;
  name: string;
  phone: number;
}

interface Props {
  listSuggests?: Suggestion[];
  value: string;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  kind?: string;
  fetching?: boolean;
}

const Search = ({ listSuggests, value, changeInput, clearInput, handleKeyDown, children, kind, fetching }: Props) => {
  const intl = useIntl();

  return (
    <ContainerSearchList value={value} kind={kind}>
      <ContainerSearch kind={kind}>
        <Box mr={1}>
          <SearchIcon src={kind === 'employee' ? '/employee/person_add.svg' : '/company/search.svg'} kind={kind} value={value} />
        </Box>
        <SearchInput
          type="text"
          value={value}
          onChange={changeInput}
          onKeyDown={handleKeyDown}
          placeholder={intl.formatMessage({
            id: kind === 'employee' ? 'search_employee_input_placeholder' : 'search_company_input_placeholder',
            defaultMessage: 'Find your company by entering company name or organisation number',
          })}
        />
        {fetching ? <CircularProgress size={20} /> : value && <SearchIcon src="/company/cancel.svg" onClick={clearInput} value={value} />}
      </ContainerSearch>
      {listSuggests && listSuggests.length > 0 && value && <BottomInput />}
      {children}
    </ContainerSearchList>
  );
};

export default Search;
