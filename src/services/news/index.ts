import axios from 'axios';
import { News, NewsList } from '@/services/news/types';

axios.defaults.baseURL = process.env.API_URL

const NewsService = {
  async getAll(): Promise<News[] | null> {
    try {
      const { data } = await axios.get<NewsList>('/search', {
        params: {
          'tags': 'story',
          'hitsPerPage': 10,
        }
      })

      return data.hits;
    } catch (err) {
      console.log('err', err);
    }

    return null;
  },
  async getById(id: string): Promise<News | null> {
    try {
      const { data } = await axios.get(`/items/${id}`)

      return data;
    } catch (err) {
      console.log('err', err);
    }

    return null;
  }
}

export default NewsService
