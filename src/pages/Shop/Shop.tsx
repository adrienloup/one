import { memo, useState } from 'react';
import { useProduct } from '../../hooks/useProduct';
import { ProductType } from '../../models/Product';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { AsideComponent } from '../../components/Aside/Aside';
import { TitleComponent } from '../../components/Title/Title';
import { FailureComponent } from '../../components/Failure/Failure';
import { LoaderComponent } from '../../components/Loader/Loader';
import { BannerComponent } from '../../components/Banner/Banner';
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

  const list = products?.filter((product: ProductType) => {
    if (isChecked === 'lip' && product.category !== 'lip') return false;
    if (isChecked === 'face' && product.category !== 'face') return false;
    if (isChecked === 'eyes' && product.category !== 'eyes') return false;
    if (isNew && !product.new) return false;
    if (isDiscount && !product.discount) return false;
    return true;
  });

  const listed = list?.map((product: ProductType) => (
    <ProductComponent key={product.id} product={product} />
  ));

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <AsideComponent>
          {listed && (
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
                  label="Lip"
                  name="category"
                  value="lip"
                  checked={'lip' === isChecked}
                  onChange={(e: { target: { value: string } }) =>
                    setChecked(e.target.value)
                  }
                />
                <RadioComponent
                  label="Face"
                  name="category"
                  value="face"
                  checked={'face' === isChecked}
                  onChange={(e: { target: { value: string } }) =>
                    setChecked(e.target.value)
                  }
                />
                <RadioComponent
                  label="Eyes"
                  name="category"
                  value="eyes"
                  checked={'eyes' === isChecked}
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
          {loading && <LoaderComponent cssClass={styles.loader} />}
          {listed &&
            (listed.length > 0 ? (
              <>
                <TitleComponent>
                  {listed?.length} item
                  {listed?.length && listed.length > 1 ? 's' : ''} in makeup
                  magic
                </TitleComponent>
                <ListComponent cssClass={styles.products} list={listed} />
              </>
            ) : (
              <FailureComponent cssClass={styles.failure}>
                No item matches your wishes but don't give up :)
              </FailureComponent>
            ))}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <ScrollToTopComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const FooterComponentMemo = memo(FooterComponent);
const BannerComponentMemo = memo(BannerComponent);

export default ShopPage;
