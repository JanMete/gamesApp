import { Outlet } from 'react-router-dom';
import HomeSidebar from '../../components/homeSidebar/HomeSidebar';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 862);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 862px)');

    const handleMediaQueryChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <Header isMobile={isMobile} />
      <FlexContainer>
        {!isMobile && <HomeSidebar />}
        <Outlet />
      </FlexContainer>
    </div>
  );
}
