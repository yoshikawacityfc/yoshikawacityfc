import { MainLayout } from "@/components/Layout";
import { Advisor } from "@/features/advisor/components";
import { Staffs } from "@/features/staffs/components";
import { TrainingInfo } from "@/features/training-info/components";
import client from "@/lib/apolloClient";
import { GetStaticProps, NextPage } from "next";
import { queryStaffCategoryCollection } from "@/lib/gql/staffs";

interface TeamPageProps {
  staffCategoryId: string;
  advisorCategoryId: string;
}

const TeamPage: NextPage<TeamPageProps> = ({
  staffCategoryId,
  advisorCategoryId,
}) => {
  return (
    <MainLayout>
      <section className="pt-64">
        <Staffs categoryId={staffCategoryId} />
      </section>

      <section className="mt-64">
        <Advisor categoryId={advisorCategoryId} />
      </section>

      <section>
        <TrainingInfo />
      </section>
    </MainLayout>
  );
};

export default TeamPage;

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  const { data } = await client.query({
    query: queryStaffCategoryCollection,
  });

  const findCategoryByName = (name: string) => {
    return data.staff_categoriesCollection?.edges.find(
      (item) => item.node.name === name
    )?.node.id;
  };

  const staffCategoryId = findCategoryByName("スタッフ");
  const advisorCategoryId = findCategoryByName("アドバイザー");

  return {
    props: {
      staffCategoryId,
      advisorCategoryId,
    },
    revalidate: 10,
  };
};
