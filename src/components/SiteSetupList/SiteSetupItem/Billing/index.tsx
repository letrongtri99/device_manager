import { Box, Grid, Typography, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPersonIcon from '@components/icons/AddPerson';
import { siteActions } from '@stores/slices/site';
import {
  AlertTitle,
  RemoveClientButton,
  SiteSetupBillingAddBtn,
  ContainerSearchBillingAdmin
} from './SiteSetupItemBilling.styled';
import { WattAppState } from '@stores/index';
import SiteSetupItemAccessAvatar from '../Access/Shared/SiteSetupItemAccessAvatar';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import AlertDialog from '@components/AlertDialog';
import useDebounce from '@hooks/useDebounce';
import WAutoComplete from '@components/WAutoComplete';
import WAutoCompleteItemSiteAccess from '@components/WAutoComplete/WAutoCompleteItem/SiteAccess';

const SiteSetupItemBilling = () => {
  const dispatch = useDispatch();
  const [showDialog, setShowDiaglog] = useState<boolean>(false);
  const [shouldShowSearchBar, setShouldShowSearchBar] = useState<boolean>(
    false
  );
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearch = useDebounce(searchValue, 300);

  const { items: clientsData } = useSelector(
    (state: WattAppState) => state.site.clients
  );

  const { item: siteData } = useSelector(
    (state: WattAppState) => state.site.detail
  );

  const { item: billingPlan } = useSelector(
    (state: WattAppState) => state.site.billingplan
  );

  const { status: statusBillingPlan } = useSelector(
    (state: WattAppState) => state.site.billingplan
  );

  const { status: statusDeleteBillingAdministrator } = useSelector(
    (state: WattAppState) => state.site.deleteBillingAdministrator
  );

  const removeClient = () => {
    dispatch(
      siteActions.deleteBillingAdministratorRequest({ id: siteData?.id! })
    );
    setShowDiaglog(!showDialog);
  };

  const handleOpenCloseDialog = () => {
    setShowDiaglog(!showDialog);
  };

  const onAddClientToSite = (clientId: number) => {
    siteData?.id &&
      dispatch(
        siteActions.addBillingAdministratorRequest({
          id: siteData.id,
          clientId
        })
      );
    setShouldShowSearchBar(false);
  };

  useEffect(() => {
    dispatch(
      siteActions.getSiteClientsRequest({
        SearchTerm: debounceSearch,
        ClientType: 'Person'
      })
    );
  }, [debounceSearch]);

  useEffect(() => {
    dispatch(siteActions.getBillingPlanRequest({ id: siteData?.id! }));
  }, [siteData]);

  useEffect(() => {
    if (statusDeleteBillingAdministrator === RequestStatus.Success) {
      dispatch(siteActions.getBillingPlanRequest({ id: siteData?.id! }));
    }
  }, [statusDeleteBillingAdministrator]);

  return (
    <Grid container>
      <AlertDialog
        open={showDialog}
        onClose={handleOpenCloseDialog}
        onCancel={handleOpenCloseDialog}
        onConfirm={removeClient}
        title="Confirm"
        content="Are you sure want to remove this billing administrator ?"
      />
      <ContainerSearchBillingAdmin
        xs={6}
        shouldShowSearchBar={shouldShowSearchBar}
      >
        <Box mb={2}>
          <Typography>
            Billing Administrator <AlertTitle> (only 1 company)</AlertTitle>
          </Typography>
        </Box>
        {statusBillingPlan === RequestStatus.Loading ? (
          <CircularProgress size={25} />
        ) : billingPlan?.billingAdmin ? (
          <Box flexDirection="row" display="flex">
            <Box>
              <SiteSetupItemAccessAvatar
                src={billingPlan?.billingAdmin.imageUrl}
                name={billingPlan?.billingAdmin.name}
              />
            </Box>
            <Box>
              <RemoveClientButton
                onClick={handleOpenCloseDialog}
                src="/site/remove_client.svg"
              />
            </Box>
          </Box>
        ) : (
          <div>
            {shouldShowSearchBar ? (
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
                        <WAutoCompleteItemSiteAccess
                          onAddClick={() => onAddClientToSite(item.id)}
                          inputValue=""
                          name={item.name}
                          avatar={item.imageUrl}
                        />
                      </Box>
                    ))}
                  </Box>
                }
                renderOption={(option, inputValue) => (
                  <WAutoCompleteItemSiteAccess
                    onAddClick={() => onAddClientToSite(option.id)}
                    inputValue={inputValue}
                    name={option.name}
                    avatar={option.imageUrl}
                  />
                )}
                filterOption={(options, inputvalue) =>
                  options.filter((item) =>
                    item.name.toLowerCase().includes(inputvalue.toLowerCase())
                  )
                }
              />
            ) : (
              <SiteSetupBillingAddBtn
                variant="contained"
                onClick={() => setShouldShowSearchBar(true)}
              >
                <AddPersonIcon />
              </SiteSetupBillingAddBtn>
            )}
          </div>
        )}
      </ContainerSearchBillingAdmin>
      <Grid xs={6}>
        <Box mb={2}>
          <Typography>
            Payment Recipient <AlertTitle> (only 1 company)</AlertTitle>
          </Typography>
        </Box>
        <SiteSetupBillingAddBtn variant="contained">
          <AddPersonIcon />
        </SiteSetupBillingAddBtn>
      </Grid>
    </Grid>
  );
};

export default SiteSetupItemBilling;
