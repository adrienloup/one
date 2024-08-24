import { useRef } from 'react';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { useCursor } from '../../hooks/useCursor';
import { CollectionType } from '../../models/Collection';
import { ImageComponent } from '../Image/Image';
import styles from './Collection.module.scss';

interface CollectionProps {
  cssClass?: string;
  collection: CollectionType;
}

export const CollectionComponent = ({
  cssClass,
  collection,
}: CollectionProps) => {
  // console.log("CollectionComponent");

  const ref = useRef<HTMLDivElement>(null);
  const { goTo } = useTransitionPage();

  useCursor(ref);

  return (
    <div
      ref={ref}
      className={[styles.collection, cssClass ? ` ${cssClass}` : ''].join('')}
      tabIndex={0}
      onClick={() => {
        goTo(`/one/collection/${collection.route}`);
      }}
      onMouseEnter={() =>
        document.querySelector('#cursor')?.classList.add('scaled')
      }
      onMouseLeave={() =>
        document.querySelector('#cursor')?.classList.remove('scaled')
      }
    >
      <div className={styles.inner}>
        <div className={styles.title}>{collection.title}</div>
        <ImageComponent
          cssClass={styles.image}
          src={`/one/data/collections/${collection.image}`}
          alt={collection.title}
        />
      </div>
    </div>
  );
};
