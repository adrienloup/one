import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';
import { CollectionType } from '../../models/Collection';
import { FailureComponent } from '../Failure/Failure';
import { LoaderComponent } from '../Loader/Loader';
import { ListComponent } from '../List/List';
import { TitleComponent } from '../Title/Title';
import { ImageComponent } from '../Image/Image';
import styles from './Collection.module.scss';

export const CollectionComponent = () => {
  // console.log("CollectionComponent");

  const { loading, errors, collections } = useCollection();

  const listed = collections?.map((collection: CollectionType) => (
    <Link
      key={collection.id}
      className={styles.collection}
      to={collection.route}
    >
      <div className={styles.inner}>
        <div className={styles.title}>{collection.title}</div>
        <ImageComponent
          cssClass={styles.image}
          src={`/one/data/collections/${collection.image}`}
          alt={collection.title}
        />
      </div>
    </Link>
  ));

  return (
    <>
      {loading && <LoaderComponent cssClass={styles.loader} />}
      {collections && collections.length > 0 ? (
        <>
          <TitleComponent tag="h2">Collections</TitleComponent>
          <ListComponent cssClass={styles.collections} list={listed} />
        </>
      ) : null}
      {errors && (
        <FailureComponent cssClass={styles.failure}>
          Failed to fetch :(
        </FailureComponent>
      )}
    </>
  );
};
