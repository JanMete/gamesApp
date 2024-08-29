import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeGameIcons from '../homeGameIcons/HomeGameIcons';
import style from './gameListHeader.module.css';
import { faGift, faPlus } from '@fortawesome/free-solid-svg-icons';
import { GameDetail } from '../../types/gameType';

type GameListHeaderProps = {
  game: GameDetail;
  isHovered: boolean;
};

export default function GameListHeader({
  game,
  isHovered,
}: GameListHeaderProps) {
  return (
    <div className={style.gameHeaderContainer}>
      <HomeGameIcons game={game} />
      <h2>{game.name}</h2>
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
    </div>
  );
}
