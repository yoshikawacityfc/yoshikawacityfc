import { MainLayout } from "@/components/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { NewsDetail } from "@/features/news/components";

const NewsDetailPage: NextPage = () => {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";

  return (
    <MainLayout>
      <section className="pt-64 min-h-[70vh]">
        <NewsDetail slug={slug} />
      </section>
    </MainLayout>
  );
};

export default NewsDetailPage;
