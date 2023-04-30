import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { MetaProps } from './types'

const Meta: FC< PropsWithChildren<MetaProps>> = ({
  title = 'News reader',
  description,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        {description ? (
          <>
            <meta name='description' content={description}/>
            <meta name='og:title' content={title}/>
            <meta name='og:description' content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow'/>
        )}
      </Head>

      {children}
    </>
  );
};

export default Meta;
