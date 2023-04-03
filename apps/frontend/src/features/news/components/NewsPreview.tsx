import { Button, ScrollAnimation } from "@/components/Elements";
import { queryNewsCollection } from "@/lib/gql/news";
import { PagePaths } from "@/lib/pagePaths";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { NEWS_PER_PAGE } from "../constants";
import { NewsCardSliderList } from "./NewsCardSliderList";

export const NewsPreview = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryNewsCollection, {
    variables: {
      after: null,
      first: NEWS_PER_PAGE,
    },
  });

  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <ScrollAnimation delay={300} className="flex flex-col items-center">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
        お知らせ
      </h2>

      {data?.newsCollection?.edges && (
        <NewsCardSliderList news={data?.newsCollection?.edges} />
      )}

      <div className="mt-24 max-w-[800px] w-3/4">
        <Button
          label="もっと見る"
          fullWidth
          onClick={() => router.push(PagePaths.news())}
        />
      </div>
    </ScrollAnimation>
  );
};
