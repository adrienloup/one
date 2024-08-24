import { memo, useRef } from 'react';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { useCursor } from '../../hooks/useCursor';
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

    const ref = useRef<HTMLDivElement>(null);
    const { goTo } = useTransitionPage();

    useCursor(ref);

    return (
      <div
        ref={ref}
        className={[styles.favorite, cssClass ? ` ${cssClass}` : ''].join('')}
        tabIndex={0}
        onClick={() => {
          goTo(`/one/product/${favorite.route}`);
        }}
        onMouseEnter={() =>
          document.querySelector('#cursor')?.classList.add('scaled')
        }
        onMouseLeave={() =>
          document.querySelector('#cursor')?.classList.remove('scaled')
        }
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
