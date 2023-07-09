import { MainLayout } from "@/components/Layout";
import { Advisor } from "@/features/advisor/components";
import { AdvisorProfile } from "@/features/advisor/types";
import { Staffs } from "@/features/staffs/components";
import { StaffProfile } from "@/features/staffs/types";
import { TrainingInfo } from "@/features/training-info/components";
import { cmsClient } from "@/lib/cmsClient";
import { GetStaticProps, NextPage } from "next";

interface TeamPageProps {
  staffProfiles: StaffProfile[];
  advisorProfiles: AdvisorProfile[];
}

const TeamPage: NextPage<TeamPageProps> = ({
  staffProfiles,
  advisorProfiles,
}) => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs staffProfiles={staffProfiles} />
      </section>

      <section className="mt-64">
        <Advisor advisorProfiles={advisorProfiles} />
      </section>

      <section>
        <TrainingInfo />
      </section>
    </MainLayout>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  const data = await cmsClient.get({
    endpoint: "staffs",
  });

  const staffProfiles = data.contents
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

  const advisorProfiles = data.contents
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
      staffProfiles,
      advisorProfiles,
    },
    revalidate: 10,
  };
};
