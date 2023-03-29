import { forwardRef } from 'react';

import classNames from 'classnames';

import s from './Text.module.scss';

import type { ITextProps } from './Text.types';

const Text = forwardRef<HTMLInputElement, ITextProps>((props, ref) => {
  const { error, className, ...inputProps } = props;

  return (
    <input
      ref={ref}
      type="text"
      className={classNames(s.root, { [s.error]: error }, className)}
      {...inputProps}
    />
  );
});

Text.displayName = 'Text';

export default Text;
