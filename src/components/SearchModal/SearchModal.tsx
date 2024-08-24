import { useState } from 'react';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { useProduct } from '../../hooks/useProduct';
import { ProductType } from '../../models/Product';
import { LoaderComponent } from '../Loader/Loader';
import { FailureComponent } from '../Failure/Failure';
import { SearchBarComponent } from '../SearchBar/SearchBar';
import { ListComponent } from '../List/List';
import { ButtonComponent } from '../Button/Button';
import styles from './SearchModal.module.scss';

export const SearchModalComponent = () => {
  // console.log("SearchModalComponent");

  const { goTo } = useTransitionPage();
  const { loading, errors, products } = useProduct();
  const [value, setValue] = useState('');

  const filteredList = products?.filter((product: ProductType) =>
    product.title.includes(value)
  );

  const list = () => {
    if (!filteredList) return;

    const listed = [];
    let lastCollection = '';

    for (const product of filteredList) {
      if (product.collection !== lastCollection) {
        listed.push(
          <li key={product.collection} className={styles.collection}>
            <ButtonComponent
              cssClass={styles.button}
              onClick={() =>
                goTo(`/one/collection/${product.collection.toLowerCase()}`)
              }
            >
              {product.collection} Collection
            </ButtonComponent>
          </li>
        );
      }
      listed.push(
        <li key={product.id} className={styles.product}>
          <ButtonComponent
            cssClass={styles.button}
            onClick={() => goTo(`/one/product/${product.route}`)}
          >
            {product.title}
          </ButtonComponent>
        </li>
      );
      lastCollection = product.collection;
    }

    return listed;
  };

  return (
    <>
      <SearchBarComponent
        cssClass={styles.textfield}
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
      {list() && list()!.length > 0 ? (
        <ListComponent cssClass={styles.products} tag="ul" list={list()} />
      ) : (
        <FailureComponent cssClass={styles.failure}>
          No item matches but don't give up :)
        </FailureComponent>
      )}
      {errors && (
        <FailureComponent cssClass={styles.failure}>
          Failed to fetch :(
        </FailureComponent>
      )}
    </>
  );
};
