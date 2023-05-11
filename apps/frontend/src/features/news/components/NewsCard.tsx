import { formatDate } from "@/utils/date";
import clsx from "clsx";
import { NewsType } from "../types";
import Image from "next/image";

interface NewsCardProps {
  news: NewsType;
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
      onClick={() => onClick(news.slug)}
    >
      {news.assets ? (
        <Image
          src={news.assets.src}
          alt={news.assets.file_name}
          className={clsx(
            fullWidth ? "w-full" : "w-[300px]",
            "h-[300px] object-cover"
          )}
          width={news.assets.width}
          height={news.assets.height}
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
        <p className="text-right font-light">{formatDate(news.published_at)}</p>
      </div>
    </div>
  );
};
