/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import close from 'assets/icons/close.svg';

import Portal from '../Portal/Portal';

import s from './Modal.module.scss';

import type { IModalProps } from './Modal.types';

const Modal = (props: IModalProps): JSX.Element => {
  const {
    isVisible,
    setIsVisible,
    isDisableClickOutside,
    isCloseButton = true,
    children,
  } = props;
  return (
    <Portal>
      <div
        className={classNames(s.root, { [s.visible]: isVisible })}
        onClick={(event) => {
          if (!isDisableClickOutside) {
            event.stopPropagation();
            setIsVisible(false);
          }
        }}
      >
        <div
          className={classNames(s.content, { [s.visible]: isVisible })}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
          {isCloseButton && (
          <button
            type="button"
            className={s.close}
            onClick={(event) => {
              event.stopPropagation();
              setIsVisible(false);
            }}
          >
            <Image src={close} alt="cross icon" />
          </button>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
