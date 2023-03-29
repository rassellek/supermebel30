import * as React from 'react';

import classNames from 'classnames';

import s from './Checkbox.module.scss';

import type { ICheckboxProps } from './Checkbox.types';

const Checkbox = (props: ICheckboxProps): JSX.Element => {
  const {
    name,
    children,
    value,
    onChange,
    isChecked = false,
    isDisabled = false,
    error,
    className,
  } = props;

  return (
    <label className={classNames(s.container, { [s.invalid]: error }, className)}>
      <span className={s.input}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
          disabled={isDisabled}
        />
        <span className={classNames(s.checkbox, { [s.checked]: isChecked })} />
      </span>
      {children && <span className={s.label}>{children}</span>}
    </label>
  );
};

export default Checkbox;
