import { render } from '@testing-library/react';
import React from 'react';
import StylesAndThemeProvider from '@providers/StylesAndThemeProvider';
import HelloComponent from './HelloComponent';

describe('HelloComponent', () => {
  const mockedProps = {
    title: 'Hello Test Boilerplate!!!',
  };

  it('should renders correct title', () => {
    const { getByText } = render(
      <StylesAndThemeProvider>
        <HelloComponent {...mockedProps} />
      </StylesAndThemeProvider>,
    );
    expect(getByText('Hello Test Boilerplate!!!')).toBeInTheDocument();
  });
});
