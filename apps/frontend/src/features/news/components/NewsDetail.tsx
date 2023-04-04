import { Button, Icon } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import "zenn-content-css";
import { useQuery } from "@apollo/client";
import { queryNews } from "@/lib/gql/news";
import { formatDate } from "@/utils/date";

interface NewDetailProps {
  id: any;
}

export const NewsDetail = ({ id }: NewDetailProps): JSX.Element => {
  const router = useRouter();

  const { loading, error, data } = useQuery(queryNews, {
    variables: {
      filter: {
        id: {
          eq: id,
        },
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <>
      {data?.newsCollection?.edges[0] ? (
        <div className="znc max-w-[1000px] px-4 m-auto mb-32">
          <h1 className="text-3xl mb-1">
            {data.newsCollection.edges[0].node.title}
          </h1>
          <p className="text-xl text-gray-400 mb-16">
            {formatDate(data.newsCollection.edges[0].node.published_at)}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: data.newsCollection.edges[0].node.content,
            }}
            className="mb-32 whitespace-pre-line"
          ></div>

          {/* TODO：以下コンポーネント化 */}
          <div className="border-t-[1px] border-gray-400 py-4 flex justify-between">
            <div className="m-auto w-3/4 mt-8">
              <Button
                label="一覧に戻る"
                fullWidth
                onClick={() => router.push(PagePaths.news())}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>記事が見つかりませんでした。</div>
      )}
    </>
  );
};
