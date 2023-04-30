import { News, NewsParsed } from '@/services/news/types';

export const parseNewsDetail = (news: News | null): NewsParsed | null => {
  if (!news) {
    return null;
  }

  const {
    id,
    title,
    author,
    points
  } = news;

  return {
    objectID: id,
    title,
    author,
    points
  }
}
