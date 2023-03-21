import { Button, FormItem, Input, Textarea } from "@/components/Elements";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";
import { ZodSchema } from "@/lib/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

interface ContactInput {
  name: string;
  kanaName: string;
  team: string;
  parentName: string;
  address: string;
  email: string;
  emergencyContact: string;
  question: string;
}

const schema = z.object({
  name: ZodSchema.name(),
  kanaName: ZodSchema.kanaName(),
  team: ZodSchema.team(),
  parentName: ZodSchema.parentName(),
  address: ZodSchema.address(),
  email: ZodSchema.email(),
  emergencyContact: ZodSchema.emergencyContact(),
  question: ZodSchema.question(),
});

export const ContactForm = (): JSX.Element => {
  const [errorMessages, setErrorMessages] =
    useState<FieldErrors<ContactInput>>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  const onSubmit = (formData: ContactInput) => console.log(formData);

  return (
    <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 max-w-[20rem]">
        <FormItem
          label="氏名"
          htmlFor="name"
          required
          errorMessage={errorMessages?.name?.message}
        >
          <Input
            placeholder="吉川 太郎"
            isError={!!errorMessages?.name?.message}
            {...register("name")}
          />
        </FormItem>
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormItem
          label="フリガナ"
          htmlFor="kanaName"
          required
          errorMessage={errorMessages?.kanaName?.message}
        >
          <Input
            placeholder="ヨシカワ タロウ"
            isError={!!errorMessages?.kanaName?.message}
            {...register("kanaName")}
          />
        </FormItem>
      </div>

      <div className="mb-8 max-w-[40rem]">
        <FormItem
          label="所属チーム/スクール名"
          htmlFor="team"
          description="所属のない方は無記入で問題ありません"
          errorMessage={errorMessages?.team?.message}
        >
          <Input
            isError={!!errorMessages?.team?.message}
            placeholder="YOSHiKAWA CiTY FC"
            {...register("team")}
          />
        </FormItem>
      </div>

      <div className="mb-8 max-w-[20rem]">
        <FormItem
          label="保護者氏名"
          htmlFor="parentName"
          required
          errorMessage={errorMessages?.parentName?.message}
        >
          <Input
            placeholder="吉川 悟"
            isError={!!errorMessages?.parentName?.message}
            {...register("parentName")}
          />
        </FormItem>
      </div>

      <div className="mb-8">
        <FormItem
          label="住所"
          htmlFor="address"
          required
          errorMessage={errorMessages?.address?.message}
        >
          <Input
            placeholder="埼玉県吉川市XX X-X XXXマンション XXX号室"
            isError={!!errorMessages?.address?.message}
            {...register("address")}
          />
        </FormItem>
      </div>

      <div className="mb-8 max-w-[30rem]">
        <FormItem
          label="メールアドレス"
          htmlFor="email"
          required
          errorMessage={errorMessages?.email?.message}
        >
          <Input
            placeholder="yoshikawa.city@example.com"
            isError={!!errorMessages?.email?.message}
            {...register("email")}
          />
        </FormItem>
      </div>

      <div className="mb-8 max-w-[15rem]">
        <FormItem
          label="緊急連絡先"
          htmlFor="emergencyContact"
          required
          errorMessage={errorMessages?.emergencyContact?.message}
        >
          <Input
            placeholder="000-0000-0000"
            isError={!!errorMessages?.emergencyContact?.message}
            {...register("emergencyContact")}
          />
        </FormItem>
      </div>

      <div className="mb-16">
        <FormItem
          label="ご質問内容"
          htmlFor="question"
          description="ご質問内容等をご記入下さい"
          errorMessage={errorMessages?.question?.message}
        >
          <Textarea
            rows={10}
            isError={!!errorMessages?.question?.message}
            {...register("question")}
          />
        </FormItem>
      </div>

      <div className="w-3/4 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>
    </form>
  );
};
