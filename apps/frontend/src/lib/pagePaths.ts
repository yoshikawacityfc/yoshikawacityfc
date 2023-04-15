export namespace PagePaths {
  /**
   * インデックス
   */
  export const index = (): string => {
    return "/";
  };

  /**
   * クラブコンセプト
   */
  export const concept = (): string => {
    return "/concept";
  };

  /**
   * チーム
   */
  export const team = (): string => {
    return "/team";
  };

  /**
   * お知らせ
   */
  export const news = (slug?: string): string => {
    if (slug) {
      return `/news/${slug}`;
    }

    return "/news";
  };

  /**
   * 入会案内
   */
  export const entry = (): string => {
    return "/entry";
  };

  /**
   * 入会案内-スクール
   */
  export const entrySchool = (): string => {
    return "/entry/school";
  };

  /**
   * お問い合わせ
   */
  export const contact = (): string => {
    return "/contact";
  };

  /**
   * お問い合わせ-完了
   */
  export const contactComplete = (): string => {
    return "/contact/complete";
  };
}
