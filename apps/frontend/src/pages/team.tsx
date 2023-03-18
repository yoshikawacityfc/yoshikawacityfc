import { MainLayout } from "@/components/Layout";

import { Staffs } from "@/features/staffs/components";
import { NextPage } from "next";

const Team: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs />
      </section>
    </MainLayout>
  );
};

export default Team;
