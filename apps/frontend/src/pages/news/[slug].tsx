import { MainLayout } from "@/components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NewsDetail } from "@/features/news/components";
import { cmsClient } from "@/lib/cms/cmsClient";
import { News } from "@/features/news/types";
import { news } from "@/lib/cms/types";

interface NewsScreenProps {
  news: News;
}

const NewsScreen: NextPage<NewsScreenProps> = ({ news }: NewsScreenProps) => {
  return (
    <MainLayout>
      <section className="pt-64 min-h-[70vh]">
        <NewsDetail news={news} />
      </section>
    </MainLayout>
  );
};

export default NewsScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await cmsClient.get({
    endpoint: "news",
  });

  const paths =
    data.contents.map((content: news) => `/news/${content.id}`) ?? [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsScreenProps> = async (
  context
) => {
  const data = await cmsClient.get({
    endpoint: "news",
    queries: {
      ids: context.params?.slug,
    },
  });

  const news: news = data.contents[0];

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: {
        id: news.id,
        title: news.title,
        publishedAtString: news.publishedAt,
        content: news.content,
      },
    },
    revalidate: 30,
  };
};
