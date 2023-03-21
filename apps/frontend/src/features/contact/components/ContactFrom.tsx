import { Button, FormInput } from "@/components/Elements";
import { FormTextarea } from "@/components/Elements/Textarea";

export const ContactForm = (): JSX.Element => {
  return (
    <form className="m-auto">
      <div className="mb-8 max-w-[20rem]">
        <FormInput
          label="氏名"
          htmlFor="name"
          placeholder="吉川 太郎"
          required
        />
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormInput
          label="フリガナ"
          htmlFor="kana-name"
          placeholder="ヨシカワ タロウ"
          required
        />
      </div>

      <div className="mb-8 max-w-[40rem]">
        <FormInput
          label="所属チーム/スクール名"
          htmlFor="team"
          description="所属のない方は無記入で問題ありません"
          placeholder="YOSHiKAWA CiTY FC"
        />
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormInput
          label="保護者氏名"
          htmlFor="parent-name"
          placeholder="ヨシカワ サトル"
          required
        />
      </div>

      <div className="mb-8">
        <FormInput
          label="住所"
          htmlFor="address"
          placeholder="埼玉県吉川市XX X-X XXXマンション XXX号室"
          required
        />
      </div>

      <div className="mb-8 max-w-[30rem]">
        <FormInput
          label="メールアドレス"
          htmlFor="email"
          placeholder="yoshikawa.city@example.com"
          required
        />
      </div>

      <div className="mb-8 max-w-[15rem]">
        <FormInput
          label="緊急連絡先"
          htmlFor="tel"
          placeholder="000-0000-0000"
          required
        />
      </div>

      <div className="mb-16">
        <FormTextarea
          label="ご質問内容"
          htmlFor="question"
          description="ご質問内容等をご記入下さい"
          rows={10}
          required
        />
      </div>

      <div className="w-3/4 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>
    </form>
  );
};
