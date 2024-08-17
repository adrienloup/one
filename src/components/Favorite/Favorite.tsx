import { memo } from 'react';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { FavoriteType } from '../../models/Favorite';
import { ImageComponent } from '../Image/Image';
import styles from './Favorite.module.scss';

interface FavoriteProps {
  cssClass?: string;
  favorite: FavoriteType;
}

export const FavoriteComponent = memo(
  ({ cssClass, favorite }: FavoriteProps) => {
    // console.log('FavoriteComponent');

    const { goTo } = useTransitionPage();

    return (
      <div
        className={[styles.favorite, cssClass ? ` ${cssClass}` : ''].join('')}
        onClick={() => {
          goTo(`/one/product/${favorite.route}`);
        }}
      >
        <div className={styles.inner}>
          <div className={styles.title}>{favorite.title}</div>
          <ImageComponent
            cssClass={styles.image}
            src={`/one/data/products/${favorite.image}`}
            alt={favorite.title}
          />
        </div>
      </div>
    );
  }
);
