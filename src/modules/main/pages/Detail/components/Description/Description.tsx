import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';

import { Title } from 'shared/components';
import { BlockLayout } from 'shared/layouts';
import { Button } from 'ui';
import normalizeValue from 'utils/normalizeValue';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Description.module.scss';

import type { IDescriptionsProps } from './Description.types';

const Description = (props: IDescriptionsProps): JSX.Element => {
  const { setIsModalActive, work } = props;

  const [nav1, setNav1] = useState<undefined | Slider>(undefined);
  const [nav2, setNav2] = useState<undefined | Slider>(undefined);
  const [slider1, setSlider1] = useState<null | Slider>(null);
  const [slider2, setSlider2] = useState<null | Slider>(null);

  useEffect(() => {
    if (slider1) setNav1(slider1);
    if (slider2) setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: normalizeValue(work.image.length, 3, 6) - 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };

  return (
    <>
      <BlockLayout>
        <Title>
          Информация о товаре
        </Title>
      </BlockLayout>

      <BlockLayout outerClassName={styles.outer} innerClassName={styles.inner}>
        <div className={styles.app}>
          <div className={styles.wrapper}>
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={(slider) => setSlider1(slider)}
            >
              {work.image.map((slide) => (
                <div className={`${styles['slick-slide']} slick-slide`} key={slide}>
                  <Image className="slick-slide-image" src={slide} alt="" width={300} height={400} />
                </div>
              ))}
            </Slider>

            <div className={`thumbnail-slider-wrap ${styles['thumbnail-slider-wrap']}`}>
              <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
              >
                {work.image.map(
                  (slide) => (
                    <div className={`slick-slide slick-slide-mini ${styles['slick-slide-mini']}`} key={slide}>
                      <Image className="slick-slide-image mini" src={slide} alt="" width={60} height={90} />
                    </div>
                  ),
                )}
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.title}>
            <h1>{work.title}</h1>
          </div>
          <ul className={styles.portfolio}>
            {work.description.map(
              (item) => (
                <li key={item}>{item}</li>
              ),
            )}
          </ul>
          <Button
            variant="secondary"
            id="open-modal-form-btn"
            type="button"
            onClick={() => setIsModalActive(true)}
          >
            Рассчитать такой же вариант
          </Button>
        </div>
      </BlockLayout>
    </>
  );
};
export default Description;
