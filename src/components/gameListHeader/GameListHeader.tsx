import HomeGameIcons from '../homeGameIcons/HomeGameIcons';
import style from './gameListHeader.module.css';
import GameListHeaderButtons from '../gameListHeaderButtons/GameListHeaderButtons';
import { GameIsHoveredTypes } from '../../types/gameIsHoveredTypes';

export default function GameListHeader({
  game,
  isHovered,
}: GameIsHoveredTypes) {
  return (
    <div className={style.gameHeaderContainer}>
      <HomeGameIcons game={game} />
      <h2>{game.name}</h2>
      <GameListHeaderButtons isHovered={isHovered} game={game} />
    </div>
  );
}
