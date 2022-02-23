import React, { useState, useEffect, useCallback } from 'react';
import MapLayout from '../MapLayout';
import { useSelector, useDispatch } from 'react-redux';
import { siteActions } from '@stores/slices/site';
import { useIntl } from 'react-intl';
import { WattAppState } from '@stores/index';
import { MarkerPoint } from '@stores/shared/types';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import CloseIcon from '@assets/vectors/close.svg';
import {
  Title,
  TitleRow,
  SiteContainer,
  SiteDescription,
  Close,
  SiteActionButton
} from './MapContainer.styled';

interface Props {
  handleOpenCloseSiteCreate: () => void;
}

const MapContainer = ({ handleOpenCloseSiteCreate }: Props) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const address = useSelector((state: WattAppState) => state.site.address);
  const [isInvalidCreate, setIsInvalidCreate] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<MarkerPoint[]>([]);
  const siteStatus = useSelector(
    (state: WattAppState) => state.site.create.status
  );

  useEffect(() => {
    if (siteStatus === RequestStatus.Success) {
      dispatch(siteActions.setSiteStatus(RequestStatus.Failed));
      dispatch(siteActions.setSiteAddress(''));
      setTimeout(() => {
        handleOpenCloseSiteCreate();
      }, 1000);
    }
    handleInvalidCreate();
  }, [siteStatus, address]);

  const handleInvalidCreate = () => {
    if (address) setIsInvalidCreate(false);
    else setIsInvalidCreate(true);
  };

  const onChangeCoordinates = (value: MarkerPoint[]) => {
    setCoordinates(value);
  };

  const handleCreateSite = () => {
    const siteParams = {
      name: address!,
      description: address!,
      location: address!,
      coordinates: coordinates
    };

    dispatch(siteActions.createSiteRequest(siteParams));
  };

  return (
    <SiteContainer>
      <TitleRow>
        <Title>
          {intl.formatMessage({ id: 'new_site', defaultMessage: 'New site' })}
        </Title>
        <Close onClick={handleOpenCloseSiteCreate}>
          <CloseIcon />
        </Close>
      </TitleRow>

      <SiteDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dapibus
        leo. Suspendisse neque sem, posuere quis cursus ac, ultrices sed nibh.
      </SiteDescription>
      <MapLayout
        handleInvalidCreate={handleInvalidCreate}
        onChangeCoordinates={onChangeCoordinates}
      />
      <TitleRow>
        <SiteActionButton onClick={handleOpenCloseSiteCreate}>
          {intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
        </SiteActionButton>
        <SiteActionButton disabled={isInvalidCreate} onClick={handleCreateSite}>
          {intl.formatMessage({
            id: 'create_site',
            defaultMessage: 'Create site'
          })}
        </SiteActionButton>
      </TitleRow>
    </SiteContainer>
  );
};

export default MapContainer;
