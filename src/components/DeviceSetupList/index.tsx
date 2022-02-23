import AodIcon from '@components/icons/Aod';
import DeviceIcon from '@components/icons/Device';
import PowerIcon from '@components/icons/Power';
import React from 'react';
import DeviceSetupItem from './DeviceSetupItem';
import AcUnitIcon from '@components/icons/AcUnit';
import HorizontalDistributeIcon from '@components/icons/HorizontalDistribute';
import RenewIcon from '@components/icons/Renew';
import IdeaIcon from '@components/icons/Idea';
import FignerIcon from '@components/icons/Finger';

const DeviceSetupList = () => {
  const data = [
    {
      icon: <DeviceIcon />,
      title: 'Device Management',
      subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      buttons: [
        {
          icon: <PowerIcon />,
          label: 'Power',
          active: true,
          onClick: () => {
            console.log('Power clicked');
          }
        },
        {
          icon: <AcUnitIcon />,
          label: 'Winter Mode',
          active: false,
          onClick: () => {
            console.log('Winter Mode clicked');
          }
        },
        {
          icon: <HorizontalDistributeIcon />,
          label: 'Load Distribution',
          active: false,
          onClick: () => {
            console.log('Load Distribution clicked');
          }
        }
      ]
    },
    {
      icon: <AodIcon />,
      title: 'Screen Management',
      subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      buttons: [
        {
          icon: <RenewIcon width="20px" height="20px" color="white" />,
          label: 'Auto Screen Mode',
          active: true,
          onClick: () => {
            console.log('Power clicked');
          }
        },
        {
          icon: <IdeaIcon />,
          label: 'Auto Wake Screen',
          active: true,
          onClick: () => {
            console.log('Auto Wake Screen clicked');
          }
        },
        {
          icon: <FignerIcon />,
          label: 'Tap to Wake Screen',
          active: false,
          onClick: () => {
            console.log('Tap to Wake Screen clicked');
          }
        }
      ]
    }
  ];

  return (
    <>
      {data.map((item, index) => {
        return <DeviceSetupItem key={index} {...item} />;
      })}
    </>
  );
};

export default DeviceSetupList;
