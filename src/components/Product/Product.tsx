import { memo, useRef } from 'react';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { useCursor } from '../../hooks/useCursor';
import { ProductType } from '../../models/Product';
import { ImageComponent } from '../Image/Image';
import styles from './Product.module.scss';

interface ProductProps {
  cssClass?: string;
  product: ProductType;
}

export const ProductComponent = memo(({ cssClass, product }: ProductProps) => {
  // console.log('ProductComponent');

  const ref = useRef<HTMLDivElement>(null);
  const { goTo } = useTransitionPage();

  useCursor(ref);

  return (
    <div
      ref={ref}
      className={[styles.product, cssClass ? ` ${cssClass}` : ''].join('')}
      tabIndex={0}
      onClick={() => {
        goTo(`/one/product/${product.route}`);
      }}
    >
      <div className={styles.inner}>
        <ImageComponent
          cssClass={styles.image}
          src={`/one/data/products/${product.image}`}
          alt={product.title}
        />
        <div className={styles.text}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
            {product.discount > 0 ? (
              <>
                <span className={styles.sales}>
                  ${product.price.toFixed(2)}
                </span>
                {` $${((product.price * product.discount) / 100).toFixed(2)} `}
                <span className={styles.discount}>{product.discount}%</span>
              </>
            ) : (
              `$${product.price.toFixed(2)}`
            )}
          </div>
          <div className={styles.short}>{product.short}</div>
        </div>
        {product.new && <div className={styles.new}>New</div>}
        {product.comming && <div className={styles.comming}>Comming soon</div>}
      </div>
    </div>
  );
});
