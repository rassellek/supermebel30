import { Footer, Header } from './components';
import { NAVS } from './MainLayout.constants';

import styles from './MainLayout.module.scss';

import type { IMainLayoutProps } from './MainLayout.types';

const MainLayout = (props: IMainLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main>
      <Header navs={NAVS} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
