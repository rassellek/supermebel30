import classNames from 'classnames';

import styles from './SectionTitle.module.scss';

import type { ISectionTitleProps } from './SectionTitle.types';

const SectionTitle = (props: ISectionTitleProps): JSX.Element => {
  const { text, className } = props;

  return (
    <h1 className={classNames(styles.root, className)}>
      {text}
    </h1>
  );
};

export default SectionTitle;
