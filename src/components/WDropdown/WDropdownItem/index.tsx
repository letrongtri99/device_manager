import React, { ReactNode, useEffect } from 'react';
import { WDropdownItemContainer } from './WDropdownItem.styled';

interface WDropdownItemProps {
  defaultValue?: string;
  setLabel?: (p: ReactNode) => void;
  setValue?: (p: string) => void;
  setShouldShowDropdown?: (p: boolean) => void;
  onSelectValue?: (p: string) => void;
  value: string;
  children: ReactNode;
}

export const WDropdownItem = ({ value, children, ...props }: Pick<WDropdownItemProps, 'children' | 'value'>) => {
  const restProps: Omit<WDropdownItemProps, 'children' | 'value'> = props;

  useEffect(() => {
    if (restProps.defaultValue === value) {
      restProps.setLabel?.(children);
    }
  }, [restProps.defaultValue]);

  return (
    <WDropdownItemContainer
      px={1.5}
      py={1.4}
      className="wdropdown-options-item"
      onClick={() => {
        restProps.setValue?.(value);
        restProps.onSelectValue?.(value);
        restProps.setLabel?.(children);
        restProps.setShouldShowDropdown?.(false);
      }}
    >
      {children}
    </WDropdownItemContainer>
  );
};

export default WDropdownItem;
