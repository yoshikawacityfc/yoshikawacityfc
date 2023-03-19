import { Icon } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { NEWS_DEMO_DATA } from "../data";

interface NewDetailProps {
  id: number;
}

export const NewsDetail = ({ id }: NewDetailProps): JSX.Element => {
  // TODO: DBからデータ取得
  const news = NEWS_DEMO_DATA.find((item) => item.id === id);
  const prevNews = NEWS_DEMO_DATA.find((item) => item.id === id - 1);
  const nextNews = NEWS_DEMO_DATA.find((item) => item.id === id + 1);

  const router = useRouter();

  const handlePrevNews = (id: number) => {
    router.push(`${PagePaths.news()}/${id}`);
  };

  const handleNextNews = (id: number) => {
    router.push(`${PagePaths.news()}/${id}`);
  };

  return (
    <>
      {news ? (
        <div className="max-w-[1000px] px-4 m-auto mb-32">
          <h1 className="text-3xl mb-1">{news.title}</h1>
          <p className="text-xl text-gray-400 mb-16">{news.updateDate}</p>

          <div
            dangerouslySetInnerHTML={{ __html: news.description }}
            className="mb-32"
          ></div>

          <div className="border-t-[1px] border-gray-400 py-4 flex justify-between">
            <div>
              {prevNews && (
                <span
                  className="text-primary cursor-pointer flex items-center"
                  onClick={() => handleNextNews(prevNews.id)}
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
