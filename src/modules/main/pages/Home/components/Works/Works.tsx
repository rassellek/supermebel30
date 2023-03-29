import { useRouter } from 'next/router';

import { WORKS } from 'config/mocks';
import { WorkCard } from 'shared/components';
import { BlockLayout } from 'shared/layouts';
import { Button, SectionTitle } from 'ui';

import styles from './Works.module.scss';

const Works = (): JSX.Element => {
  const router = useRouter();

  const WORKS_TEMP = [WORKS[0], WORKS[1], WORKS[3], WORKS[5], WORKS[6], WORKS[15]];

  return (
    <>
      <SectionTitle text="Наши работы" />
      <BlockLayout outerClassName={styles.outer}>
        <div className={styles.wrapper}>
          {WORKS_TEMP.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              image={work.image?.[0]}
              title={work.title}
            />
          ))}
        </div>
        <Button variant="primary" type="button" onClick={() => router.push('/works')}>
          Все работы
        </Button>
      </BlockLayout>
    </>
  );
};

export default Works;
