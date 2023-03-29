import { ButtonHTMLAttributes } from 'react';

export type TButtonVariant = 'primary' | 'secondary';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant,
  fullWidth?: boolean,
  isLoading?: boolean,
  width?: number,
}
