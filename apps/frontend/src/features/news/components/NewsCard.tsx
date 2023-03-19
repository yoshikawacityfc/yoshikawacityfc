import clsx from "clsx";

interface NewsCardProps {
  thumbnailSrc?: string;
  title: string;
  updateDate: string;
  fullWidth?: boolean;
}

export const NewsCard = ({
  thumbnailSrc = "/social-contribution.jpg",
  title,
  updateDate,
  fullWidth,
}: NewsCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        fullWidth ? "w-full" : "w-[300px]",
        "h-[400px] shadow text-secondary cursor-pointer"
      )}
    >
      <img
        src={thumbnailSrc || "/logo-gray.svg"}
        alt="thumbnail"
        className={clsx(
          fullWidth ? "w-full" : "w-[300px]",
          "h-[300px] object-cover"
        )}
      />
      <div className="bg-primary h-[100px] p-3 text-xs flex flex-col justify-between">
        <h4 className="text-base font-light line-clamp-2">{title}</h4>
        <p className="text-right font-light">{updateDate}</p>
      </div>
    </div>
  );
};
