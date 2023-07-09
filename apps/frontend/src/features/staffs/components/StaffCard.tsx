import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import clsx from "clsx";
import { StaffProfile } from "../types";
import Image from "next/image";

interface StaffCardProps {
  staffProfile: StaffProfile;
  className?: string;
  onClick: (id: string) => void;
}

export const StaffCard = ({
  staffProfile,
  className,
  onClick,
}: StaffCardProps): JSX.Element => {
  return (
    <div
      className={clsx(
        className,
        "py-8 px-4 bg-secondary shadow-md rounded-md max-w-[300px] flex flex-col items-center cursor-pointer hover:shadow-xl"
      )}
      onClick={() => onClick(staffProfile.id)}
    >
      {staffProfile.profileImage ? (
        <Image
          className="object-cover w-[150px] h-[150px] rounded-[50%]"
          src={staffProfile.profileImage.url}
          alt={staffProfile.name}
          width={staffProfile.profileImage.width}
          height={staffProfile.profileImage.height}
        />
      ) : (
        <img
          src={EMPTY_USER_IMAGE_PATH}
          alt="empty"
          className="object-cover w-[150px] h-[150px] rounded-[50%]"
        />
      )}

      <div className="flex flex-col items-center my-4">
        <span className="text-sm font-medium">{staffProfile.position}</span>
        <p className="text-xl font-semibold">{staffProfile.name}</p>
      </div>

      <p>{staffProfile.oneWord}</p>
    </div>
  );
};
