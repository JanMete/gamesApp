import { Link } from 'react-router-dom';
import { firstLinksSection } from '../../constants/homeMenuCategories';
import style from './mobileMenuLinksSection.module.css';

export default function MobileMenuLinksSection() {
  const renderMobileMenuLinksSection = () => {
    return firstLinksSection.map((link) => {
      return (
        <li key={link.path}>
          <Link className={style.mainLink} to={link.path}>
            {link.categoryName}
          </Link>
        </li>
      );
    });
  };
  return <ul>{renderMobileMenuLinksSection()}</ul>;
}
