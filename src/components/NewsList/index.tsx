import { FC } from 'react';
import { NewsListProps } from './types';
import styles from './styles.module.scss'
import Link from 'next/link';

const NewsList: FC<NewsListProps> = ({ news }) => {
  if (!news) {
    return <div className={styles.error}>Something went wrong...</div>
  }

  return (
    <section>
      <h2 className={styles.title}>The most popular stories</h2>
      <ul>
        {news.map((item) => (
          <li className={styles.listItem} key={item.objectID}>
            <h3>{item.title}</h3>
            <div className={styles.btnWrap}>
              <div>
                <span>{item.points}</span>
              </div>
              <Link href={`/news/${item.objectID}`} className='btnColor'>Show more..</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
