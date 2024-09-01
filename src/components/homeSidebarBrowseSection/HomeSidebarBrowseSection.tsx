import { Link } from 'react-router-dom';
import { browseLinksSection } from '../../constants/homeMenuCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryTypes } from '../../types/categoryTypes';
import style from './HomeSidebarBrowseSection.module.css';

export default function HomeSidebarBrowseSection() {
  const displayBrowseLinksSection = () => {
    return browseLinksSection.map((link) => (
      <li key={link.categoryName}>
        <Link to={link.path} className={style.sidebarListItemLink}>
          {link.categoryName}
        </Link>
        <ul className={style.subList}>{displayBrowseSubCategories(link)}</ul>
      </li>
    ));
  };

  const displayBrowseSubCategories = (link: CategoryTypes) => {
    return link.children.map((subCategory) => (
      <li key={subCategory.path}>
        <Link className={style.sidebarSubLink} to={subCategory.path}>
          <div className={style.sidebarSubLinkIconContainer}>
            <FontAwesomeIcon
              className={style.sidebarSubLinkIcon}
              icon={subCategory.icon}
            />
          </div>
          {subCategory.subcategoryName}
        </Link>
      </li>
    ));
  };
  return <>{displayBrowseLinksSection()}</>;
}
