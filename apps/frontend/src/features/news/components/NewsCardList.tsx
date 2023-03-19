import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import { NewsType } from "../types";
import { NewsCard } from "./NewsCard";

interface NewsCardListProps {
  news: NewsType[];
}

export const NewsCardList = ({ news }: NewsCardListProps): JSX.Element => {
  const router = useRouter();
  const handleCardClick = (id: number) => {
    router.push(`${PagePaths.news()}/${id}`);
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
      {news.map((item, index) => (
        <NewsCard key={index} news={item} fullWidth onClick={handleCardClick} />
      ))}
    </div>
  );
};
