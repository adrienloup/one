import { useProduct } from '../../hooks/useProduct';
import { ProductType } from '../../models/Product';
import { FailureComponent } from '../Failure/Failure';
import { LoaderComponent } from '../Loader/Loader';
import { TitleComponent } from '../Title/Title';
import { ListComponent } from '../List/List';
import { FavoriteComponent } from '../Favorite/Favorite';
import styles from './Favorites.module.scss';

export const FavoritesComponent = ({ title = 'Lips' }: { title?: string }) => {
  // console.log("FavoritesComponent");

  const { loading, errors, products } = useProduct();

  const filteredList = products?.filter(
    (product: ProductType) => product.collection === title
  );

  const sortedList = filteredList?.filter(
    (product: ProductType) => filteredList.indexOf(product) < 3
  );

  const list = sortedList?.map((product: ProductType) => (
    <FavoriteComponent key={product.id} favorite={product} />
  ));

  return (
    <>
      {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
      {products && (
        <>
          <TitleComponent tag="h2">Favorite that's easy to use</TitleComponent>
          <ListComponent cssClass={styles.favorites} list={list} />
        </>
      )}
      {errors && (
        <FailureComponent cssClass={styles.failure}>
          Failed to fetch :(
        </FailureComponent>
      )}
    </>
  );
};
