import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import { NewsNodeType } from "../types";
import { NewsCard } from "./NewsCard";

interface NewsCardListProps {
  news: NewsNodeType[];
}

export const NewsCardList = ({ news }: NewsCardListProps): JSX.Element => {
  const router = useRouter();
  const handleCardClick = (id: any) => {
    router.push(PagePaths.news(id));
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
      {news.map((item) => (
        <NewsCard
          key={item.node.id}
          news={item.node}
          fullWidth
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};
