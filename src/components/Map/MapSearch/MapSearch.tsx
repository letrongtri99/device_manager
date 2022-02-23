import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useDispatch } from 'react-redux';
import { MarkerPoint } from '@stores/shared/types';
import { useIntl } from 'react-intl';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  siteActions
} from '@stores/slices/site';
import {
  InputText,
  OptionList,
  OptionItem,
  InputIconSearch,
  InputIconClear,
  Container,
  OptionPlaceIcon,
  BottomSearch,
  SearchContainer,
} from './MapSearch.styled';

interface Props {
  onJumpTo: ({ lat, lng }: MarkerPoint) => void;
}

const MapSearch = ({ onJumpTo }: Props) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const goToPlace = (address: string) => async () => {
    setValue(address, false);
    dispatch(siteActions.setSiteAddress(address))
    clearSuggestions();
    try {
      const result = await getGeocode({ address });
      const { lat, lng } = await getLatLng(result[0]);
      onJumpTo({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };

  const clearText = () => {
    setValue('', false);
    dispatch(siteActions.setSiteAddress(''))
    clearSuggestions();
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(siteActions.setSiteAddress(e.target.value))
  };

  return (
    <SearchContainer>
      <Container>
        <InputIconSearch value={value} />
        <InputText
          value={value}
          onChange={changeValue}
          placeholder={intl.formatMessage({ id: 'search_for_an_address', defaultMessage: 'Search for an address' })}
        ></InputText>
        {value && <InputIconClear onClick={clearText} />}
      </Container>
      {data.length > 0 && <BottomSearch />}
      <OptionList data={data}>
        {status === 'OK' &&
          data.map(({ place_id, description }) => (
            <Container key={place_id}>
              <OptionPlaceIcon src="/map/option_place.svg" />
              <OptionItem
                highlight={value === description}
                onClick={goToPlace(description)}
              >
                {description}
              </OptionItem>
            </Container>
          ))}
      </OptionList>
    </SearchContainer>
  );
};

export default MapSearch;
