import React, { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { MarkerPoint } from '@stores/shared/types';
import { WattAppState } from '@stores/index';
import { useLoadScript, GoogleMap, Marker, DrawingManager, Polygon } from '@react-google-maps/api';
import Search from '@components/Map/MapSearch';
import useCurrentPosition from '@hooks/useCurrentPosition';
import { useIntl } from 'react-intl';
import { ButtonConfig, ButtonDraw, Loading, PopUp, PopUpClose, PopUpDraw, PopUpTitle } from './MapLayout.styled';

interface Props {
  onChangeCoordinates?: (value: MarkerPoint[]) => void;
  handleInvalidCreate?: () => void;
  isSiteItem?: boolean | undefined;
}

const googleMapOptions = {
  disableDefaultUI: true,
  zoomControl: false,
  draggableCursor: 'grab',
};

const drawingOptions = {
  drawingControl: false,
  polygonOptions: {
    fillColor: 'rgba(180, 190, 202, 0.29)',
    strokeColor: 'rgb(180, 190, 202)',
    fillOpacity: 1,
    strokeWeight: 3,
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 2,
  },
};

const MapLayout = ({ handleInvalidCreate, onChangeCoordinates, isSiteItem }: Props) => {
  const intl = useIntl();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.SNOWPACK_PUBLIC_MAP_API_KEY!,
    libraries: ['places', 'geometry', 'drawing'],
  });
  const { item: siteDetail } = useSelector((state: WattAppState) => state.site.detail);
  const centerPoint = isSiteItem ? siteDetail?.coordinates[0] : useCurrentPosition();

  const mapContainerStyle = {
    width: '100%',
    height: isSiteItem ? '25vh' : '60vh',
  };

  const mapRef = useRef<google.maps.Map>();
  const polygonRef = useRef<google.maps.Polygon>();
  const [markers, setMarkers] = useState<MarkerPoint>();
  const [coordinatePolygon, setCoordinatePolygon] = useState<MarkerPoint[]>();
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(true);
  const [isRedo, setIsRedo] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(isSiteItem ? 18 : 14);

  const onMapClick = useCallback((e) => {
    setMarkers({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onJumpTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      setMarkers({ lat, lng });
      mapRef.current.setZoom(18);
    }
  }, []);

  const onDrawPolygon = () => {
    setIsDrawing(true);
    setIsShowPopUp(false);
    setIsRedo(false);
  };

  const onZoomMap = (checkZoom = true) => () => {
    if (checkZoom) {
      setZoom(zoom + 1);
    } else {
      setZoom(zoom - 1);
    }
  };

  const onPolygonComplete = (polygon: google.maps.Polygon) => {
    const polygonBounds = polygon.getPath().getArray();
    polygonRef.current = polygon;
    const bounds = [];
    for (let i = 0; i < polygonBounds.length; i++) {
      bounds.push({
        lat: polygonBounds[i].lat(),
        lng: polygonBounds[i].lng(),
      });
    }
    setCoordinatePolygon(bounds);
    bounds.push(bounds[0]);
    onChangeCoordinates?.(bounds);
    polygonRef.current?.setMap(null);

    setIsDrawing(false);
    setIsRedo(true);
    handleInvalidCreate?.();
  };

  const onDragEnd = () => {
    const polygonBounds = polygonRef.current?.getPath().getArray();
    const bounds = [];
    for (let i = 0; i < polygonBounds!.length; i++) {
      bounds.push({
        lat: polygonBounds ? polygonBounds[i]?.lat() : 60.3913,
        lng: polygonBounds ? polygonBounds[i]?.lng() : 5.3221,
      });
    }
    setCoordinatePolygon(bounds);
    onChangeCoordinates?.(bounds);
  };

  const loadPolygon = (polygon: google.maps.Polygon) => {
    polygonRef.current = polygon;
  };

  const onClosePopUp = () => {
    setIsShowPopUp(false);
  };

  const undo = () => {
    setIsRedo(false);
    polygonRef.current?.setMap(null);
  };

  const redo = () => {
    setIsRedo(true);
  };

  if (loadError) return <div>Error loading images</div>;
  if (!isLoaded) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {!isSiteItem && <Search onJumpTo={onJumpTo} />}

      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={zoom} center={centerPoint} options={googleMapOptions} onClick={onMapClick} onLoad={onMapLoad}>
        {markers && (
          <Marker
            key={`${markers.lat}-${markers.lng}`}
            position={{ lat: markers.lat, lng: markers.lng }}
            icon={{
              url: 'https://www.clubphysical.co.nz/wp-content/uploads/2016/11/google-maps-hi.png',
              scaledSize: new google.maps.Size(20, 35),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(15, 15),
            }}
            clickable={false}
          />
        )}

        <DrawingManager drawingMode={isDrawing ? google.maps.drawing.OverlayType.POLYGON : null} onPolygonComplete={onPolygonComplete} options={drawingOptions} />
        {isSiteItem && (
          <Polygon
            path={siteDetail?.coordinates}
            options={{
              fillColor: 'rgba(180, 190, 202, 0.29)',
              strokeColor: 'rgb(180, 190, 202)',
              fillOpacity: 1,
              strokeWeight: 3,
            }}
          />
        )}

        {isRedo && (
          <Polygon
            path={coordinatePolygon}
            options={{
              fillColor: 'rgba(180, 190, 202, 0.29)',
              strokeColor: 'rgb(180, 190, 202)',
              fillOpacity: 1,
              strokeWeight: 3,
            }}
            editable={false}
            draggable={true}
            onDragEnd={onDragEnd}
            onLoad={loadPolygon}
          />
        )}

        {isShowPopUp && !isSiteItem && (
          <PopUp>
            <PopUpDraw src="/map/draw_light.svg" />
            <PopUpTitle>
              {intl.formatMessage({
                id: 'map_recommend',
                defaultMessage: 'Drop a dot to start creating line',
              })}
            </PopUpTitle>
            <PopUpClose onClick={onClosePopUp} src="/map/close.svg" />
          </PopUp>
        )}

        {!isSiteItem && (
          <div>
            <ButtonDraw size="small" kind="undo" onClick={undo}>
              <img src="/map/undo.svg" />
            </ButtonDraw>
            <ButtonDraw size="small" onClick={redo}>
              <img src="/map/redo.svg" />
            </ButtonDraw>
            <ButtonConfig size="small" onClick={onDrawPolygon}>
              <img src="/map/draw.svg" />
            </ButtonConfig>
            <ButtonConfig size="small" kind="zoom_in" onClick={onZoomMap()}>
              <img src="/map/zoom_in.svg" />
            </ButtonConfig>
            <ButtonConfig size="small" kind="zoom_out" onClick={onZoomMap(false)}>
              <img src="/map/zoom_out.svg" />
            </ButtonConfig>
          </div>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapLayout;
