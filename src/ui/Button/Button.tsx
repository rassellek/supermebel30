import React, { forwardRef } from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

import type { IButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    fullWidth,
    isLoading = false,
    width,
    children,
    className,
    ...rest
  } = props;

  const style = {
    width: width && !fullWidth ? `${width}px` : undefined,
  };

  return (
  // eslint-disable-next-line react/button-has-type
    <button
      ref={ref}
      className={classNames(
        styles.root,
        styles[variant],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        className,
      )}
      style={style}
      {...rest}
    >
      {isLoading
        ? 'Подождите...'
        : (
          children
        )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
