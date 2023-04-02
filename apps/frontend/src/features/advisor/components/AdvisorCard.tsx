import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import clsx from "clsx";
import { AdvisorProfile } from "../types";

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
  // TODO: Cardコンポーネント追加
  return (
    <div
      className={clsx(
        className,
        "py-8 px-4 bg-secondary shadow-md rounded-md min-w-[300px] w-full flex flex-col items-center cursor-pointer hover:shadow-xl"
      )}
      onClick={() => onClick(advisorProfile.id)}
    >
      <img
        className="object-cover w-[150px] h-[150px] rounded-[50%]"
        src={advisorProfile.assets?.src || EMPTY_USER_IMAGE_PATH}
        alt={advisorProfile.assets?.src}
      />

      <div className="flex flex-col items-center my-4">
        <span className="text-sm font-medium">{advisorProfile.position}</span>
        <p className="text-xl font-semibold">{advisorProfile.name}</p>
      </div>
    </div>
  );
};
