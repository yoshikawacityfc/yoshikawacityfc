import { MainLayout } from "@/components/Layout";
import { Advisor } from "@/features/advisor/components";
import { AdvisorProfile } from "@/features/advisor/types";
import { Staffs } from "@/features/staffs/components";
import { StaffProfile } from "@/features/staffs/types";
import { TrainingInfo } from "@/features/training-info/components";
import { client } from "@/lib/client";
import { GetStaticProps, NextPage } from "next";

interface TeamPageProps {
  staffs: StaffProfile[];
  advisors: AdvisorProfile[];
}

const TeamPage: NextPage<TeamPageProps> = ({ staffs, advisors }) => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs staffs={staffs} />
      </section>

      <section className="mt-64">
        <Advisor advisors={advisors} />
      </section>

      <section>
        <TrainingInfo />
      </section>
    </MainLayout>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  const data = await client.get({
    endpoint: "staffs",
  });

  const staffs = data.contents
    .map((content: any) => {
      if (!content.category.includes("スタッフ")) return;

      return {
        id: content.id,
        name: content.name,
        position: content.position ?? null,
        oneWord: content.oneWord ?? null,
        description: content.description ?? null,
        license: content.license ?? null,
        career: content.career ?? null,
        coachingAchievement: content.coachingAchievement ?? null,
        playerHistory: content.playerHistory ?? null,
        playerAchievement: content.playerAchievement ?? null,
        profileImage: content.profileImage ?? null,
      };
    })
    .filter((staff: any) => staff !== undefined);

  const advisors = data.contents
    .map((content: any) => {
      if (!content.category.includes("アドバイザー")) return;

      return {
        id: content.id,
        name: content.name,
        position: content.position ?? null,
        description: content.description ?? null,
        profileImage: content.profileImage ?? null,
      };
    })
    .filter((staff: any) => staff !== undefined);

  return {
    props: {
      staffs,
      advisors,
    },
    revalidate: 10,
  };
};
