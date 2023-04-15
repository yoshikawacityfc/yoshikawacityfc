import { MainLayout } from "@/components/Layout";
import { NewsList } from "@/features/news/components";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NewsPage: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <section className="py-44">
        <NewsList />
      </section>
    </MainLayout>
  );
};

export default NewsPage;
