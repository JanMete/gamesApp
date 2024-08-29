import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameDetail } from '../../types/gameType';
import { PLATFORMICONMAPPER } from '../../utils/platformIconMapper';
import style from './homeGameIcons.module.css';

type HomeGameIconsProps = {
  game: GameDetail;
};

const ICON_PRIORITY = {
  playstation: ['playstation5', 'playstation4'],
  xbox: ['xbox-series-x', 'xbox-one'],
};

function filterPlatforms(
  platforms: { platform: { slug: string; id: number } }[]
) {
  const uniquePlatforms = new Set<string>();

  return platforms.filter((platform) => {
    const slug = platform.platform.slug;

    if (ICON_PRIORITY.playstation.includes(slug)) {
      if (!uniquePlatforms.has('playstation')) {
        uniquePlatforms.add('playstation');
        return true;
      }
      return false;
    }

    if (ICON_PRIORITY.xbox.includes(slug)) {
      if (!uniquePlatforms.has('xbox')) {
        uniquePlatforms.add('xbox');
        return true;
      }
      return false;
    }

    if (!uniquePlatforms.has(slug)) {
      uniquePlatforms.add(slug);
      return true;
    }
    return false;
  });
}

export default function HomeGameIcons({ game }: HomeGameIconsProps) {
  const renderPIcons = () => {
    const filteredPlatforms = filterPlatforms(game.platforms);

    return filteredPlatforms.map((platform) => {
      const icon =
        PLATFORMICONMAPPER[
          platform.platform.slug as keyof typeof PLATFORMICONMAPPER
        ];
      return icon ? (
        <div key={platform.platform.id} className={style.iconContainer}>
          <FontAwesomeIcon icon={icon} />
        </div>
      ) : null;
    });
  };

  return <div className={style.iconsMainContainer}>{renderPIcons()}</div>;
}
