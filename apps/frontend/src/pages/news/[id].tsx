import { MainLayout } from "@/components/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { NewsDetail } from "@/features/news/components";

const News: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <section className="pt-64 min-h-[70vh]">
        <NewsDetail id={router.query.id} />
      </section>
    </MainLayout>
  );
};

export default News;
