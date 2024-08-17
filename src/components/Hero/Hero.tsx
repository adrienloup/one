import { ImageComponent } from '../Image/Image';
import { StickyComponent } from '../Sticky/Sticky';
import { SearchComponent } from '../Search/Search';
import lips from '../../assets/lips.webp';
import eyes from '../../assets/eyes.webp';
import face from '../../assets/face.webp';
import lipstick from '../../assets/lipstick.webp';
import blush from '../../assets/blush.webp';
import styles from './Hero.module.scss';

const images = [lips, eyes, face, lipstick, blush];

export const HeroComponent = ({ cssClass }: { cssClass?: string }) => {
  // console.log("HeroComponent");

  const random = () => {
    const image = images[Math.floor(Math.random() * images.length)];
    return image;
  };

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
