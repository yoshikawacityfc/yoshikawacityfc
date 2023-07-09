import { PagePaths } from "@/lib/pagePaths";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useRef } from "react";
import { NEWS_CARD_MARGIN_RIGHT, NEWS_CARD_WIDTH } from "../constants";
import { NewsListItem } from "../types";
import { NewsCard } from "./NewsCard";
import { isNotMaxIndex } from "@/utils/array";

interface NewsCardSliderListProps {
  news: NewsListItem[];
}

export const NewsCardSliderList = ({
  news,
}: NewsCardSliderListProps): JSX.Element => {
  const MOVE_SCROLL_LEFT = NEWS_CARD_WIDTH + NEWS_CARD_MARGIN_RIGHT;
  const newsCardList = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const handleCardClick = (slug: string) => {
    router.push(PagePaths.news(slug));
  };

  const handlePrevClick = () => {
    if (newsCardList.current === null) return;

    newsCardList.current.scrollLeft -= MOVE_SCROLL_LEFT;
  };

  const handleNextClick = () => {
    if (newsCardList.current === null) return;

    newsCardList.current.scrollLeft += MOVE_SCROLL_LEFT;
  };

  return (
    <div className="relative w-full">
      <div
        ref={newsCardList}
        className="flex w-full overflow-scroll scroll-smooth"
      >
        {news.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                isNotMaxIndex(news, index) && "mr-2",
                "w-[300px]"
              )}
            >
              <NewsCard news={item} onClick={handleCardClick} />
            </div>
          );
        })}
      </div>

      <img
        src="/assets/image/circle-chevron-left-solid.svg"
        alt="prev"
        className="w-16 cursor-pointer absolute top-0 bottom-0 m-auto left-4 opacity-80"
        onClick={handlePrevClick}
      />
      <img
        src="/assets/image/circle-chevron-right-solid.svg"
        alt="next"
        className="w-16 cursor-pointer absolute top-0 bottom-0 m-auto right-4 opacity-80"
        onClick={handleNextClick}
      />
    </div>
  );
};
