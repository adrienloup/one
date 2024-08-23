import { ProductType } from '../../models/Product';
import { ProductComponent } from '../Product/Product';
import { ListComponent } from '../List/List';
import { TitleComponent } from '../Title/Title';
import styles from './Related.module.scss';

export const RelatedComponent = ({
  related,
}: {
  related: ProductType[] | undefined;
}) => {
  const list = related?.map((product: ProductType) => (
    <ProductComponent key={product.id} product={product} />
  ));

  return (
    <>
      <TitleComponent tag="h2">Related</TitleComponent>
      <ListComponent cssClass={styles.related} list={list} />
    </>
  );
};
