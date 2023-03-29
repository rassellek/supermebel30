import classNames from 'classnames';

import styles from './BlockLayout.module.scss';

import type { IBlockLayoutProps } from './BlockLayout.types';

const BlockLayout = (props: IBlockLayoutProps): JSX.Element => {
  const {
    outerClassName,
    innerClassName,
    children,
  } = props;

  return (
    <div className={classNames(styles.outer, outerClassName)}>
      <div className={classNames(styles.inner, innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default BlockLayout;
