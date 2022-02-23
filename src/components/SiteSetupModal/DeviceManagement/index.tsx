import React, { useState } from 'react';
import SiteSetupModalDeviceManagementGeneral from './GenaralTab';
import SiteSetupModalPowerManagementDetail from './PowerMangementDetailTab';

const SiteSetupModalDeviceManagement = () => {
  const [isGeneral, setIsGeneral] = useState(true);

  return (
    <>
      <SiteSetupModalDeviceManagementGeneral in={isGeneral} onChangeTabClick={() => setIsGeneral(false)} />
      <SiteSetupModalPowerManagementDetail in={!isGeneral} onChangeTabClick={() => setIsGeneral(true)} />
    </>
  );
};

export default SiteSetupModalDeviceManagement;
