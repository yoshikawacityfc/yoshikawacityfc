import {
  Button,
  FormItem,
  Input,
  Select,
  Textarea,
} from "@/components/Elements";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";
import { ZodSchema } from "@/lib/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PagePaths } from "@/lib/pagePaths";
import { CONTACT_TEMPLATE, CONTACT_TYPE } from "../constants";

interface ContactInput {
  name: string;
  kanaName: string;
  team: string;
  parentName: string;
  address: string;
  email: string;
  emergencyContact: string;
  contact: string;
}

const schema = z.object({
  name: ZodSchema.name(),
  kanaName: ZodSchema.kanaName(),
  email: ZodSchema.email(),
  emergencyContact: ZodSchema.emergencyContact(),
  contact: ZodSchema.contact(),
});

export const ContactForm = (): JSX.Element => {
  const router = useRouter();

  const [selectedContactOptionValue, setSelectedContactOptionValue] = useState(
    CONTACT_TYPE[0].value
  );
  const [errorMessages, setErrorMessages] =
    useState<FieldErrors<ContactInput>>();
  const [contactDetail, setContactDetail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ContactInput>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  const onSubmit = (_: ContactInput) => {
    // TODO: 入力情報をDBに追加
    router.push(PagePaths.contactComplete());
  };

  const handleContactTypeChange = (optionValue: string) => {
    setSelectedContactOptionValue(optionValue);

    const contactTemplate = CONTACT_TEMPLATE.find(
      (item) => item.type === optionValue
    );

    if (contactTemplate) {
      setContactDetail(contactTemplate.template);
    }
  };

  const handleContactDetailChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: バリデーション条件クリア後にエラーをクリアする
    clearErrors("contact");
    setContactDetail(e.target.value);
  };

  return (
    <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 max-w-[20rem]">
        <FormItem label="お問い合わせ内容" htmlFor="contactType">
          <Select
            options={CONTACT_TYPE}
            selectedOptionValue={selectedContactOptionValue}
            onChange={handleContactTypeChange}
          />
        </FormItem>
      </div>

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
          label="お問い合わせ内容"
          htmlFor="contact"
          description="お問い合わせ内容等をご記入下さい"
          errorMessage={errorMessages?.contact?.message}
        >
          <Textarea
            rows={10}
            isError={!!errorMessages?.contact?.message}
            value={contactDetail}
            {...register("contact")}
            onChange={handleContactDetailChange}
          />
        </FormItem>
      </div>

      <div className="w-3/4 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>
    </form>
  );
};
