import Image from "next/image";

export interface EntryContentProps {
  orderNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

export const EntryContent = ({
  orderNumber,
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
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

      <Image
        src={imageSrc}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="m-auto"
      />
    </div>
  );
};
