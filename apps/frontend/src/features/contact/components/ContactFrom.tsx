import { Button, FormLabel, Input, Textarea } from "@/components/Elements";
import { useForm } from "react-hook-form";

export const ContactForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 max-w-[20rem]">
        <FormLabel label="氏名" htmlFor="name" required>
          <Input required placeholder="吉川 太郎" {...register("name")} />
        </FormLabel>
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormLabel label="フリガナ" htmlFor="kana-name" required>
          <Input
            required
            placeholder="ヨシカワ タロウ"
            {...register("kana-name")}
          />
        </FormLabel>
      </div>

      <div className="mb-8 max-w-[40rem]">
        <FormLabel
          label="所属チーム/スクール名"
          htmlFor="team"
          description="所属のない方は無記入で問題ありません"
        >
          <Input placeholder="YOSHiKAWA CiTY FC" {...register("team")} />
        </FormLabel>
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormLabel label="保護者氏名" htmlFor="parent-name" required>
          <Input
            required
            placeholder="ヨシカワ サトル"
            {...register("parent-name")}
          />
        </FormLabel>
      </div>

      <div className="mb-8">
        <FormLabel label="住所" htmlFor="address" required>
          <Input
            required
            placeholder="埼玉県吉川市XX X-X XXXマンション XXX号室"
            {...register("address")}
          />
        </FormLabel>
      </div>

      <div className="mb-8 max-w-[30rem]">
        <FormLabel label="メールアドレス" htmlFor="email" required>
          <Input
            required
            placeholder="yoshikawa.city@example.com"
            {...register("email")}
          />
        </FormLabel>
      </div>

      <div className="mb-8 max-w-[15rem]">
        <FormLabel label="緊急連絡先" htmlFor="tel" required>
          <Input required placeholder="000-0000-0000" {...register("tel")} />
        </FormLabel>
      </div>

      <div className="mb-16">
        <FormLabel
          label="ご質問内容"
          htmlFor="question"
          description="ご質問内容等をご記入下さい"
        >
          <Textarea rows={10} {...register("question")} />
        </FormLabel>
      </div>

      <div className="w-3/4 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>
    </form>
  );
};
