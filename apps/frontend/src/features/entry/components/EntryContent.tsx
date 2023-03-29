export interface EntryContentProps {
  orderNumber: number;
  title: string;
  description: string;
  imageSrc: string;
}

export const EntryContent = ({
  orderNumber,
  title,
  description,
  imageSrc,
}: EntryContentProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
      <div>
        <p className="text-primary font-bold text-6xl sm:text-7xl mb-8">
          0{orderNumber}
        </p>
        <h3 className="font-semibold text-3xl sm:text-4xl mb-4">{title}</h3>
        <p>{description}</p>
      </div>

      <img src={imageSrc} alt={title} className="m-auto" />
    </div>
  );
};
