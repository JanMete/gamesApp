import { useGetHomeData } from '../../hooks/useGetHomeData';
import GamesListColumn from '../gamesListColumn/GamesListColumn';
import style from './gamesList.module.css';

export default function GamesList() {
  const { firstArray, secondArray, thirdArray, fourthArray, isLoading, error } =
    useGetHomeData();
  if (isLoading) {
    return (
      <div className={style.loadingErrorMainContainer}>
        <h1>Loading...</h1>
      </div>
    );
  } else if (error) {
    return (
      <div className={style.loadingErrorMainContainer}>
        <h1>Error, please try again.</h1>
      </div>
    );
  }

  return (
    <div className={style.gameMainContainer}>
      <GamesListColumn gamesArray={firstArray} />
      <GamesListColumn gamesArray={secondArray} />
      <GamesListColumn gamesArray={thirdArray} />
      <GamesListColumn gamesArray={fourthArray} />
    </div>
  );
}
