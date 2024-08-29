import { Link } from 'react-router-dom';
import style from './homeSidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  browseLinksSection,
  firstLinksSection,
} from '../../constants/homeMenuCategories';
import { CategoryTypes } from '../../types/categoryTyprs';

export default function HomeSidebar() {
  const displayFirstLinksSection = (): JSX.Element[] => {
    return firstLinksSection.map((category) => (
      <li key={category.categoryName}>
        <Link to={category.path} className={style.sidebarListItemLink}>
          {category.categoryName}
        </Link>
      </li>
    ));
  };

  const displayBrowseLinksSection = (): JSX.Element[] => {
    return browseLinksSection.map((link) => (
      <li key={link.categoryName}>
        <Link to={link.path} className={style.sidebarListItemLink}>
          {link.categoryName}
        </Link>
        <ul className={style.subList}>{displayBrowseSubCategories(link)}</ul>
      </li>
    ));
  };

  const displayBrowseSubCategories = (link: CategoryTypes): JSX.Element[] => {
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

  return (
    <nav className={style.homeSidebarContainer}>
      <ul className={style.sidebarList}>
        {displayFirstLinksSection()}
        {displayBrowseLinksSection()}
      </ul>
    </nav>
  );
}
