import AddPersonIcon from '@components/icons/AddPerson';
import { WattAppState } from '@stores/index';
import { siteActions } from '@stores/slices/site';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SiteSetupItemAccessAvatar from './Shared/SiteSetupItemAccessAvatar';
import { SiteSetupModalAvatarManagerList, UserManagermentAddBtn } from './SiteSetupItemAccess.styled';

const SiteSetupItemAccess = () => {
  const dispatch = useDispatch();

  const { items: siteAccessesData } = useSelector((state: WattAppState) => state.site.accesses);
  const { item: siteData } = useSelector((state: WattAppState) => state.site.detail);

  useEffect(() => {
    siteData?.id && dispatch(siteActions.getSiteAccessesListRequest({ id: siteData?.id }));
  }, []);

  return (
    <SiteSetupModalAvatarManagerList>
      <UserManagermentAddBtn variant="contained">
        <AddPersonIcon />
      </UserManagermentAddBtn>
      {siteAccessesData.map((item, index) => (
        <SiteSetupItemAccessAvatar key={index} src={item.client.imageUrl} name={item.client.name} />
      ))}
    </SiteSetupModalAvatarManagerList>
  );
};

export default SiteSetupItemAccess;
