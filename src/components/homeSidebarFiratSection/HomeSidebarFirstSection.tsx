import { Link } from 'react-router-dom';
import { firstLinksSection } from '../../constants/homeMenuCategories';
import style from './HomeSidebarFirstSection.module.css';

export default function HomeSidebarFirstSection() {
  const displayFirstLinksSection = () => {
    return firstLinksSection.map((category) => (
      <li key={category.categoryName}>
        <Link to={category.path} className={style.sidebarListItemLink}>
          {category.categoryName}
        </Link>
      </li>
    ));
  };
  return <>{displayFirstLinksSection()}</>;
}
