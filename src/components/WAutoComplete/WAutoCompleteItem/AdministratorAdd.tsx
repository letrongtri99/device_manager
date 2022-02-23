import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import { HightLightText } from './AdministratorAdd.styled';
import theme from '@styles/theme';
import { useIntl } from 'react-intl';
import AddIcon from '@components/icons/Add';
import WButton from '@components/Controls/WButton';

export interface WAutoCompleteItemAdministratorAddProps {
  data: { [name: string]: { text: string; highlight: boolean }[] };
}

function WAutoCompleteItemAdministratorAdd({ data }: WAutoCompleteItemAdministratorAddProps) {
  const intl = useIntl();

  return (
    <Box display="flex" alignItems="center" py={1} justifyContent="space-between" width="100%">
      <Avatar style={{ width: theme.spacing(6), height: theme.spacing(6) }} src="https://source.unsplash.com/random" />
      <Box flexGrow={1}>
        <Box mr={2} ml={3}>
          {data.name?.map((part, index) => (
            <HightLightText hightlight={part.highlight} textname variant="h5" component="span" key={index}>
              {part.text}
            </HightLightText>
          ))}
          <Typography />
          {data.companyName?.map((part, index) => (
            <>
              <HightLightText component="span">CompanyName: </HightLightText>
              <HightLightText hightlight={part.highlight} variant="caption" component="span" key={index}>
                {part.text}
              </HightLightText>
            </>
          ))}
          {data.phoneNumber?.map((part, index) => (
            <HightLightText hightlight={part.highlight} variant="caption" component="span" key={index}>
              {part.text}
            </HightLightText>
          ))}
          {data.email?.map((part, index) => (
            <HightLightText hightlight={part.highlight} variant="caption" component="span" key={index}>
              {part.text}
            </HightLightText>
          ))}
        </Box>
      </Box>
      <WButton>
        <Box display="flex" flexDirection="column" alignItems="center">
          <AddIcon width={15} height={15} />
          <Typography variant="body2">
            {intl.formatMessage({
              id: 'add',
              defaultMessage: 'Add',
            })}
          </Typography>
        </Box>
      </WButton>
    </Box>
  );
}

export default WAutoCompleteItemAdministratorAdd;
