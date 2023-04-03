import { Icon } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { NEWS_DEMO_DATA } from "../data";
import "zenn-content-css";
import { useQuery } from "@apollo/client";
import { queryNews } from "@/lib/gql/news";

interface NewDetailProps {
  id: any;
}

export const NewsDetail = ({ id }: NewDetailProps): JSX.Element => {
  const { loading, error, data } = useQuery(queryNews, {
    variables: {
      filter: {
        id: {
          eq: id,
        },
      },
    },
  });

  const prevNews = NEWS_DEMO_DATA.find((item) => item.id === id - 1);
  const nextNews = NEWS_DEMO_DATA.find((item) => item.id === id + 1);

  const router = useRouter();

  const handlePrevNews = (id: number) => {
    goToNewsPage(id);
  };

  const handleNextNews = (id: number) => {
    goToNewsPage(id);
  };

  const goToNewsPage = (id: number) => {
    router.push(`${PagePaths.news()}/${id}`);
  };

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
            {data.newsCollection.edges[0].node.published_at}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: data.newsCollection.edges[0].node.content,
            }}
            className="mb-32 whitespace-pre-line"
          ></div>

          {/* TODO：以下コンポーネント化 */}
          <div className="border-t-[1px] border-gray-400 py-4 flex justify-between">
            <div>
              {prevNews && (
                <span
                  className="text-primary cursor-pointer flex items-center"
                  onClick={() => handlePrevNews(prevNews.id)}
                >
                  <Icon className="mr-2" icon={faChevronLeft} />
                  <span className="max-w-[150px] md:max-w-[400px] overflow-hidden whitespace-nowrap text-ellipsis">
                    {prevNews.title}
                  </span>
                </span>
              )}
            </div>

            <div>
              {nextNews && (
                <span
                  className="text-primary cursor-pointer flex items-center"
                  onClick={() => handleNextNews(nextNews.id)}
                >
                  <span className="max-w-[150px] md:max-w-[400px] overflow-hidden whitespace-nowrap text-ellipsis">
                    {nextNews.title}
                  </span>
                  <Icon className="ml-2" icon={faChevronRight} />
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>記事が見つかりませんでした。</div>
      )}
    </>
  );
};
