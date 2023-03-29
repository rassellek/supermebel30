import Image from 'next/image';

import { Title } from 'shared/components';
import { BlockLayout } from 'shared/layouts';

import styles from './Company.module.scss';

const Company = (): JSX.Element => (
  <BlockLayout innerClassName={styles.inner}>
    <div className={styles.title}>
      <Title>
        О компании
      </Title>
      <Image src="images/logo.png" alt="logo" width={113} height={65} priority />
    </div>
    <p className={styles.content}>
      Мы изготавливаем качественную и красивую мебель любой сложности по
      индивидуальным размерам и особенностям помещения каждого клиента, и
      исходя от ваших пожелании создадим мебель вашей мечты!
    </p>
    <p className={styles.content}>
      Спасибо, что выбираете нас на протяжении 10 лет.
    </p>
    <h2>Что вы можете заказать у нас?</h2>
    <p className={styles.content}>
      Кухни, Шкафы, Шкафы-купе, Гардеробные, Комоды, Стеллажи, столешницы из
      искусственного камня, столешницы из натурального камня.
    </p>
    <h2> Что мы предлагаем вам?</h2>
    <p className={styles.content}>
      <span className={styles.subtle}>
        ИНДИВИДУАЛЬНЫЙ ПОДХОД
        <br />
        <br />
      </span>
      Благодаря ему уже 10 лет удается совместить функциональность, уют и
      комфорт в Вашем доме. От нас - гарантия качества!
      <span className={styles.subtle}>
        <br />
        <br />
        ВЫСОКОЕ КАЧЕСТВО ПО ДОСТУПНОЙ ЦЕНЕ
        <br />
        <br />
      </span>
      Мы смогли найти баланс цены и качества для Вашей кухни. Теперь поможем
      и Вам воплотить желаемое, избегая неоправданных трат.
      <span className={styles.subtle}>
        <br />
        <br />
        ВЫПОЛНЕНИЕ ПРОЕКТА ЛЮБОЙ СЛОЖНОСТИ
        <br />
        <br />
      </span>
      Разместим все необходимое даже на кухне площадью не более 5 кв.м. Не
      верите? Мы докажем Вам, что способны преобразить любую кухню.
    </p>
  </BlockLayout>
);

export default Company;
