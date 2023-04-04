import { Button } from "@/components/Elements";
import { queryNewsCollection } from "@/lib/gql/news";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { NEWS_PER_PAGE } from "../constants";
import { NewsCardList } from "./NewsCardList";

export const NewsList = (): JSX.Element => {
  const { loading, error, data, fetchMore } = useQuery(queryNewsCollection, {
    variables: {
      after: null,
      first: NEWS_PER_PAGE,
    },
  });

  const loadMore = useCallback(async () => {
    await fetchMore({
      variables: {
        after: data?.newsCollection?.pageInfo.endCursor,
      },
    });
  }, [data, fetchMore]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <>
      <div className="max-w-[1000px] m-auto px-4">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          お知らせ一覧
        </h2>

        {data?.newsCollection?.edges && (
          <NewsCardList news={data?.newsCollection?.edges} />
        )}

        {data?.newsCollection?.pageInfo.hasNextPage && (
          <div className="m-auto w-3/4 mt-16">
            <Button label="もっと見る" fullWidth onClick={() => loadMore()} />
          </div>
        )}
      </div>
    </>
  );
};
