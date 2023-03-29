import styles from './Title.module.scss';

import type { ITitleProps } from './Title.types';

const Title = (props: ITitleProps): JSX.Element => {
  const { children } = props;

  return (
    <h1 className={styles.root}>
      {children}
    </h1>

  );
};
export default Title;
