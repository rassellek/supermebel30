import Slider from 'react-slick';

import Image from 'next/image';

import { Title } from 'shared/components';
import { BlockLayout } from 'shared/layouts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { REVIEWS } from '../../config/mocks';

import styles from './Gallery.module.scss';

const Gallery = (): JSX.Element => {
  const settingsMain = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <>
      <BlockLayout>
        <Title>
          Отзывы
        </Title>
      </BlockLayout>

      <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>
        <div className={styles.app}>
          <div className={styles.wrapper}>
            <Slider {...settingsMain}>
              {REVIEWS.map((slide) => (
                <div className={`${styles['slick-slide']} slick-slide`} key={slide}>
                  <Image className="slick-slide-image" src={slide} alt="" width={300} height={400} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </BlockLayout>
    </>
  );
};

export default Gallery;
