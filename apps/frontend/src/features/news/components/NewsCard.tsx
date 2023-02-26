interface NewsCardProps {
  thumbnailSrc?: string;
  title: string;
  updateDate: string;
}

export const NewsCard = ({
  thumbnailSrc = "/social-contribution.jpg",
  title,
  updateDate,
}: NewsCardProps): JSX.Element => {
  return (
    <div className="w-[300px] h-[400px] shadow text-secondary">
      <img
        src={thumbnailSrc}
        alt="thumbnail"
        className="h-[300px] w-[300px] object-cover"
      />
      <div className="bg-primary h-[100px] p-3 text-xs flex flex-col justify-between">
        <h4 className="text-base font-light line-clamp-2">{title}</h4>
        <p className="text-right font-light">{updateDate}</p>
      </div>
    </div>
  );
};
