import { formatDate } from "@/utils/date";
import clsx from "clsx";
import { NewsListItem } from "../types";
import Image from "next/image";

interface NewsCardProps {
  news: NewsListItem;
  fullWidth?: boolean;
  onClick: (id: any) => void;
}

export const NewsCard = ({
  news,
  fullWidth,
  onClick,
}: NewsCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        fullWidth ? "w-full" : "w-[300px]",
        "h-[400px] shadow text-secondary cursor-pointer"
      )}
      onClick={() => onClick(news.title)}
    >
      {news.thumbnail ? (
        <Image
          src={news.thumbnail.url}
          alt={news.title}
          className={clsx(
            fullWidth ? "w-full" : "w-[300px]",
            "h-[300px] object-cover"
          )}
          width={news.thumbnail.width}
          height={news.thumbnail.height}
        />
      ) : (
        <img
          src="/assets/image/logo-gray.svg"
          alt="gray-scale"
          className={clsx(
            fullWidth ? "w-full" : "w-[300px]",
            "h-[300px] object-cover"
          )}
        />
      )}
      <div className="bg-primary h-[100px] p-3 text-xs flex flex-col justify-between">
        <h4 className="text-base font-normal line-clamp-2">{news.title}</h4>
        <p className="text-right font-light">
          {formatDate(news.publishedAtString)}
        </p>
      </div>
    </div>
  );
};
