type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type staffs<T='get'> = Structure<
T,
{
  /**
   * 氏名
   */
  name: string
  /**
   * 役割
   */
  position?: string
  /**
   * ひとこと
   */
  oneWord?: string
  /**
   * 説明文
   */
  description?: string
  /**
   * 資格
   */
  license?: string
  /**
   * 経歴
   */
  career?: string
  /**
   * 指導実績
   */
  coachingAchievement?: string
  /**
   * 選手歴
   */
  playerHistory?: string
  /**
   * 選手実績
   */
  playerAchievement?: string
  /**
   * プロフィール画像
   */
  profileImage?: { url: string, width: number, height: number }
}>

export type news<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 内容
   */
  content?: any
  /**
   * アイキャッチ
   */
  eyecatch?: { url: string, width: number, height: number }
}>

export type advisor<T='get'> = Structure<
T,
{
  /**
   * 氏名
   */
  name: string
  /**
   * 役割
   */
  position?: string
  /**
   * 説明文
   */
  description?: string
  /**
   * プロフィール画像
   */
  profileImage?: { url: string, width: number, height: number }
}>


export interface EndPoints {
  get: {
    'staffs': staffs<'get'>
    'news': news<'get'>
    'advisor': advisor<'get'>
  }
  gets: {
    'staffs': staffs<'gets'>
    'news': news<'gets'>
    'advisor': advisor<'gets'>
  }
  post: {
    'staffs': staffs<'post'>
    'news': news<'post'>
    'advisor': advisor<'post'>
  }
  put: {
    'staffs': staffs<'put'>
    'news': news<'put'>
    'advisor': advisor<'put'>
  }
  patch: {
    'staffs': staffs<'patch'>
    'news': news<'patch'>
    'advisor': advisor<'patch'>
  }
}
