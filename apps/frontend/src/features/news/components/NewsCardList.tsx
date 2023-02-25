import clsx from "clsx";
import { useEffect, useRef } from "react";
import { NEWS_CARD_MARGIN_RIGHT, NEWS_CARD_WIDTH } from "../constants";
import { News } from "../types";
import { NewsCard } from "./NewsCard";

interface NewsCardListProps {
  news: News[];
}

export const NewsCardList = ({ news }: NewsCardListProps): JSX.Element => {
  const MOVE_SCROLL_LEFT = NEWS_CARD_WIDTH + NEWS_CARD_MARGIN_RIGHT;
  const newsCardList = useRef<HTMLDivElement>(null);

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
            // TODO: インデックスが配列の最大値かどうか判定するUtil関数を作成する
            <div
              key={index}
              className={clsx(news.length - 1 > index && "mr-2")}
            >
              <NewsCard
                thumbnailSrc={item.thumbnailSrc}
                title={item.title}
                updateDate={item.updateDate}
              />
            </div>
          );
        })}
      </div>

      <img
        src="../circle-chevron-left-solid.svg"
        alt="prev"
        className="w-16 cursor-pointer absolute top-0 bottom-0 m-auto left-4 opacity-80"
        onClick={handlePrevClick}
      />
      <img
        src="../circle-chevron-right-solid.svg"
        alt="next"
        className="w-16 cursor-pointer absolute top-0 bottom-0 m-auto right-4 opacity-80"
        onClick={handleNextClick}
      />
    </div>
  );
};
