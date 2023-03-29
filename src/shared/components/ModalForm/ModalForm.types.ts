import { Dispatch, SetStateAction } from 'react';

export interface IModalForm {
  city: string,
  name: string,
  category: string,
  address: string,
  phoneNumber: string,
  agreement: boolean,
}

export interface IModalFormProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>,
}
