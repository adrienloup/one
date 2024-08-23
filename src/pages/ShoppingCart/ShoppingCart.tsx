import { memo } from 'react';
import {
  useShoppingCart,
  useShoppingCartDispatch,
} from '../../hooks/useShoppingCart';
import { useTitle } from '../../hooks/useTitle';
import { useAlertDispatch } from '../../hooks/useAlert';
import { ProductType } from '../../models/Product';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
// import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { TitleComponent } from '../../components/Title/Title';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import { ButtonComponent } from '../../components/Button/Button';
import { IconComponent } from '../../components/Icon/Icon';
import styles from './ShoppingCart.module.scss';

function ShoppingCartPage() {
  console.log('ShoppingCartPage');

  const { addAlert } = useAlertDispatch();
  const products = useShoppingCart();
  const productDispatch = useShoppingCartDispatch();

  const prices = [];

  for (const product of products) {
    prices.push(product.quantity * product.price);
  }

  const total = prices.reduce((accumulator, value) => accumulator + value, 0);

  const incremented = (product: ProductType) => {
    productDispatch({
      type: 'incremented',
      payload: product,
    });

    if (product.quantity == product.stock - 1)
      addAlert({ title: 'Stock is empty :(' });
  };

  useTitle('Shopping Cart');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          <TitleComponent>
            Your shopping cart{' '}
            {products.length > 0 ? `(${products.length})` : ''}
          </TitleComponent>
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
                              {product.discount}%
                            </span>
                          </>
                        ) : (
                          `$${(product.quantity * product.price).toFixed(2)}`
                        )}
                      </div>
                      <div className={styles.buttons}>
                        <ButtonComponent
                          cssClass={styles.decremented}
                          disabled={product.quantity < 2}
                          onClick={() => {
                            productDispatch({
                              type: 'decremented',
                              payload: product,
                            });
                          }}
                        >
                          <IconComponent name="remove_shopping_cart" />
                        </ButtonComponent>
                        <ButtonComponent
                          cssClass={styles.incremented}
                          disabled={product.quantity == product.stock}
                          onClick={() => incremented(product)}
                        >
                          <IconComponent name="add_shopping_cart" />
                        </ButtonComponent>
                        <ButtonComponent
                          cssClass={styles.removed}
                          onClick={() => {
                            productDispatch({
                              type: 'removed',
                              payload: product,
                            });
                          }}
                        >
                          <IconComponent name="delete_forever" />
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles.total}>
                  <div className={styles.value}>${total.toFixed(2)}</div>
                  <ButtonComponent
                    cssClass={styles.cleared}
                    onClick={() => {
                      productDispatch({
                        type: 'cleared',
                        payload: undefined as unknown as ProductType,
                      });
                    }}
                  >
                    <IconComponent name="delete_forever" />
                  </ButtonComponent>
                </div>
                <ButtonComponent
                  cssClass={styles.order}
                  onClick={() => addAlert({ title: 'Validate :)' })}
                >
                  Place order
                </ButtonComponent>
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
      {/* <ScrollToTopComponent /> */}
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const FooterComponentMemo = memo(FooterComponent);

export default ShoppingCartPage;
