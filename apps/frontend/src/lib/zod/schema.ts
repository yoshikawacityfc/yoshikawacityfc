import * as z from "zod";

export namespace ZodSchema {
  /**
   * 氏名
   */
  export const name = () => {
    return z.string().min(1, { message: "氏名を入力してください" });
  };

  /**
   * フリガナ
   */
  export const kanaName = () => {
    return z.string().min(1, { message: "フリガナを入力してください" });
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
   * お問い合わせ内容
   */
  export const contact = () => {
    return z.string().max(1000, { message: "1000文字以内で入力してください" });
  };
}
