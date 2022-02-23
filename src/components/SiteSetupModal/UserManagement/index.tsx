import AccountIcon from '@components/icons/Account';
import AddPersonIcon from '@components/icons/AddPerson';
import { Box, Slide, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { SiteSetupModalAvatarManagerList, UserManagermentAddBtn } from './UserManagement.styled';
import { SiteSetupModalHeaderSubtitle } from '../Shared/SiteSetupModalHeader.styled';
import SiteSetupModalUserManagermentCompanyDetail from './CompanyDetail';
import SiteSetupModalHeader from '../Shared/SiteSetupModalHeader';
import SiteSetupModalAvatar from '../Shared/SiteSetupModalAvatar';
import LockIcon from '@components/icons/Lock';
import WButton from '@components/Controls/WButton';
import WAutoComplete from '@components/WAutoComplete';
import WAutoCompleteItemSiteAccess from '@components/WAutoComplete/WAutoCompleteItem/SiteAccess';
import { useDispatch, useSelector } from 'react-redux';
import { siteActions } from '@stores/slices/site';
import { WattAppState } from '@stores/index';
import useDebounce from '@hooks/useDebounce';

const SiteSetupModalUserManagerment = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shouldShowSearchBar, setShouldShowSearchBar] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearch = useDebounce(searchValue, 300);

  const { items: siteAccessesData } = useSelector((state: WattAppState) => state.site.accesses);
  const { item: siteData } = useSelector((state: WattAppState) => state.site.detail);
  const { items: clientsData } = useSelector((state: WattAppState) => state.site.clients);

  useEffect(() => {
    siteData?.id && dispatch(siteActions.getSiteAccessesListRequest({ id: siteData?.id }));
  }, []);

  useEffect(() => {
    dispatch(siteActions.getSiteClientsRequest({ SearchTerm: debounceSearch }));
  }, [debounceSearch]);

  const onAddClientToSite = (clientId: number) => {
    siteData?.id && dispatch(siteActions.addSiteClientRequest({ id: siteData.id, clientId }));
  };

  return (
    <Box>
      <Box mb={3}>
        <SiteSetupModalHeader
          icon={<AccountIcon />}
          title={intl.formatMessage({
            id: 'dashboard_home_site_detail_item_title_user_management',
            defaultMessage: 'User Management',
          })}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
      </Box>
      <Box mb={3}>
        <WButton disabled startIcon={<LockIcon />} variant="outlined">
          Restricted access
        </WButton>
      </Box>
      <Box mb={3}>
        <Box mb={1}>
          <Typography variant="subtitle2">Special access rights</Typography>
        </Box>
        <SiteSetupModalHeaderSubtitle variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SiteSetupModalHeaderSubtitle>
      </Box>
      {shouldShowSearchBar
        ? (
        <WAutoComplete
          style={{ borderRadius: 20 }}
          onInputChange={(val) => setSearchValue(val)}
          onClose={() => setShouldShowSearchBar(false)}
          options={clientsData}
          startComponent={
            <Box mt={2}>
              <Typography variant="h6">Suggested</Typography>
              {clientsData.slice(0, 3).map((item, index) => (
                <Box mt={2} key={index}>
                  <WAutoCompleteItemSiteAccess onAddClick={() => onAddClientToSite(item.id)} inputValue="" name={item.name} avatar={item.imageUrl} />
                </Box>
              ))}
            </Box>
          }
          renderOption={(option, inputValue) => <WAutoCompleteItemSiteAccess onAddClick={() => onAddClientToSite(option.id)} inputValue={inputValue} name={option.name} avatar={option.imageUrl} />}
          filterOption={(options, inputvalue) => options.filter((item) => item.name.toLowerCase().includes(inputvalue.toLowerCase()))}
        />
          )
        : (
        <Slide in={!isModalOpen} direction="up" unmountOnExit>
          <SiteSetupModalAvatarManagerList>
            <UserManagermentAddBtn onClick={() => setShouldShowSearchBar(true)} variant="contained">
              <AddPersonIcon />
            </UserManagermentAddBtn>
            {siteAccessesData.map((item, index) => (
              <SiteSetupModalAvatar onClick={() => setIsModalOpen(true)} key={index} src={item.client.imageUrl} name={item.client.name} />
            ))}
          </SiteSetupModalAvatarManagerList>
        </Slide>
          )}
      <SiteSetupModalUserManagermentCompanyDetail in={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default SiteSetupModalUserManagerment;
