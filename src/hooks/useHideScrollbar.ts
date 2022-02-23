import { useEffect } from 'react';

const useHideScrollbar = ({
  container,
  removeCSS,
}: {
  container: string;
  removeCSS: string;
}) => {
  useEffect(() => {
    const content = document.getElementById(container);

    const handleScroll = () => {
      const top = content?.scrollTop;

      if (top) {
        content?.classList.add(removeCSS);
      } else {
        content?.classList.remove(removeCSS);
      }
    };

    content?.addEventListener('scroll', handleScroll);

    return () => content?.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useHideScrollbar;
