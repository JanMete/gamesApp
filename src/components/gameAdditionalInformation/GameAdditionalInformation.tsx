import { GameDetail } from '../../types/gameType';
import GameUtilityButton from '../gameUtilityButton/GameUtilityButton';
import style from './gameAdditionalInformation.module.css';

type GameAdditionalInformationProps = {
  game: GameDetail;
  isHovered: boolean;
};

export default function GameAdditionalInformation({
  game,
  isHovered,
}: GameAdditionalInformationProps) {
  const renderGenres = (game: GameDetail) => {
    return game.genres.map((genre, index) => {
      const isLastGenre = index === game.genres.length - 1;
      return (
        <p key={index}>
          {genre.name}
          {!isLastGenre && ','}
        </p>
      );
    });
  };

  return (
    <div
      className={`${style.additionalInformation} ${
        isHovered ? style.showAdditionalInformation : ''
      }`}
    >
      <div className={style.gameDetailContainer}>
        <p className={style.gameDetailDescription}>Release date:</p>
        <p>{game.released}</p>
      </div>
      <hr className={style.gameDetailHr} />
      <div className={style.gameDetailContainer}>
        <p className={style.gameDetailDescription}>genres:</p>
        <div className={style.genresContainer}>{renderGenres(game)}</div>
      </div>
      <div className={style.gameUtilityButtonsContainer}>
        <GameUtilityButton>Show more like this</GameUtilityButton>
        <GameUtilityButton>Hide this game</GameUtilityButton>
      </div>
    </div>
  );
}
