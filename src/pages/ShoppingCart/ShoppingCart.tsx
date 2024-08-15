import { memo } from 'react';
import {
  useShoppingCart,
  useShoppingCartDispatch,
} from '../../hooks/useShoppingCart';
import { ProductType } from '../../models/Product';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { AsideComponent } from '../../components/Aside/Aside';
import { TitleComponent } from '../../components/Title/Title';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import { ButtonComponent } from '../../components/Button/Button';
import { IconComponent } from '../../components/Icon/Icon';
import styles from './ShoppingCart.module.scss';

function ShoppingCartPage() {
  console.log('ShoppingCartPage');

  const products = useShoppingCart();
  const dispatch = useShoppingCartDispatch();

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <AsideComponent>Order</AsideComponent>
        <ArticleComponent>
          <TitleComponent>Your shopping cart</TitleComponent>
          {products && products.length > 0 ? (
            <div className={styles.content}>
              <div className={styles.inner}>
                {products.map((product: ProductType) => (
                  <div key={product.id} className={styles.product}>
                    <ImageComponent
                      cssClass={styles.image}
                      src={`/one/data/products/${product.image}`}
                      alt={product.title}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>{product.title}</div>
                      <div className={styles.quantity}>
                        Quantity: {product.quantity}
                      </div>
                      <div className={styles.price}>
                        {product.discount > 0 ? (
                          <>
                            <span className={styles.sales}>
                              ${(product.quantity * product.price).toFixed(2)}
                            </span>
                            {` $${((product.quantity * product.price * product.discount) / 100).toFixed(2)} `}
                            <span className={styles.discount}>
                              -{product.discount}%
                            </span>
                          </>
                        ) : (
                          `$${(product.quantity * product.price).toFixed(2)}`
                        )}
                      </div>
                      <ButtonComponent
                        cssClass={styles.decremented}
                        onClick={() => {
                          dispatch({
                            type: 'decremented',
                            payload: product,
                          });
                        }}
                      >
                        <IconComponent name="remove" />
                      </ButtonComponent>
                      <ButtonComponent
                        cssClass={styles.incremented}
                        onClick={() => {
                          dispatch({
                            type: 'incremented',
                            payload: product,
                          });
                        }}
                      >
                        <IconComponent name="add" />
                      </ButtonComponent>
                      <ButtonComponent
                        cssClass={styles.removed}
                        onClick={() => {
                          dispatch({
                            type: 'removed',
                            payload: product,
                          });
                        }}
                      >
                        <IconComponent name="delete_forever" />
                      </ButtonComponent>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <FailureComponent cssClass={styles.failure}>
              Your shopping cart is empty but don't give up :)
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

export default ShoppingCartPage;
