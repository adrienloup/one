import { useTransitionPage } from '../../hooks/useTransitionPage';
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

  const { goTo } = useTransitionPage();

  return (
    <div
      className={[styles.collection, cssClass ? ` ${cssClass}` : ''].join('')}
      onClick={() => {
        goTo(`/one/collection/${collection.route}`);
      }}
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
