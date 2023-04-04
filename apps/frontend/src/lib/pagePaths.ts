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
  export const news = (id?: any): string => {
    if (id) {
      return `/news/${id}`;
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
   * お問い合わせ
   */
  export const contact = (): string => {
    return "/contact";
  };

  /**
   * お問い合わせ完了
   */
  export const contactComplete = (): string => {
    return "/contact/complete";
  };
}
