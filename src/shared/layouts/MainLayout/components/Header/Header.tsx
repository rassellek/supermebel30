import Image from 'next/image';
import Link from 'next/link';

import Burger from '../../../../components/Burger/Burger';
import BlockLayout from '../../../BlockLayout/BlockLayout';

import styles from './Header.module.scss';

import type { IHeaderProps } from './Header.types';

const Header = (props: IHeaderProps): JSX.Element => {
  const { navs } = props;

  return (
    <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={113} height={65} priority />
        </Link>
      </div>
      <div className={styles.menu}>
        {navs.map((item) => (
          <Link href={item.href} className={styles.menuItem} key={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      <Burger navs={navs} />
    </BlockLayout>
  );
};

export default Header;
