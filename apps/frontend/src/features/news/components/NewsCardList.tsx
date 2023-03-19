import { NewsType } from "../types";
import { NewsCard } from "./NewsCard";

interface NewsCardListProps {
  news: NewsType[];
}

export const NewsCardList = ({ news }: NewsCardListProps): JSX.Element => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
      {news.map((item, index) => (
        <NewsCard
          key={index}
          thumbnailSrc={item.thumbnailSrc}
          title={item.title}
          updateDate={item.updateDate}
          fullWidth
        />
      ))}
    </div>
  );
};
