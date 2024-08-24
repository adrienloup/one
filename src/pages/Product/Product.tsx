import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { useProduct } from '../../hooks/useProduct';
import { useAlertDispatch } from '../../hooks/useAlert';
import { useShoppingCartDispatch } from '../../hooks/useShoppingCart';
import { ProductType } from '../../models/Product';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { CursorComponent } from '../../components/Cursor/Cursor';
import { ArticleComponent } from '../../components/Article/Article';
import { TitleComponent } from '../../components/Title/Title';
import { LoaderComponent } from '../../components/Loader/Loader';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import { ButtonComponent } from '../../components/Button/Button';
import { RelatedComponent } from '../../components/Related/Related';
import styles from './Product.module.scss';

function ProductPage() {
  // console.log('ProductPage');

  const location = useLocation();
  const productDispatch = useShoppingCartDispatch();
  const { loading, errors, products } = useProduct();
  const { addAlert } = useAlertDispatch();

  const currentProduct = products?.find(
    (product) => product.route === location.pathname.split('/').pop()
  );

  const related = products?.filter((product: ProductType) => {
    if (product.collection !== currentProduct?.collection) return false;
    if (product.id === currentProduct?.id) return false;
    return true;
  });

  const addCurrentProduct = (product: ProductType) => {
    productDispatch({
      type: 'added',
      payload: product,
    });

    addAlert({
      title: `${product.title} added`,
    });
  };

  useTitle(currentProduct ? currentProduct.title : 'Product');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
          {currentProduct && (
            <>
              <TitleComponent>{currentProduct.title}</TitleComponent>
              <div className={styles.content}>
                <div className={styles.inner}>
                  <ImageComponent
                    cssClass={styles.image}
                    src={`/one/data/products/${currentProduct.image}`}
                    alt={currentProduct.title}
                  />
                  <div className={styles.collection}>
                    {currentProduct.collection} collection
                  </div>
                  <div className={styles.price}>
                    {currentProduct.discount > 0 ? (
                      <>
                        <span className={styles.sales}>
                          ${currentProduct.price.toFixed(2)}
                        </span>
                        {` $${((currentProduct.price * currentProduct.discount) / 100).toFixed(2)} `}
                        <span className={styles.discount}>
                          {currentProduct.discount}%
                        </span>
                      </>
                    ) : (
                      `$${currentProduct.price.toFixed(2)}`
                    )}
                  </div>
                  <div className={styles.short}>{currentProduct.short}</div>
                  <div className={styles.description}>
                    {currentProduct.description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <ButtonComponent
                    cssClass={styles.button}
                    onClick={() => addCurrentProduct(currentProduct)}
                  >
                    Add to shopping cart
                  </ButtonComponent>
                </div>
              </div>
              <RelatedComponent related={related} />
            </>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <CursorComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const FooterComponentMemo = memo(FooterComponent);

export default ProductPage;
