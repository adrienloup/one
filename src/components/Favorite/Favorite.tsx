import { useProduct } from '../../hooks/useProduct';
import { FailureComponent } from '../Failure/Failure';
import { LoaderComponent } from '../Loader/Loader';
import { TitleComponent } from '../Title/Title';
import { ProductComponent } from '../Product/Product';
import styles from './Favorite.module.scss';

export const FavoriteComponent = () => {
  // console.log("FavoriteComponent");

  const { loading, errors, products } = useProduct();

  return (
    <>
      <TitleComponent tag="h2">Favorites</TitleComponent>
      {loading && <LoaderComponent cssClass={styles.loader} />}
      {products && (
        <div className={styles.products}>
          <ProductComponent cssClass={styles.product} product={products![1]} />
          <ProductComponent cssClass={styles.product} product={products![3]} />
          <ProductComponent cssClass={styles.product} product={products![9]} />
        </div>
      )}
      {errors && (
        <FailureComponent cssClass={styles.failure}>
          Failed to fetch :(
        </FailureComponent>
      )}
    </>
  );
};
