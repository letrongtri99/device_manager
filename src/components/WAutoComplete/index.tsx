import CloseOutlineIcon from '@components/icons/CloseOutline';
import SearchIcon from '@components/icons/Search';
import useDebounce from '@hooks/useDebounce';
import { Box, BoxProps, CircularProgress, InputAdornment, TextField, Typography } from '@material-ui/core';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { WAutoCompleteContainer, WAutoCompleteInputContainer, WAutoCompleteOptionsContainer, WAutoCompleteClearButton } from './WAutoComplete.styled';

interface WAutoCompleteProps<T> {
  numberOfOption?: number;
  loading?: boolean;
  options: T[];
  renderOption: (option: T, inputValue: string) => ReactNode;
  filterOption: (options: T[], inputValue: string) => T[];
  emptyComponent?: ReactNode;
  placeholder?: string;
  className?: string;
  startComponent?: ReactNode;
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
  inputStartIcon?: ReactNode;
  onSelectOption?: (option: T) => void;
  onInputChange?: (text: string) => void;
  onClose?: () => void;
}

const WAutoComplete = <T extends unknown>({
  options = [],
  onClose,
  loading,
  onInputChange,
  numberOfOption = 50,
  renderOption,
  filterOption,
  placeholder,
  emptyComponent,
  startComponent,
  onSelectOption,
  headerComponent,
  footerComponent,
  inputStartIcon = <SearchIcon />,
  ...props
}: WAutoCompleteProps<T> & BoxProps) => {
  const [isFocus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [shouldRenderDropdown, setShouldRenderDropdown] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<T[]>(options);

  const debouncedInput = useDebounce(inputValue, 300);

  const wrapperRef = useRef(null);

  useEffect(() => {
    onInputChange?.(debouncedInput);
  }, [debouncedInput]);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (wrapperRef.current && !(wrapperRef.current as any)?.contains(evt.target)) {
        setShouldRenderDropdown(false);
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    setCurrentOptions(options);
  }, [options]);

  useEffect(() => {
    if (!debouncedInput) {
      setCurrentOptions(options);
      return;
    }
    const data = filterOption?.(options, debouncedInput);
    setCurrentOptions(data);
  }, [debouncedInput, options]);

  return (
    <WAutoCompleteContainer {...props} ref={wrapperRef} isFocus={isFocus || shouldRenderDropdown}>
      <WAutoCompleteInputContainer px={2}>
        <TextField
          placeholder={placeholder}
          value={inputValue}
          fullWidth
          autoFocus
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          InputProps={{
            disableUnderline: true,
            startAdornment: <InputAdornment position="start">{inputStartIcon}</InputAdornment>,
            endAdornment: !!shouldRenderDropdown && (
              <InputAdornment position="end">
                {loading
                  ? (
                  <CircularProgress size={20} />
                    )
                  : (
                  <WAutoCompleteClearButton onClick={() => setInputValue('')}>
                    <CloseOutlineIcon />
                  </WAutoCompleteClearButton>
                    )}
              </InputAdornment>
            ),
          }}
          onFocus={() => {
            setFocus(true);
            setShouldRenderDropdown(true);
          }}
          onBlur={() => setFocus(false)}
        />
      </WAutoCompleteInputContainer>
      {shouldRenderDropdown && (
        <WAutoCompleteOptionsContainer pb={2} px={2}>
          {!!startComponent && !inputValue
            ? (
                startComponent
              )
            : currentOptions?.length
              ? (
            <>
              {!!headerComponent && <Box mt={2}>{headerComponent}</Box>}
              {currentOptions?.slice(0, numberOfOption).map((item, index) => (
                <Box
                  mt={2}
                  key={index}
                  onClick={() => {
                    onSelectOption?.(item);
                  }}
                >
                  {renderOption(item, debouncedInput)}
                </Box>
              ))}
              {!!footerComponent && <Box mt={2}>{footerComponent}</Box>}
            </>
                )
              : (
            <Box py={3}>
              {emptyComponent || (
                <Typography align="center" variant="h6">
                  No Option
                </Typography>
              )}
            </Box>
                )}
        </WAutoCompleteOptionsContainer>
      )}
    </WAutoCompleteContainer>
  );
};

export default WAutoComplete;
