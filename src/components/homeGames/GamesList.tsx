import { useGetHomeData } from '../../hooks/useGetHomeData';
import { GameDetail } from '../../types/gameType';
import style from './gamesList.module.css';
import GameListHeader from '../gameListHeader/GameListHeader';
import { useState } from 'react';
import GameAdditionalInformation from '../gameAdditionalInformation/GameAdditionalInformation';

export default function GamesList() {
  const { firstArray, secondArray, thirdArray, fourthArray, isLoading, error } =
    useGetHomeData();

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
            <img
              className={style.gameImage}
              src={game.background_image}
              alt=''
            />
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
    } else if (isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else if (error) {
      return (
        <div>
          <h1>Error, please try again.</h1>
        </div>
      );
    }
  };

  return (
    <div className={style.gameMainContainer}>
      <div className={style.gamesColumn}>{renderGames(firstArray)}</div>
      <div className={style.gamesColumn}>{renderGames(secondArray)}</div>
      <div className={style.gamesColumn}>{renderGames(thirdArray)}</div>
      <div className={style.gamesColumn}>{renderGames(fourthArray)}</div>
    </div>
  );
}
