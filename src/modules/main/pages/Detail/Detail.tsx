import { useState } from 'react';

import { ModalForm, Navbar, INavbarItem } from 'shared/components';
import { MainLayout } from 'shared/layouts';
import { Modal } from 'ui';

import { Description } from './components';
import { NAVBAR_ITEMS } from './Detail.constants';

import type { IDetailProps } from './Detail.types';

const Detail = (props: IDetailProps) => {
  const { work } = props;
  const navbarItems: INavbarItem[] = [...NAVBAR_ITEMS, { label: work.title }];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <MainLayout>
      <Navbar items={navbarItems} />
      <Description setIsModalActive={setIsVisible} work={work} />

      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModalForm setIsVisible={setIsVisible} />
      </Modal>
    </MainLayout>
  );
};
export default Detail;
