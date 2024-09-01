import { useState } from 'react';
import { GameDetail } from '../../types/gameType';
import GameAdditionalInformation from '../gameAdditionalInformation/GameAdditionalInformation';
import GameListHeader from '../gameListHeader/GameListHeader';
import style from './GamesListColumn.module.css';

type GamesListColumnProps = {
  gamesArray: GameDetail[];
};

export default function GamesListColumn({ gamesArray }: GamesListColumnProps) {
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const renderGames = (array: GameDetail[]) => {
    if (array && array.length > 0) {
      return array.map((game: GameDetail) => {
        return (
          <div
            onMouseEnter={() => setHoveredGameId(game.id)}
            onMouseLeave={() => setHoveredGameId(null)}
            className={style.gameContainer}
            key={game.id}
          >
            <img className={style.gameImage} src={game.background_image} />
            <div className={style.gameDescriptionMainContainer}>
              <GameListHeader
                isHovered={hoveredGameId === game.id}
                game={game}
              />
              <GameAdditionalInformation
                game={game}
                isHovered={hoveredGameId === game.id}
              />
            </div>
          </div>
        );
      });
    }
  };
  return <div className={style.gamesColumn}>{renderGames(gamesArray)}</div>;
}
