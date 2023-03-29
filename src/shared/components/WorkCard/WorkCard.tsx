import Image from 'next/image';
import Link from 'next/link';

import styles from './WorkCard.module.scss';

import type { IWorkCardProps } from './WorkCard.types';

const WorkCard = (props: IWorkCardProps): JSX.Element => {
  const { id, image, title } = props;

  return (
    <Link href={`/works/${id}`} className={styles.root}>
      <div className={styles.container}>
        <Image src={image} alt="" width={100} height={100} priority />
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export default WorkCard;
