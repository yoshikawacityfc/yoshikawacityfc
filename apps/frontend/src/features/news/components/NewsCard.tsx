import clsx from "clsx";
import { NewsType } from "../types";

interface NewsCardProps {
  news: NewsType;
  fullWidth?: boolean;
  onClick: (id: number) => void;
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
      onClick={() => onClick(news.id)}
    >
      <img
        src={news.thumbnailSrc || "/logo-gray.svg"}
        alt="thumbnail"
        className={clsx(
          fullWidth ? "w-full" : "w-[300px]",
          "h-[300px] object-cover"
        )}
      />
      <div className="bg-primary h-[100px] p-3 text-xs flex flex-col justify-between">
        <h4 className="text-base font-light line-clamp-2">{news.title}</h4>
        <p className="text-right font-light">{news.updateDate}</p>
      </div>
    </div>
  );
};
