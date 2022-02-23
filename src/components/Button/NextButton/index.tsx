import React from 'react';
import { SubmitButton, SubmitButtonDivider } from './NextButton.styled';

interface Props {
  isDisabled: boolean;
}

const NextButton = ({ isDisabled }: Props) => {
  return (
    <SubmitButton submit disabled={!isDisabled} type="submit">
      Next
      {isDisabled && <SubmitButtonDivider />}
    </SubmitButton>
  );
};

export default NextButton;
