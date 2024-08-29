import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './mobileNavigationMenu.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MobileNavigationExpMenu from '../mobileNavigationExpMenu/MobileNavigationExpMenu';

export default function MobileNavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
      <FontAwesomeIcon
        className={style.hamburgerMenuIcon}
        icon={faBars}
        onClick={() => setIsMobileMenuOpen(true)}
      />
      {isMobileMenuOpen && (
        <MobileNavigationExpMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </div>
  );
}
