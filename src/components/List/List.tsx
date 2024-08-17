interface ListProps {
  cssClass?: string;
  tag?: keyof JSX.IntrinsicElements;
  list: JSX.Element[] | undefined;
}

export const ListComponent = ({
  cssClass,
  tag: Tag = 'div',
  list,
}: ListProps) => {
  // console.log('ListComponent');

  return <Tag className={cssClass}>{list}</Tag>;
};
