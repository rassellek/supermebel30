import { BlockLayout } from 'shared/layouts';
import { Button } from 'ui';

import styles from './Intro.module.scss';

import type { IntroProps } from './Intro.types';

const Intro = (props: IntroProps): JSX.Element => {
  const { setIsModalActive } = props;

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <div className={styles.background1} id="slides_1">
          <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>
            <h1 className={styles.title}>
              СОЗДАЕМ КУХНИ
              <br />
              с индивидуальным дизайном.
            </h1>
            <h3 className={styles.subtitle}>
              Уникальное решение для комфортного
              <br />
              и уютного кухонного интерьера
            </h3>
            <Button
              variant="secondary"
              id="open-modal-form-btn"
              type="button"
              onClick={() => setIsModalActive(true)}
            >
              Записаться на замер
            </Button>
            <div className={styles.next}>
              <a aria-label="next slide" href="#slides_2" title="Next">{}</a>
            </div>
          </BlockLayout>
        </div>
        <div className={styles.background2} id="slides_2">
          <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>
            <h1 className={styles.title}>
              100% контроль качества
              <br />
              на собственном производстве
            </h1>
            <h3 className={styles.subtitle}>
              Мы продаем мебель, которую сами производим,
              <br />
              контролируя качество на каждом этапе
            </h3>
            <Button
              variant="secondary"
              id="open-modal-form-btn"
              type="button"
              onClick={() => setIsModalActive(true)}
            >
              Записаться на замер
            </Button>
            <div className={styles.prev}>
              <a aria-label="prev slide" href="#slides_1" title="Prev">{}</a>
            </div>
          </BlockLayout>
        </div>
      </div>
    </div>
  );
};

export default Intro;
