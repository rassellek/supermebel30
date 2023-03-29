import Image from 'next/image';
import Link from 'next/link';

import emailWhite from 'assets/icons/email.svg';
import emailBlack from 'assets/icons/email_black.svg';
import instagramWhite from 'assets/icons/instagram.svg';
import instagramBlack from 'assets/icons/instagram_black.svg';
import phoneWhite from 'assets/icons/phone.svg';
import phoneBlack from 'assets/icons/phone_black.svg';
import telegramWhite from 'assets/icons/telegram.svg';
import telegramBlack from 'assets/icons/telegram_black.svg';
import whatsappWhite from 'assets/icons/whatsapp.svg';
import whatsappBlack from 'assets/icons/whatsapp_black.svg';
import { Title } from 'shared/components';
import { BlockLayout } from 'shared/layouts';
import { Button } from 'ui';

import styles from './Info.module.scss';

const Info = (): JSX.Element => (
  <BlockLayout innerClassName={styles.inner}>
    <Title>
      Контакты
    </Title>

    <h2>Вы можете связаться с нами любым
      удобным для вас способом
      или оставить заявку на сайте
    </h2>

    <div className={styles.wrapper}>

      <p className={styles.content}>
        <span className={styles.subtle}>
          Наши телефоны для связи:
        </span>
        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="tel:+79275866646" className={styles.link}>
            <span className={styles.line}>
              <Image src={phoneBlack} alt="" priority className={styles.black} />
              <Image src={phoneWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Астрахань</span>
                <span>+7 927 586 66 46</span>
              </span>
            </span>
          </Link>
        </Button>

        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="tel:+77785129366" className={styles.link}>
            <span className={styles.line}>
              <Image src={phoneBlack} alt="" priority className={styles.black} />
              <Image src={phoneWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Атырау</span>
                <span>+7 778 512 93 66</span>
              </span>
            </span>
          </Link>
        </Button>
      </p>

      <p className={styles.content}>
        <span className={styles.subtle}>
          Наша почта для связи:
        </span>
        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="mailto:supermebel30@yandex.ru" className={styles.link}>
            <span className={styles.line}>
              <Image src={emailBlack} alt="" priority className={styles.black} />
              <Image src={emailWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Почта</span>
                <span>supermebel30@yandex.ru</span>
              </span>
            </span>
          </Link>
        </Button>

      </p>

    </div>

    <h2>Наши социальные сети для связи:</h2>

    <div className={styles.social}>

      <p className={styles.content}>
        <span className={styles.subtle}>
          Наш Instagram:
        </span>
        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://www.instagram.com/supermebel30/?igshid=YmMyMTA2M2Y%3D" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={instagramBlack} alt="" priority className={styles.black} />
              <Image src={instagramWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Астрахань</span>
                <span>@supermebel30</span>
              </span>
            </span>
          </Link>
        </Button>

        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://instagram.com/supermebel06?igshid=YWJhMjlhZTc" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={instagramBlack} alt="" priority className={styles.black} />
              <Image src={instagramWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Атырау</span>
                <span>@supermebel06</span>
              </span>
            </span>
          </Link>
        </Button>

      </p>

      <p className={styles.content}>
        <span className={styles.subtle}>
          Наш WhatsApp:
        </span>
        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://wa.me/message/HTNPU4JJJ75HD1" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={whatsappBlack} alt="" priority className={styles.black} />
              <Image src={whatsappWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Астрахань</span>
                <span>+7 988 174 35 74 </span>
              </span>
            </span>
          </Link>
        </Button>

        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://wa.me/message/HTNPU4JJJ75HD1" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={whatsappBlack} alt="" priority className={styles.black} />
              <Image src={whatsappWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Атырау</span>
                <span>+7 778 512 93 66</span>
              </span>
            </span>
          </Link>
        </Button>
      </p>

      <p className={styles.content}>
        <span className={styles.subtle}>
          Наш Telegram:
        </span>
        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://t.me/Supermebel3O" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={telegramBlack} alt="" priority className={styles.black} />
              <Image src={telegramWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Астрахань</span>
                <span>@supermebel30</span>
                <span />
              </span>
            </span>
          </Link>
        </Button>

        <Button
          variant="secondary"
          id="open-modal-form-btn"
          type="button"
        >
          <Link href="https://t.me/supermebel06" target="_blank" className={styles.link}>
            <span className={styles.line}>
              <Image src={telegramBlack} alt="" priority className={styles.black} />
              <Image src={telegramWhite} alt="" priority className={styles.white} />
              <span className={styles.block}>
                <span>Атырау</span>
                <span>@supermebel06</span>
                <span />
              </span>
            </span>
          </Link>
        </Button>
      </p>

    </div>

    <h2>Наш главный офис</h2>

    <div className={styles.wrapper}>
      <p className={styles.content}>
        <span className={styles.subtle}>
          Адрес: г. Астрахань, Ленинский район, ул. Савушкина,
          д. 6, домофон 5, 1 этаж, кв.105 офис, 41405.
        </span>
        <span className={styles.subtle}>Телефоны для связи с офисом:</span>
        <span className={styles.block}>
          <span>+7 937 602 09 00</span>
          <span>+7 851 262 09 00</span>
          <span>+7 927 586 66 46</span>
        </span>
      </p>
      <iframe
        title="address"
        className={styles.map}
        src="https://maps.google.com/maps?q=46.373525, 48.048936&z=17&output=embed"
        loading="lazy"
      />
    </div>
    <h2>Перед приездом в офис свяжитесь с нами.</h2>
  </BlockLayout>
);

export default Info;
