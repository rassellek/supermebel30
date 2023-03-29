import Link from 'next/link';

import { BlockLayout } from 'shared/layouts';

import { INavbarProps } from './Navbar.types';

import styles from './Navbar.module.scss';

const Navbar = (props: INavbarProps): JSX.Element => {
  const { items } = props;

  return (
    <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>

      {items.map((item) => {
        if (item.href) {
          return (
            <Link href={item.href} key={`${item.label}-${item.href}`}>
              <span>
                {item.label} {' > '}
              </span>
            </Link>
          );
        }
        return <span key={`${item.label}`}>{item.label}</span>;
      })}

    </BlockLayout>
  );
};
export default Navbar;
