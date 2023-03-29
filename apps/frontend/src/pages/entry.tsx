import { Icon } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

const Entry: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64 max-w-[1000px] m-auto px-8 pb-32">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          入会案内
        </h2>

        {/* 入会体験申し込み */}
        <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
          <div>
            <p className="text-primary font-bold text-6xl sm:text-7xl mb-8">
              01
            </p>
            <h3 className="font-semibold text-3xl sm:text-4xl mb-4">
              入会体験申込
            </h3>
            <p>
              各練習日または入会体験会にご参加ください。お問合せフォームまたはメールにてお申込ください。
            </p>
          </div>

          <img src="/entry.png" alt="entry" className="m-auto" />
        </div>

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
          <div>
            <p className="text-primary font-bold text-6xl sm:text-7xl mb-8">
              02
            </p>
            <h3 className="font-semibold text-3xl sm:text-4xl mb-4">
              体験会に参加
            </h3>
            <p>
              体験日当日はサッカーができる格好と会場費（500円）をお待ちになりお越しください。（ボール・すねあて・水筒・着替え）
            </p>
          </div>

          <img src="/training.png" alt="entry" className="m-auto" />
        </div>

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
          <div>
            <p className="text-primary font-bold text-6xl sm:text-7xl mb-8">
              03
            </p>
            <h3 className="font-semibold text-3xl sm:text-4xl mb-4">
              書類提出・諸費用納入
            </h3>
            <p>
              お渡しする書類にそって入会の準備をしていただきます。事務局からの連絡後、入会金・年会費・月会費（初回２カ月分）・保険代をお振込みください。
            </p>
          </div>

          <img src="/document.png" alt="entry" className="m-auto" />
        </div>

        <Icon
          icon={faAnglesDown}
          size="7xlarge"
          className="m-auto block my-8"
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
          <div>
            <p className="text-primary font-bold text-6xl sm:text-7xl mb-8">
              04
            </p>
            <h3 className="font-semibold text-3xl sm:text-4xl mb-4">完了</h3>
            <p>仲間達と一緒にサッカーを楽しみましょう</p>
          </div>

          <img src="/complete.png" alt="entry" className="m-auto" />
        </div>
      </section>
    </MainLayout>
  );
};

export default Entry;
