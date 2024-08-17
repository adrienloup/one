import { useCollection } from '../../hooks/useCollection';
import { CollectionType } from '../../models/Collection';
import { FailureComponent } from '../Failure/Failure';
import { LoaderComponent } from '../Loader/Loader';
import { TitleComponent } from '../Title/Title';
import { ListComponent } from '../List/List';
import { CollectionComponent } from '../Collection/Collection';
import styles from './Collections.module.scss';

export const CollectionsComponent = () => {
  // console.log("CollectionsComponent");

  const { loading, errors, collections } = useCollection();

  const list = collections?.map((collection: CollectionType) => (
    <CollectionComponent key={collection.id} collection={collection} />
  ));

  return (
    <>
      {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
      {collections && collections.length > 0 ? (
        <>
          <TitleComponent tag="h2">Collection classic looks</TitleComponent>
          <ListComponent cssClass={styles.collections} list={list} />
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
