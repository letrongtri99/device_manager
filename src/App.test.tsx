import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  it('renders h1', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello Boilerplate!!!')).toBeInTheDocument();
  });
});
