import WButton from '@components/Controls/WButton';
import PlusIcon from '@components/icons/Plus';
import { Box, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import theme from '@styles/theme';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import React from 'react';
import { useSelector } from 'react-redux';
import { SiteAccessOptionItem, SiteAccessOptionItemAvatar, SiteAccessOptionItemHighlight, SiteAccessOptionItemTitle } from './SiteAccess.styled';

interface WAutoCompleteItemSiteAccessProps {
  onAddClick: () => void;
  inputValue: string;
  name: string;
  avatar?: string;
}

const WAutoCompleteItemSiteAccess = ({ onAddClick, inputValue, name, avatar }: WAutoCompleteItemSiteAccessProps) => {
  const { status } = useSelector((state: WattAppState) => state.site.add);

  const matches = AutosuggestHighlightMatch(name, inputValue);
  const parts = AutosuggestHighlightParse(name, matches);

  return (
    <SiteAccessOptionItem>
      <Box mr={2}>
        <SiteAccessOptionItemAvatar src={avatar} alt={name} />
      </Box>
      <SiteAccessOptionItemTitle>
        {parts.map((part, index) => {
          const highlight = !!part.highlight;
          return (
            <SiteAccessOptionItemHighlight highlight={highlight} key={index}>
              {part.text}
            </SiteAccessOptionItemHighlight>
          );
        })}
      </SiteAccessOptionItemTitle>
      <Box ml="auto">
        <WButton onClick={onAddClick} disabled={status === RequestStatus.Loading}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <PlusIcon color={status === RequestStatus.Loading ? theme.palette.grey[300] : theme.palette.black[100]} />
            <Typography variant="body2">Add</Typography>
          </Box>
        </WButton>
      </Box>
    </SiteAccessOptionItem>
  );
};

export default WAutoCompleteItemSiteAccess;
