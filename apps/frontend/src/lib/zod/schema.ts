import * as z from "zod";

export namespace ZodSchema {
  /**
   * 名前
   */
  export const name = () => {
    return z.string().min(1, { message: "名前を入力してください" });
  };

  /**
   * フリガナ
   */
  export const kanaName = () => {
    return z.string().min(1, { message: "フリガナを入力してください" });
  };

  /**
   * 所属チーム/スクール名
   */
  export const team = () => {
    return z.string().max(200, { message: "200文字以内で入力してください" });
  };

  /**
   * 保護者名
   */
  export const parentName = () => {
    return z.string().min(1, { message: "保護者名を入力してください" });
  };

  /**
   * 住所
   */
  export const address = () => {
    return z.string().min(1, { message: "住所を入力してください" });
  };

  /**
   * メールアドレス
   */
  export const email = () => {
    return z
      .string()
      .min(1, { message: "メールアドレスを入力してください" })
      .email({ message: "正しいメールアドレスを入力してください" });
  };

  /**
   * 緊急連絡先
   */
  export const emergencyContact = () => {
    return z.string().min(1, { message: "緊急連絡先を入力してください" });
  };

  /**
   * 質問内容
   */
  export const question = () => {
    return z.string().max(1000, { message: "1000文字以内で入力してください" });
  };
}
