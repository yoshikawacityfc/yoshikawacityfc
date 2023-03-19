import { MainLayout } from "@/components/Layout";
import { NewsList } from "@/features/news/components";
import { NextPage } from "next";

const News: NextPage = () => {
  return (
    <MainLayout>
      <NewsList />
    </MainLayout>
  );
};

export default News;
