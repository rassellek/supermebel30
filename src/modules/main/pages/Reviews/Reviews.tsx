import { Navbar } from 'shared/components';
import { MainLayout } from 'shared/layouts';

import { Gallery } from './components';
import { NAVBAR_ITEMS } from './Reviews.constants';

const Reviews = () => (
  <MainLayout>
    <Navbar items={NAVBAR_ITEMS} />
    <Gallery />
  </MainLayout>
);
export default Reviews;
