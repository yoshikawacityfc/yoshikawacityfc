import { MainLayout } from "@/components/Layout";
import { ContactForm } from "@/features/contact/components";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64">
        <div className="max-w-[800px] m-auto px-4">
          <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
            お問い合わせ
          </h2>

          <ContactForm />
        </div>

        <div className="py-8 px-4 bg-tertiary mt-24">
          <div className="max-w-[800px] m-auto">
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
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
