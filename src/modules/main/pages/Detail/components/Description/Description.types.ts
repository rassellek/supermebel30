import { Dispatch, SetStateAction } from 'react';

import type { IWork } from 'config/mocks.types';

export interface IDescriptionsProps {
  work: IWork,
  setIsModalActive: Dispatch<SetStateAction<boolean>>,
}
