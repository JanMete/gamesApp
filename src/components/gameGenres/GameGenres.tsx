import { GameDetail } from '../../types/gameType';

type GameGenresPropTypes = {
  game: GameDetail;
};

export default function GameGenres({ game }: GameGenresPropTypes) {
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
  return <>{renderGenres(game)}</>;
}
