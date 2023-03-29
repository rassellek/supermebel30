import { InputHTMLAttributes } from 'react';

export interface ITextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'style'> {
  error?: string,
  className?: string,
}
