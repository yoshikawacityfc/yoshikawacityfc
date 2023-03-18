import { MainLayout } from "@/components/Layout";

import { Advisor } from "@/features/advisor/components";
import { Staffs } from "@/features/staffs/components";
import { TrainingInfo } from "@/features/training-info/components";
import { NextPage } from "next";

const Team: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs />
      </section>

      <section className="mt-64">
        <Advisor />
      </section>

      <section>
        <TrainingInfo />
      </section>
    </MainLayout>
  );
};

export default Team;
