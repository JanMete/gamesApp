import style from './MobileNavigationExpMenu.module.css';
import MobileMenuLinksSection from '../mobileMenuLinksSection/MobileMenuLinksSection';
import MobileLinksSection from '../mobileMenuIconLinksSection/MobileLinksSection';
import MobileMenuBrowseSection from '../mobileMenuBrowseSection/MobileMenuBrowseSection';

type MobileNavigationExpMenuProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavigationExpMenu({
  setIsMobileMenuOpen,
}: MobileNavigationExpMenuProps) {
  return (
    <nav className={style.mainContainer}>
      <div className={style.menuFirstSectionAndIcons}>
        <MobileMenuLinksSection />
        <MobileLinksSection setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
      <MobileMenuBrowseSection />
    </nav>
  );
}
