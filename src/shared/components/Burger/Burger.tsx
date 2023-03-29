import { useState } from 'react';

import Link from 'next/link';

import styles from './Burger.module.scss';

import type { IBurgerProps } from './Burger.types';

const Burger = (props: IBurgerProps): JSX.Element => {
  const { navs } = props;

  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled((current) => !current);
  };

  return (
    <div className={styles.burger}>
      <input
        className={styles.toggle}
        type="checkbox"
        value={String(isToggled)}
        onChange={handleChange}
        id="toggle"
        name="toggle"
      />
      -
      <label className={styles.container} htmlFor="toggle">
        <div className={styles.button} />
      </label>

      <ul className={styles.links}>
        {navs.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.linksItem} key={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Burger;
