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

export interface NewsType {
  title: string;
  id: any;
  slug: string;
  published_at?: any;
  assets?: {
    src: string;
    file_name: string;
    width: number;
    height: number;
  } | null;
}

export interface NewsNodeType {
  node: NewsType;
}
