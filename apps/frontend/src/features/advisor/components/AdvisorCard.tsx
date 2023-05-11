import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import clsx from "clsx";
import { AdvisorProfile } from "../types";
import Image from "next/image";

interface AdvisorCardProps {
  advisorProfile: AdvisorProfile;
  className?: string;
  onClick: (id: string) => void;
}

export const AdvisorCard = ({
  advisorProfile,
  className,
  onClick,
}: AdvisorCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        className,
        "py-8 px-4 bg-secondary shadow-md rounded-md min-w-[300px] w-full flex flex-col items-center cursor-pointer hover:shadow-xl"
      )}
      onClick={() => onClick(advisorProfile.id)}
    >
      {advisorProfile.assets ? (
        <Image
          className="object-cover w-[150px] h-[150px] rounded-[50%]"
          src={advisorProfile.assets.src}
          alt={advisorProfile.assets.src}
          width={advisorProfile.assets.width}
          height={advisorProfile.assets.height}
        />
      ) : (
        <img
          src={EMPTY_USER_IMAGE_PATH}
          alt="empty"
          className="object-cover w-[150px] h-[150px] rounded-[50%]"
        />
      )}

      <div className="flex flex-col items-center my-4">
        <span className="text-sm font-medium">{advisorProfile.position}</span>
        <p className="text-xl font-semibold">{advisorProfile.name}</p>
      </div>
    </div>
  );
};
