export interface NewsType {
  title: string;
  id: any;
  slug: string;
  published_at?: any;
  assets?: {
    src: string;
    file_name: string;
  } | null;
}

export interface NewsNodeType {
  node: NewsType;
}
