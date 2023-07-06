import { MainLayout } from "@/components/Layout";
import { NewsList } from "@/features/news/components";
import { NewsListItem } from "@/features/news/types";
import { client } from "@/lib/client";
import { GetStaticProps, NextPage } from "next";

interface NewsProps {
  news: NewsListItem[];
}

const News: NextPage<NewsProps> = ({ news }: NewsProps) => {
  return (
    <MainLayout>
      <section className="py-44">
        <NewsList news={news} />
      </section>
    </MainLayout>
  );
};

export default News;

export const getStaticProps: GetStaticProps<NewsProps> = async () => {
  const data = await client.get({
    endpoint: "news",
    queries: { orders: "-publishedAt" },
  });

  const news = data.contents.map((content: any) => {
    return {
      id: content.id,
      title: content.title,
      publishedAtString: content.publishedAt,
      thumbnail: content.eyecatch ?? null,
    };
  });

  return {
    props: {
      news,
    },
  };
};
