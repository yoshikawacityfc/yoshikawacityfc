import { StaffList } from "./StaffList";

interface StaffsProps {
  categoryId: string;
}

export const Staffs = ({ categoryId }: StaffsProps): JSX.Element => {
  return (
    <div className="max-w-[1000px] m-auto">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-16">
        Staff
      </h2>

      <StaffList categoryId={categoryId} />
    </div>
  );
};
