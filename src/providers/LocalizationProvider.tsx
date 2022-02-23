import React, { useCallback } from 'react';
import { IntlProvider } from 'react-intl';
import English from '@assets/locales/en.json';
import Norwenian from '@assets/locales/no.json';

interface LocalizationProviderProps {
  children: React.ReactNode;
}

const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const locale = navigator.language;

  const getLocale = useCallback(() => {
    if (locale === 'no') {
      return Norwenian;
    }
    return English;
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={getLocale()}>
      {children}
    </IntlProvider>
  );
};

export { LocalizationProvider };
