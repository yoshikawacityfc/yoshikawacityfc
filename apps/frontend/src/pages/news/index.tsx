import { MainLayout } from "@/components/Layout";
import { NewsList } from "@/features/news/components";
import { NextPage } from "next";
import { useRouter } from "next/router";

const News: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <section className="pt-64">
        <NewsList />
      </section>
    </MainLayout>
  );
};

export default News;
