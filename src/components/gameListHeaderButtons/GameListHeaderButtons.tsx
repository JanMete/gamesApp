import { faGift, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './gameListHeaderButtons.module.css';
import { GameIsHoveredTypes } from '../../types/gameIsHoveredTypes';

export default function GameListHeaderButtons({
  isHovered,
  game,
}: GameIsHoveredTypes) {
  return (
    <div className={style.headerButtonsContainer}>
      <button className={style.headerButton}>
        <FontAwesomeIcon className={style.headerButtonIcon} icon={faPlus} />
        <p className={style.headerButtonP}>{game.ratings_count}</p>
      </button>
      <div
        className={`${style.headerAdditionalButtonsContainer} ${
          isHovered ? style.showHeaderAdditionalButtonsContainer : ''
        }`}
      >
        <button className={style.headerButton}>
          <FontAwesomeIcon
            className={style.headerButtonIconWithoutText}
            icon={faGift}
          />
        </button>
        <button className={style.headerButton}>...</button>
      </div>
    </div>
  );
}
