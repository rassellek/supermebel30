import Image from 'next/image';
import { useRouter } from 'next/router';

import { BlockLayout } from 'shared/layouts';
import { Button, SectionTitle } from 'ui';

import { BENEFITS } from './Benefits.constants';

import styles from './Benefits.module.scss';

const Benefits = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <SectionTitle text="Наши преимущества" />
      <BlockLayout outerClassName={styles.outer}>
        <h1 className={styles.title}>
          Максимум функциональности на наших кухнях
          <hr />
        </h1>
        <h3 className={styles.subtitle}>
          Разместим все необходимое даже на кухне площадью не более 5 кв.м.
          Не верите? Мы докажем Вам, что способны преобразить любую кухню
        </h3>
        <Button variant="secondary" type="button" onClick={() => router.push('/about')}>
          Узнать больше
        </Button>
      </BlockLayout>

      <BlockLayout innerClassName={styles.wrapper}>
        {BENEFITS.map((benefit) => (
          <div className={styles.container} key={benefit.subtitle}>
            <Image src={benefit.icon} alt="support icon" />
            <div className={styles.free}>{benefit.title}</div>
            <div className={styles.benefit}>{benefit.subtitle}</div>
          </div>
        ))}
      </BlockLayout>
    </>
  );
};

export default Benefits;
