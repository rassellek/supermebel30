import { ParsedUrlQuery } from 'querystring';

import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { WORKS } from 'config/mocks';

import { MainPages } from '../../modules/main';

import type { IWork } from 'config/mocks.types';

interface IParams extends ParsedUrlQuery {
  id: string,
}

interface IWorkProps {
  work: IWork,
}

export const getStaticPaths = async () => ({
  paths: WORKS.map((work) => ({ params: { id: work.id.toString() } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  return {
    props: { work: WORKS[Number(id) - 1] },
  };
};

const Work = (props: IWorkProps) => {
  const { work } = props;

  return (
    <>
      <Head>
        <title>О товаре | Supermebel</title>
        <meta
          name="description"
          content="Корпусная мебель на заказ в Астрахани и Атырау. Бесплатные консультация и замер. Кухонные гарнитуры, шкафы-купе, гардеробные. Оставьте заявку на сайте и мы с вами свяжемся! "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPages.Detail work={work} />
    </>
  );
};

export default Work;
