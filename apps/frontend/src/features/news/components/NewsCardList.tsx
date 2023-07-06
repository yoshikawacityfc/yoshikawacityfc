import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import { NewsListItem } from "../types";
import { NewsCard } from "./NewsCard";

interface NewsCardListProps {
  news: NewsListItem[];
}

export const NewsCardList = ({ news }: NewsCardListProps): JSX.Element => {
  const router = useRouter();
  const handleCardClick = (slug: string) => {
    router.push(PagePaths.news(slug));
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
          fullWidth
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};
