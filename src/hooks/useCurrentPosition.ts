import React, { useState, useEffect } from 'react';
import { MarkerPoint } from '@stores/shared/types';

const defaultPosition: MarkerPoint = {
  lat: 60.3913,
  lng: 5.3221,
};

const useCurrentPosition = () => {
  const [centerPoint, setCenterPoint] = useState<MarkerPoint>(defaultPosition);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenterPoint({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null,
    );
  }, []);

  return centerPoint;
};

export default useCurrentPosition;
