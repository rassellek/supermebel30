import { useState } from 'react';

import { WORKS } from 'config/mocks';
import { Navbar } from 'shared/components';
import { MainLayout } from 'shared/layouts';

import { List, Filters } from './components';
import { NAVBAR_ITEMS } from './Works.constants';

import type { IWork } from 'config/mocks.types';

const Works = (): JSX.Element => {
  const [filteredProducts, setFilteredProducts] = useState<IWork[]>(WORKS);

  const filterArray = (category: string) => () => {
    setFilteredProducts(WORKS.filter((item) => item.category === category));
  };

  return (
    <MainLayout>
      <Navbar items={NAVBAR_ITEMS} />
      <Filters filterArray={filterArray} />
      <List filteredProducts={filteredProducts} />
    </MainLayout>
  );
};
export default Works;
