import { memo, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useProduct } from '../../hooks/useProduct';
import { ProductType } from '../../models/Product';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
// import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { AsideComponent } from '../../components/Aside/Aside';
import { FailureComponent } from '../../components/Failure/Failure';
import { LoaderComponent } from '../../components/Loader/Loader';
import { BannerComponent } from '../../components/Banner/Banner';
import { TitleComponent } from '../../components/Title/Title';
import { ListComponent } from '../../components/List/List';
import { ProductComponent } from '../../components/Product/Product';
import { FilterComponent } from '../../components/Filter/Filter';
import { RadioGroupComponent } from '../../components/RadioGroup/RadioGroup';
import { RadioComponent } from '../../components/Radio/Radio';
import { CheckboxComponent } from '../../components/Checkbox/Checkbox';
import styles from './Shop.module.scss';

function ShopPage() {
  console.log('ShopPage');

  const { loading, errors, products } = useProduct();
  const [isChecked, setChecked] = useState('');
  const [isNew, setNew] = useState(false);
  const [isDiscount, setDiscount] = useState(false);

  const filteredList = products?.filter((product: ProductType) => {
    if (isChecked === 'Lips' && product.collection !== 'Lips') return false;
    if (isChecked === 'Face' && product.collection !== 'Face') return false;
    if (isChecked === 'Eyes' && product.collection !== 'Eyes') return false;
    if (isNew && !product.new) return false;
    if (isDiscount && !product.discount) return false;
    return true;
  });

  const mixedList = () => {
    /*eslint prefer-const: "off"*/
    let i = filteredList?.length;
    while (--i! > 0) {
      const product = Math.floor(Math.random() * i!);
      [filteredList![product], filteredList![i!]] = [
        filteredList![i!],
        filteredList![product],
      ];
    }
    return filteredList;
  };

  const list = mixedList()?.map((product: ProductType) => (
    <ProductComponent key={product.id} product={product} />
  ));

  useTitle('Shop');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <AsideComponent>
          {loading && <LoaderComponent cssClass={styles.loader} />}
          {list && (
            <FilterComponent
              title="Filter"
              checked={!!isChecked || isNew || isDiscount}
              onClick={() => (
                setChecked(''), setNew(false), setDiscount(false)
              )}
            >
              <CheckboxComponent
                label="Promotions"
                checked={isDiscount}
                onChange={(e) => setDiscount(e.target.checked)}
              />
              <CheckboxComponent
                label="New items"
                checked={isNew}
                onChange={(e) => setNew(e.target.checked)}
              />
              <RadioGroupComponent title="Collections">
                <RadioComponent
                  label="Lips"
                  name="collection"
                  value="Lips"
                  checked={'Lips' === isChecked}
                  onChange={(e: { target: { value: string } }) =>
                    setChecked(e.target.value)
                  }
                />
                <RadioComponent
                  label="Face"
                  name="collection"
                  value="Face"
                  checked={'Face' === isChecked}
                  onChange={(e: { target: { value: string } }) =>
                    setChecked(e.target.value)
                  }
                />
                <RadioComponent
                  label="Eyes"
                  name="collection"
                  value="Eyes"
                  checked={'Eyes' === isChecked}
                  onChange={(e: { target: { value: string } }) =>
                    setChecked(e.target.value)
                  }
                />
              </RadioGroupComponent>
            </FilterComponent>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
        </AsideComponent>
        <ArticleComponent>
          <BannerComponentMemo />
          {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
          {list && list.length > 0 ? (
            <>
              <TitleComponent>
                {list?.length} item
                {list?.length && list.length > 1 ? 's' : ''} in makeup magic
              </TitleComponent>
              <ListComponent cssClass={styles.products} list={list} />
            </>
          ) : (
            <FailureComponent cssClass={styles.failure}>
              No item matches your wishes but don't give up :)
            </FailureComponent>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      {/* <ScrollToTopComponent /> */}
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const BannerComponentMemo = memo(BannerComponent);
const FooterComponentMemo = memo(FooterComponent);

export default ShopPage;
