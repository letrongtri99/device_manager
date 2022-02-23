import React from 'react';

interface BlankLayoutProps {
  children?: React.ReactNode;
}

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return <>{children}</>;
};

export default BlankLayout;
