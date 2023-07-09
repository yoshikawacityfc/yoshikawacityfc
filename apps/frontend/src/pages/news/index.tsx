import { Button } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { NewsCardList } from "@/features/news/components";
import { NewsListItem } from "@/features/news/types";
import { cmsClient } from "@/lib/cms/cmsClient";
import { news } from "@/lib/cms/types";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";

interface NewsProps {
  news: NewsListItem[];
  totalCount: number;
}

const transformToNewsListItems = (news: news[]): NewsListItem[] => {
  return news.map((content: news) => {
    return {
      id: content.id,
      title: content.title,
      publishedAtString: content.publishedAt,
      thumbnail: content.eyecatch ?? null,
    };
  });
};

const News: NextPage<NewsProps> = (props: NewsProps) => {
  const [news, setNews] = useState(props.news);

  const handleMoreButtonClick = async () => {
    const data = await cmsClient.get({
      endpoint: "news",
      queries: { orders: "-publishedAt", limit: 10, offset: news.length },
    });

    const newNews = transformToNewsListItems(data.contents);

    setNews([...news, ...newNews]);
  };

  return (
    <MainLayout>
      <section className="py-44">
        <div className="max-w-[1000px] m-auto px-4">
          <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
            お知らせ一覧
          </h2>

          <NewsCardList news={news} />

          {news.length < props.totalCount && (
            <div className="m-auto w-3/4 mt-16">
              <Button
                label="もっと見る"
                fullWidth
                onClick={handleMoreButtonClick}
              />
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default News;

export const getStaticProps: GetStaticProps<NewsProps> = async () => {
  const data = await cmsClient.get({
    endpoint: "news",
    queries: { orders: "-publishedAt", limit: 10 },
  });

  const news = transformToNewsListItems(data.contents);

  return {
    props: {
      news,
      totalCount: data.totalCount,
    },
  };
};
