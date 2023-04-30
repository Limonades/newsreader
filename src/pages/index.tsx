import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google'
import { FC } from 'react';
import Layout from '@/components/Layout';
import NewsService from '@/services/news';
import { NewsParsed } from '@/services/news/types';
import NewsList from '@/components/NewsList';
import { parseNews } from '@/utils/parseNews';

// const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  news: NewsParsed[] | null
}

const Home: FC<HomeProps> = ({ news }) => {
  return (
    <Layout description='News list'>
      <NewsList news={news} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const news = await NewsService.getAll();

  return {
    props: {
      news: parseNews(news)
    },
    revalidate: 60
  }
}

export default Home;
