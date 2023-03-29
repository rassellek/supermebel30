import React from 'react';

export interface ICheckboxProps {
  name: string,
  isChecked?: boolean,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  children?: React.ReactNode,
  error?: string,
  isDisabled?: boolean,
  className?: string,
}
