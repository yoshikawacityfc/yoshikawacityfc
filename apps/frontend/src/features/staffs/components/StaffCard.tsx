import clsx from "clsx";
import { StaffProfile } from "../types";

interface StaffCardProps {
  staffProfile: StaffProfile;
  className?: string;
  onClick: (id: number) => void;
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
        src={staffProfile.profileImage}
        alt={staffProfile.name}
        className="max-w-[150px]"
      />

      <div className="flex flex-col items-center my-4">
        <span className="text-sm">{staffProfile.position}</span>
        <p className="text-xl font-semibold">{staffProfile.name}</p>
      </div>

      <p>{staffProfile.oneWord}</p>
    </div>
  );
};
