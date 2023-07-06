import { Button } from "@/components/Elements";
import { NewsCardList } from "./NewsCardList";
import { NewsListItem } from "../types";

interface NewsListProps {
  news: NewsListItem[];
}

export const NewsList = ({ news }: NewsListProps): JSX.Element => {
  return (
    <>
      <div className="max-w-[1000px] m-auto px-4">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          お知らせ一覧
        </h2>

        <NewsCardList news={news} />

        <div className="m-auto w-3/4 mt-16">
          {/* TODO: ページネーション */}
          <Button label="もっと見る" fullWidth onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
