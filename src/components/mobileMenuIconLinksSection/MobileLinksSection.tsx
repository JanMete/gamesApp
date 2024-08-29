import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconLinksListSection } from '../../constants/homeMenuCategories';

type MobileLinksSectionProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileLinksSection({
  setIsMobileMenuOpen,
}: MobileLinksSectionProps) {
  const renderMobileLinksSection = () => {
    return iconLinksListSection.map((link) => (
      <li key={link.id}>
        <FontAwesomeIcon
          icon={link.icon}
          onClick={() => {
            if (link.onClick) {
              link.onClick(setIsMobileMenuOpen);
            }
          }}
        />
      </li>
    ));
  };
  return <ul>{renderMobileLinksSection()}</ul>;
}
