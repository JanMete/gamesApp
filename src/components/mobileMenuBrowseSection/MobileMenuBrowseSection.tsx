import { Link } from 'react-router-dom';
import { browseLinksSection } from '../../constants/homeMenuCategories';
import style from './mobileMenuBrowseSection.module.css';

export default function MobileMenuBrowseSection() {
  const renderMobileMenuBrowseSection = () => {
    return browseLinksSection.map((link) => {
      return (
        <ul>
          <li>
            <Link className={style.mainLink} to={link.path}>
              {link.categoryName}
            </Link>
          </li>
          <ul>
            {link.children.map((child) => {
              return (
                <li>
                  <Link className={style.subLink} to={child.path}>
                    {child.subcategoryName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </ul>
      );
    });
  };
  return <div>{renderMobileMenuBrowseSection()}</div>;
}
