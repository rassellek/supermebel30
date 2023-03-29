import { PropsWithChildren } from 'react';

export interface IModalProps extends PropsWithChildren {
  isVisible: boolean,
  setIsVisible: (status: boolean) => void,
  isDisableClickOutside?: boolean,
  isCloseButton?: boolean,
}
