import { Link } from 'react-router-dom';
import style from './header.module.css';
import MobileNavigationMenu from '../mobileNavigationMenu/MobileNavigationMenu';

type HeaderProps = {
  isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
  return (
    <header className={style.appHeader}>
      <div>
        <Link to='/'>
          <h1 className={style.appName}>Games App</h1>
        </Link>
      </div>
      <div className={style.headerInputContainer}>
        <input
          className={style.headerInput}
          type='text'
          placeholder='Search 871,444 games'
        />
      </div>
      {isMobile && <MobileNavigationMenu />}
    </header>
  );
}
