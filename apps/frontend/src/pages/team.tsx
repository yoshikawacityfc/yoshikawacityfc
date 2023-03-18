import { MainLayout } from "@/components/Layout";

import { Advisor } from "@/features/advisor/components";
import { Staffs } from "@/features/staffs/components";
import { NextPage } from "next";

const Team: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs />
      </section>

      <section className="mt-64">
        <Staffs />
      </section>

      <section className="mt-64">
        <Advisor />
      </section>

      <section className="my-64">
        <div className="px-4 max-w-[1000px] m-auto">
          <h3 className="text-4xl mb-8">“サッカー以外でも交流していきます”</h3>

          <p className="mb-4">
            このようにサッカーに関係した専門家との交流をはじめ、サッカー以外の体験や、交流などを通じて様々な人と関わるなかで、社会性を身につけ、人としての成長に繋げていきます。
          </p>

          <p className="mb-4">
            人としての成長がサッカーの上達を早め、人生の選択肢を増やす事になるとクラブでは考えています。
          </p>

          <p className="mb-4">
            一見、サッカーとは関係のないような活動にも一生懸命、前向きに取り組める選手を待っています。
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Team;
