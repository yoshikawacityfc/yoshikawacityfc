import { Icon } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { EntryContent } from "@/features/entry/components";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

const EntrySchool: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64 max-w-[1000px] m-auto px-8 pb-32">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          スクール入会
        </h2>

        <EntryContent
          orderNumber={1}
          title="入会体験申込"
          description="各練習日または入会体験会にご参加ください。お問合せフォームまたはメールにてお申込ください。"
          imageSrc="/entry.png"
        />

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <EntryContent
          orderNumber={2}
          title="体験会に参加"
          description="体験当日はサッカーができる格好（ボール、すねあて、水筒、着替え）をお持ち頂き、開始時間までに会場にお越しいただき、スタッフにお声かけください。"
          imageSrc="/training.png"
        />

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <EntryContent
          orderNumber={3}
          title="書類提出・諸費用納入"
          description="お渡しする書類にそって入会の準備をして頂きます。入会書類をご記入頂き次回スクール時にスタッフに書類をお渡しください。"
          imageSrc="/document.png"
        />

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <EntryContent
          orderNumber={4}
          title="完了"
          description="仲間達と一緒にサッカーを楽しみましょう！"
          imageSrc="/complete.png"
        />
      </section>
    </MainLayout>
  );
};

export default EntrySchool;
