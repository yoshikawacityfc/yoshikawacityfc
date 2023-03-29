import { Icon } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { EntryContent } from "@/features/entry/components";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

const Entry: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64 max-w-[1000px] m-auto px-8 pb-32">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          入会案内
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
          description="体験日当日はサッカーができる格好と会場費（500円）をお待ちになりお越しください。（ボール・すねあて・水筒・着替え）"
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
          description="お渡しする書類にそって入会の準備をしていただきます。事務局からの連絡後、入会金・年会費・月会費（初回２カ月分）・保険代をお振込みください。"
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

export default Entry;
