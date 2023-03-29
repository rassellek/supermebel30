import { Navbar } from 'shared/components';
import { MainLayout } from 'shared/layouts';

import { Info } from './components';
import { NAVBAR_ITEMS } from './Contacts.constants';

const Contacts = () => (
  <MainLayout>
    <Navbar items={NAVBAR_ITEMS} />
    <Info />
  </MainLayout>
);
export default Contacts;
