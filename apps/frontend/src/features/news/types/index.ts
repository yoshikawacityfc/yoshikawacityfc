export interface Thumbnail {
  url: string;
  height: number;
  width: number;
}

export interface NewsListItem {
  id: string;
  title: string;
  publishedAtString: string;
  thumbnail: Thumbnail | null;
}

export interface News {
  id: string;
  title: string;
  publishedAtString: string;
  content: string;
}
