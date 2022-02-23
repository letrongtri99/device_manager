import useHideScrollbar from '@hooks/useHideScrollbar';
import theme from '@styles/theme';
import React, { useState } from 'react';
import { ContentContainer } from './CardLayoutContent.styled';
import CardLayoutContentContent from './Content';
import CardLayoutContentHeader from './Header';
import { HeaderTab } from './Header/Tab';

interface CardLayoutContentProps {
  header?: {
    title: string;
    subContent?: React.ReactNode;
  };
  cardLayoutContent: string;
}

const CardLayoutContent = ({
  header,
  cardLayoutContent
}: CardLayoutContentProps) => {
  useHideScrollbar({
    container: 'content-container',
    removeCSS: 'show-scrollbar'
  });
  const [currentTab, setCurrentTab] = useState(HeaderTab.Site);
  const getCurrentTab = (value: HeaderTab) => {
    setCurrentTab(value);
  };

  return (
    <ContentContainer
      id="content-container"
      overflow="auto"
      borderRadius={4}
      flexGrow={1}
      bgcolor={theme.palette.common.white}
    >
      <CardLayoutContentHeader
        cardLayoutContent={cardLayoutContent}
        title={header ? header?.title : ''}
        getCurrentTab={getCurrentTab}
      />
      <CardLayoutContentContent
        cardLayoutContent={cardLayoutContent}
        currentTab={currentTab}
      />
    </ContentContainer>
  );
};

export default CardLayoutContent;
