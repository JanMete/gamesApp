import style from './homeSidebar.module.css';
import HomeSidebarFirstSection from '../homeSidebarFiratSection/HomeSidebarFirstSection';
import HomeSidebarBrowseSection from '../homeSidebarBrowseSection/HomeSidebarBrowseSection';

export default function HomeSidebar() {
  return (
    <nav className={style.homeSidebarContainer}>
      <ul className={style.sidebarList}>
        <HomeSidebarFirstSection />
        <HomeSidebarBrowseSection />
      </ul>
    </nav>
  );
}
