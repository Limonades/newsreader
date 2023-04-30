import { News, NewsParsed } from '@/services/news/types';

export const parseNews = (news: News[] | null): NewsParsed[] | null => {
  return news && news.map((item) => {
    const {
      objectID,
      title,
      author,
      points
    } = item;

    return {
      objectID,
      title,
      author,
      points
    }
  })
}
