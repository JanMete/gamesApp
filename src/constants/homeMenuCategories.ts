import { faGamepad, faX } from '@fortawesome/free-solid-svg-icons';

export const firstLinksSection = [
  {
    categoryName: 'Home',
    path: '/',
  },
];
export const iconLinksListSection = [
  {
    id: 1,
    icon: faX,
    onClick: (
      setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      setIsMobileMenuOpen(false);
    },
  },
];
export const browseLinksSection = [
  {
    categoryName: 'Browse',
    path: '/games',
    children: [
      {
        subcategoryName: 'Platforms',
        path: '/games/browse',
        icon: faGamepad,
      },
    ],
  },
];
