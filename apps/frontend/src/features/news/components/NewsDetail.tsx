import { Button } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import "zenn-content-css";
import { formatDate } from "@/utils/date";

interface NewDetailProps {
  news: {
    id: string;
    slug: string;
    title: string;
    publishedAtString: string;
    content: string;
  };
}

export const NewsDetail = ({
  news: { title, publishedAtString, content },
}: NewDetailProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <div className="znc max-w-[1000px] px-4 m-auto mb-32">
        <h1 className="text-3xl mb-1">{title}</h1>
        <p className="text-xl text-gray-400 mb-16">
          {formatDate(publishedAtString)}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: content,
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
    </>
  );
};
