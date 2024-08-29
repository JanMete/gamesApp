import { FunctionComponent, PropsWithChildren } from 'react';
import style from './flexContainer.module.css';

export const FlexContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className={style.flexContainer}>{children}</div>;
};
