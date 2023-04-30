import { FC } from 'react';
import { NewsDetailProps } from '@/components/NewsDetail/types';

import styles from './style.module.scss'

export const NewsDetail: FC<NewsDetailProps> = ({ newsDetail }) => {
  return (
    <div className={styles.container}>
      <h2>
        {newsDetail?.title}
      </h2>
      <p>
        Author: {newsDetail?.author}
      </p>
      <p>
        Points: {newsDetail?.points}
      </p>
    </div>
  );
};

export default NewsDetail;
