import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useShoppingCartDispatch } from '../../hooks/useShoppingCart';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { TitleComponent } from '../../components/Title/Title';
import { LoaderComponent } from '../../components/Loader/Loader';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import { CollectionComponent } from '../../components/Collection/Collection';
import { ButtonComponent } from '../../components/Button/Button';
import styles from './Product.module.scss';

function ProductPage() {
  console.log('ProductPage');

  const { loading, errors, products } = useProduct();
  const dispatch = useShoppingCartDispatch();
  const location = useLocation();

  const product = products?.filter(
    (product) => product.route === location.pathname.split('/').pop()
  );

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          {loading && <LoaderComponent cssClass={styles.loader} />}
          {product && (
            <>
              <TitleComponent>{product[0].title}</TitleComponent>
              <div className={styles.content}>
                <div className={styles.inner}>
                  <ImageComponent
                    cssClass={styles.image}
                    src={`/one/data/products/${product[0].image}`}
                    alt={product[0].title}
                  />
                  <div className={styles.price}>
                    {product[0].discount > 0 ? (
                      <>
                        <span className={styles.sales}>
                          ${product[0].price.toFixed(2)}
                        </span>
                        {` $${((product[0].price * product[0].discount) / 100).toFixed(2)} `}
                        <span className={styles.discount}>
                          {product[0].discount}%
                        </span>
                      </>
                    ) : (
                      `$${product[0].price.toFixed(2)}`
                    )}
                  </div>
                  <div className={styles.short}>{product[0].short}</div>
                  <div className={styles.description}>
                    {product[0].description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <ButtonComponent
                    cssClass={styles.button}
                    onClick={() => {
                      dispatch!({
                        type: 'added',
                        payload: product[0],
                      });
                    }}
                  >
                    Add to shopping cart
                  </ButtonComponent>
                </div>
              </div>
            </>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
          <CollectionComponent />
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <ScrollToTopComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const FooterComponentMemo = memo(FooterComponent);

export default ProductPage;
