import { StaffProfile } from "../types";
import { StaffList } from "./StaffList";

interface StaffsProps {
  staffProfiles: StaffProfile[];
}

export const Staffs = ({ staffProfiles }: StaffsProps): JSX.Element => {
  return (
    <div className="max-w-[1000px] m-auto">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-16">
        Staff
      </h2>

      <StaffList staffProfiles={staffProfiles} />
    </div>
  );
};
