import { MainLayout } from "@/components/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NewsDetail: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div>{router.query.id}</div>
    </MainLayout>
  );
};

export default NewsDetail;
