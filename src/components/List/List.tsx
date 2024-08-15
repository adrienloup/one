interface ListProps {
  tag?: keyof JSX.IntrinsicElements;
  cssClass?: string;
  list: JSX.Element[] | undefined;
}

export const ListComponent = ({
  tag: Tag = 'div',
  cssClass,
  list,
}: ListProps) => {
  console.log('ListComponent');
  return <Tag className={cssClass}>{list}</Tag>;
};
