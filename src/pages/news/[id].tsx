import { FC } from 'react';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import NewsService from '@/services/news';
import { NewsParsed } from '@/services/news/types';
import NewsDetail from '@/components/NewsDetail';
import Link from 'next/link';
import { parseNewsDetail } from '@/utils/parseNewsDetail';

interface NewsProps {
  news: NewsParsed | null
}

export const News: FC<NewsProps> = ({ news }) => {
  if (!news) {
    return <div>Something went wrong...</div>
  }

  return (
    <Layout title={news.title} description={news.title}>
      <NewsDetail newsDetail={news} />
      <Link href='/' className='btnColor'>← Back to main</Link>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const news = await NewsService.getAll();


  return {
    paths: news?.map((item)=> ({
      params: {
        id: `${item.objectID}`
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<NewsProps> = async ({params}) => {
  const news = await NewsService.getById(`${params?.id}`);

  return {
    props: {
      news: parseNewsDetail(news)
    },
    revalidate: 60
  }
}

export default News;
