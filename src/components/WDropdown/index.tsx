import { BoxProps, Collapse, Typography } from '@material-ui/core';
import React, { isValidElement, cloneElement, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { WDropdownContainer, WDropdownOptionsContainer, WDropdownValue } from './WDropdown.styled';

export interface WDropdownProps {
  options?: { label: string; value: string | number }[];
  value?: string;
  defaultValue?: string;
  onSelectValue?: (p: string) => void;
  children: ReactNode;
  height?: number;
}

const WDropdown = ({ value, defaultValue, children, onSelectValue, height = 40, ...props }: WDropdownProps & BoxProps) => {
  const wrapperRef = useRef(null);

  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);
  const [componentValue, setComponentValue] = useState(defaultValue);
  const [label, setLabel] = useState<ReactNode>(<></>);

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { onSelectValue, defaultValue: defaultValue || componentValue, setValue: setComponentValue, setLabel: setLabel, setShouldShowDropdown: setShouldShowDropdown });
        }
        return child;
      }),
    [componentValue],
  );

  useEffect(() => {
    value && setComponentValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (wrapperRef.current && !(wrapperRef.current as any)?.contains(evt.target)) {
        setShouldShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <WDropdownContainer ref={wrapperRef} borderRadius={20} {...props}>
      <WDropdownValue className="wdropdown-value-container" display="flex" justifyContent="center" alignItems="center" px={1.2} height={height} onClick={() => setShouldShowDropdown(!shouldShowDropdown)}>
        <Typography variant="h6" className="wdropdown-value">
          {label}
        </Typography>
      </WDropdownValue>
      <Collapse in={shouldShowDropdown}>
        <WDropdownOptionsContainer className="wdropdown-options-container">{childrenWithProps}</WDropdownOptionsContainer>
      </Collapse>
    </WDropdownContainer>
  );
};

export default WDropdown;
