import Image from 'next/image';
import Link from 'next/link';

import email from 'assets/icons/email.svg';
import instagram from 'assets/icons/instagram.svg';
import phone from 'assets/icons/phone.svg';
import telegram from 'assets/icons/telegram.svg';
import whatsapp from 'assets/icons/whatsapp.svg';

import BlockLayout from '../../../BlockLayout/BlockLayout';

import styles from './Footer.module.scss';

const Footer = () => (
  <BlockLayout outerClassName={styles.outer}>
    <div className={styles.contacts}>

      <div>
        <div className={styles.info}>
          <Link href="tel:+79275866646"><Image src={phone} alt="" priority /></Link>
          <div className={styles.tel}>
            <div>+7 927 586 66 46</div>
            <div>Астрахань</div>
          </div>
          <div className={styles.social}>
            <Link href="https://www.instagram.com/supermebel30/?igshid=YmMyMTA2M2Y%3D" target="_blank"><Image src={instagram} alt="instagram" /></Link>
            <Link href="https://wa.me/message/HTNPU4JJJ75HD1" target="_blank"><Image src={whatsapp} alt="whatsapp" /></Link>
            <Link href="https://t.me/Supermebel3O" target="_blank"><Image src={telegram} alt="telegram" /></Link>
          </div>
        </div>

        <div className={styles.info}>
          <Link href="tel:+77785129366"><Image src={phone} alt="" priority /></Link>
          <div className={styles.tel}>
            <div>+7 778 512 93 66</div>
            <div>Атырау</div>
          </div>
          <div className={styles.social}>
            <Link href="https://instagram.com/supermebel06?igshid=YWJhMjlhZTc" target="_blank"><Image src={instagram} alt="instagram" /></Link>
            <Link href="https://wa.me/message/HIBA7IP2JYEBC1" target="_blank"><Image src={whatsapp} alt="whatsapp" /></Link>
            <Link href="https://t.me/supermebel06" target="_blank"><Image src={telegram} alt="telegram" /></Link>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <Link href="mailto:supermebel30@yandex.ru"><Image src={email} alt="email" /></Link>
        <div>
          <div className={styles.infoTitle}>supermebel30@yandex.ru</div>
          <div>Ответим на все вопросы</div>
        </div>
      </div>

    </div>
    <div className={styles.rights}>
      <div>© ИП Мусаев М.</div>
      <div>Все права защищены.</div>
    </div>

  </BlockLayout>
);

export default Footer;
