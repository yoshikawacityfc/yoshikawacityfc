import { Icon } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { PagePaths } from "@/lib/pagePaths";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";
import Link from "next/link";

const ContactComplete: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64 m-auto max-w-[1000px] mb-24 px-4">
        <h2 className="font-semibold text-5xl text-center mb-24">送信完了</h2>
        <img
          src="/assets/image/send-complete.svg"
          alt="送信完了"
          className="w-[250px] m-auto"
        />

        <div className="bg-tertiary p-4 my-16 rounded">
          <p className="mb-2">お問い合わせの送信が完了しました。</p>
          <p className="mb-2">
            送信後、y.cityfc@yoshikawa-fc.com（稲葉）からご返信させて頂きます。
          </p>
          <p className="mb-2">
            お問い合わせから3営業日が過ぎても返信がない場合はお手数おかけしますが、お問い合わせ下さい。
          </p>
          <p className="mb-2">
            ※y.cityfc@yoshikawa-fc.comからのメールが受信できるよう設定お願いいたします。
          </p>
          <p>
            メールが届かない場合迷惑メールフォルダに届いてる事もありますので合わせてご確認お願いいたします。
          </p>
        </div>

        <Link href={PagePaths.index()} className="block text-center">
          <Icon icon={faHome} size="xlarge" className="mr-2" />
          <span className="text-xl text-primary font-semibold">
            トップページへ戻る
          </span>
        </Link>
      </section>
    </MainLayout>
  );
};

export default ContactComplete;
