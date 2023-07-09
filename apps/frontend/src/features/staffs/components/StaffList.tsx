import { useQuery } from "@apollo/client";
import { useState } from "react";
import { queryStaffCollection } from "@/lib/gql/staffs";
import { StaffProfile } from "../types";
import { StaffCard } from "./StaffCard";
import { StaffProfileModal } from "./StaffProfileModal";
import { FilterIs } from "@/__generated__/graphql";

interface StaffListProps {
  staffs: StaffProfile[];
}

export const StaffList = ({ staffs }: StaffListProps): JSX.Element => {
  const [isStaffProfileModalVisible, setIsStaffProfileModalVisible] =
    useState(false);
  const [selectedStaffProfile, setSelectedStaffProfile] =
    useState<StaffProfile>();

  const handleStaffCardClick = (id: string) => {
    setIsStaffProfileModalVisible(true);

    const selectStaffProfile = staffs.find((item) => item.id === id);
    setSelectedStaffProfile(selectStaffProfile);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {staffs.map((item) => {
          return (
            <StaffCard
              key={item.id}
              staffProfile={item}
              className="mx-2 mb-4"
              onClick={handleStaffCardClick}
            />
          );
        })}
      </div>

      {selectedStaffProfile && (
        <StaffProfileModal
          staffProfile={selectedStaffProfile}
          visible={isStaffProfileModalVisible}
          onClose={() => setIsStaffProfileModalVisible(false)}
        />
      )}
    </>
  );
};
