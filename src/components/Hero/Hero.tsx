import { ImageComponent } from '../Image/Image';
import { StickyComponent } from '../Sticky/Sticky';
import { SearchComponent } from '../Search/Search';
import blush from '../../assets/hero/blush.webp';
import lips from '../../assets/hero/lips.webp';
import eyes from '../../assets/hero/eyes.webp';
import styles from './Hero.module.scss';

const heros = [blush, lips, eyes];

export const HeroComponent = ({ cssClass }: { cssClass?: string }) => {
  // console.log("HeroComponent");

  const random = () => heros[Math.floor(Math.random() * heros.length)];

  return (
    <div className={[styles.hero, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.title}>
        <StickyComponent>
          <SearchComponent />
        </StickyComponent>
      </div>
      <ImageComponent cssClass={styles.image} src={random()} alt="One" />
    </div>
  );
};
