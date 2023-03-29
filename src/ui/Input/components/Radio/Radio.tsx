import { forwardRef } from 'react';

import classNames from 'classnames';

import s from './Radio.module.scss';

import type { IRadioProps } from './Radio.types';

const Radio = forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const { label, error, ...radioProps } = props;

  return (
    <label className={classNames(s.root, { [s.error]: error })}>
      <input ref={ref} type="radio" {...radioProps} />
      {label}
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
