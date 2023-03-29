import { Title } from 'shared/components';
import { BlockLayout } from 'shared/layouts';

import styles from './Filters.module.scss';

import type { IFiltersProps } from './Filters.types';

const Filters = (props: IFiltersProps): JSX.Element => {
  const { filterArray } = props;

  return (
    <BlockLayout>
      <Title>
        Наши работы
      </Title>
      <ul className={styles.root}>
        <li><button type="button" onClick={filterArray('Кухни')}>Кухни</button></li>
        <li><button type="button" onClick={filterArray('Шкафы')}>Шкафы</button></li>
        <li><button type="button" onClick={filterArray('Шкафы-купе')}>Шкафы-купе</button></li>
        <li><button type="button" onClick={filterArray('Гардеробные')}>Гардеробные</button></li>
        <li><button type="button" onClick={filterArray('Комоды')}>Комоды</button></li>
      </ul>
    </BlockLayout>
  );
};

export default Filters;
