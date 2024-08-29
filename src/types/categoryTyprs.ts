import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type CategoryTypes = {
  categoryName: string;
  path: string;
  children: SubcategoryTypes[];
};
type SubcategoryTypes = {
  subcategoryName: string;
  path: string;
  icon: IconDefinition;
};
