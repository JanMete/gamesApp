import style from './gameUtilityButton.module.css';
import { FunctionComponent, PropsWithChildren } from 'react';

const GameUtilityButton: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <button className={style.gameUtilityButton}>{children}</button>;
};

export default GameUtilityButton;
