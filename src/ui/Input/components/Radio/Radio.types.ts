import { InputHTMLAttributes } from 'react';

export interface IRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  label: string,
  error?: string,
}
