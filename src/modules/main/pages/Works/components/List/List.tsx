import { WorkCard } from 'shared/components';
import { BlockLayout } from 'shared/layouts';

import styles from './List.module.scss';

import type { IListProps } from './List.types';

const List = (props: IListProps): JSX.Element => {
  const { filteredProducts } = props;
  return (
    <BlockLayout innerClassName={styles.root}>
      {filteredProducts.map((product) => (
        <WorkCard
          key={product.id}
          id={product.id}
          image={product.image?.[0]}
          title={product.title}
        />
      ))}
    </BlockLayout>
  );
};
export default List;
