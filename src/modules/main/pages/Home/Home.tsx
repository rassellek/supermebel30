import { useState } from 'react';

import { ModalForm } from 'shared/components';
import { MainLayout } from 'shared/layouts';
import { Modal } from 'ui';

import { Benefits, Intro, Works } from './components';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MainLayout>
      <Intro setIsModalActive={setIsVisible} />
      <Works />
      <Benefits />

      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModalForm setIsVisible={setIsVisible} />
      </Modal>
    </MainLayout>
  );
};

export default Home;
