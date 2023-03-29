import React from 'react';

import Head from 'next/head';

import { MainPages } from '../modules/main';

const About = () => (
  <>
    <Head>
      <title>О компании | Supermebel</title>
      <meta
        name="description"
        content="Корпусная мебель на заказ в Астрахани и Атырау. Бесплатные консультация и замер. Кухонные гарнитуры, шкафы-купе, гардеробные. Оставьте заявку на сайте и мы с вами свяжемся! "
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainPages.About />
  </>

);

export default About;
