import { staffProfiles } from "../data/staffs";
import { StaffList } from "./StaffList";

export const Staffs = (): JSX.Element => {
  return (
    <div className="max-w-[1000px] m-auto">
      <h2 className="font-semibold text-6xl text-center mb-16">Staff</h2>

      <StaffList staffProfiles={staffProfiles} />
    </div>
  );
};
