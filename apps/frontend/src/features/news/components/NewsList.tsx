import { NEWS_DEMO_DATA } from "../data";
import { NewsCardList } from "./NewsCardList";

export const NewsList = (): JSX.Element => {
  return (
    <>
      <div className="max-w-[1000px] m-auto px-4">
        <h2 className="font-semibold text-6xl text-center mb-24">
          お知らせ一覧
        </h2>

        <NewsCardList news={NEWS_DEMO_DATA} />
      </div>
    </>
  );
};
