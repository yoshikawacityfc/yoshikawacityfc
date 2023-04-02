import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import clsx from "clsx";
import { StaffProfile } from "../types";

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
  // TODO: Cardコンポーネント追加
  return (
    <div
      className={clsx(
        className,
        "py-8 px-4 bg-secondary shadow-md rounded-md max-w-[300px] flex flex-col items-center cursor-pointer hover:shadow-xl"
      )}
      onClick={() => onClick(staffProfile.id)}
    >
      <img
        className="object-cover w-[150px] h-[150px] rounded-[50%]"
        src={staffProfile.profile_image_asset_id || EMPTY_USER_IMAGE_PATH}
        alt={staffProfile.name}
      />

      <div className="flex flex-col items-center my-4">
        <span className="text-sm font-medium">{staffProfile.position}</span>
        <p className="text-xl font-semibold">{staffProfile.name}</p>
      </div>

      <p>{staffProfile.one_word}</p>
    </div>
  );
};
