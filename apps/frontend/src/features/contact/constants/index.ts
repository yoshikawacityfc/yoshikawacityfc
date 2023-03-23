import { Option } from "@/components/Elements";
import { ContactTemplate } from "../types";

export const CONTACT_TYPE: Option[] = [
  { value: "contact", label: "お問い合わせ" },
  { value: "school", label: "スクール体験申し込み" },
  { value: "jr-youth", label: "Jrユース体験申し込み" },
];

export const CONTACT_TEMPLATE: ContactTemplate[] = [
  { type: "contact", template: "" },
  {
    type: "school",
    template: `生年月日: 
電話番号: 
身長: 
体重: 
サッカー経歴: 
ポジション: 
ストロングポイント: 
ウィークポイント: `,
  },
  { type: "jr-youth", template: "" },
];
