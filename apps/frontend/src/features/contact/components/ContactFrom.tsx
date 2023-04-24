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
import { supabase } from "@/lib/supabase";
import { useQuery } from "@apollo/client";
import { queryContactCategoriesCollection } from "@/lib/gql/contacts";
import { OrderByDirection } from "@/__generated__/graphql";

interface ContactInput {
  name: string;
  nameKana: string;
  team: string;
  parentName: string;
  address: string;
  email: string;
  phoneNumber: string;
  contactContent: string;
}

const schema = z.object({
  name: ZodSchema.name(),
  nameKana: ZodSchema.nameKana(),
  email: ZodSchema.email(),
  phoneNumber: ZodSchema.phoneNumber(),
  contactContent: ZodSchema.contactContent(),
});

export const ContactForm = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryContactCategoriesCollection, {
    variables: {
      orderBy: {
        sort: OrderByDirection.AscNullsFirst,
      },
    },
  });

  const contactOptions =
    data?.contact_categoriesCollection?.edges.map((item) => {
      return {
        value: item?.node.id,
        label: item?.node.name,
        template: item?.node.contact_templates?.content,
      };
    }) || [];

  const router = useRouter();

  const [selectedContactOptionValue, setSelectedContactOptionValue] =
    useState("");
  const [errorMessages, setErrorMessages] =
    useState<FieldErrors<ContactInput>>();
  const [apiErrorMessage, setApiErrorMessage] = useState("");
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
    if (!loading && data) {
      contactTypeChange(data.contact_categoriesCollection?.edges[0]?.node.id);
    }
  }, [loading, data]);

  useEffect(() => {
    setErrorMessages(errors);
  }, [errors]);

  const onSubmit = async (contactInput: ContactInput) => {
    setApiErrorMessage("");

    // NOTE: SupabaseのGraphQLの仕様でInsertだけPolicyをpublicにできないためSupabaseClientを使用
    const { error } = await supabase.from("contacts").insert({
      name: contactInput.name,
      name_kana: contactInput.nameKana,
      email: contactInput.email,
      phone_number: contactInput.phoneNumber,
      content: contactInput.contactContent,
    });

    if (error) {
      setApiErrorMessage("お問い合わせの送信が失敗しました。");
      return;
    }

    router.push(PagePaths.contactComplete());
  };

  const contactTypeChange = (optionValue: string) => {
    setSelectedContactOptionValue(optionValue);

    const contactTemplate = contactOptions.find(
      (item) => item.value === optionValue
    );

    if (contactTemplate) {
      setContactDetail(contactTemplate.template || "");
    }
  };

  const handleContactTypeChange = (optionValue: string) => {
    contactTypeChange(optionValue);
  };

  const handleContactDetailChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: バリデーション条件クリア後にエラーをクリアする
    clearErrors("contactContent");
    setContactDetail(e.target.value);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 max-w-[20rem]">
        <FormItem label="お問い合わせ内容" htmlFor="contactType">
          <Select
            options={contactOptions}
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
          htmlFor="nameKana"
          required
          errorMessage={errorMessages?.nameKana?.message}
        >
          <Input
            placeholder="ヨシカワ タロウ"
            isError={!!errorMessages?.nameKana?.message}
            {...register("nameKana")}
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
          htmlFor="phoneNumber"
          required
          errorMessage={errorMessages?.phoneNumber?.message}
        >
          <Input
            placeholder="000-0000-0000"
            isError={!!errorMessages?.phoneNumber?.message}
            {...register("phoneNumber")}
          />
        </FormItem>
      </div>

      <div className="mb-16">
        <FormItem
          label="お問い合わせ内容"
          htmlFor="contact"
          description="お問い合わせ内容等をご記入下さい"
          errorMessage={errorMessages?.contactContent?.message}
        >
          <Textarea
            rows={10}
            isError={!!errorMessages?.contactContent?.message}
            value={contactDetail}
            {...register("contactContent")}
            onChange={handleContactDetailChange}
          />
        </FormItem>
      </div>

      <div className="w-3/4 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>

      {apiErrorMessage && (
        <p className="text-red-500 mt-4 text-center">
          {/* <Icon icon={faCircleExclamation} color="danger" /> */}
          <span className="ml-2">{apiErrorMessage}</span>
        </p>
      )}
    </form>
  );
};
