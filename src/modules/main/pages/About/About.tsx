import { Navbar } from 'shared/components';
import { MainLayout } from 'shared/layouts';

import { NAVBAR_ITEMS } from './About.constants';
import { Company, Partners } from './components';

const About = () => (
  <MainLayout>
    <Navbar items={NAVBAR_ITEMS} />
    <Company />
    <Partners />
  </MainLayout>
);

export default About;
