export interface NewsList {
  hits: News[] | null;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: any;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: any;
  serverTimeMS: number;

}
export interface News {
  created_at: string;
  title: string;
  url: string | null;
  author: string;
  points: number;
  objectID: string;
  id: string;
  story_text?: string | null;
  comment_text?: null;
  num_comments?: number | null;
  story_id?: null;
  story_title?: null;
  story_url?: null;
  parent_id?: number | null;
  created_at_i: number;
  relevancy_score?: number | null;
}

export interface NewsParsed {
  author: string;
  points: number;
  objectID: string;
  title: string;
}
