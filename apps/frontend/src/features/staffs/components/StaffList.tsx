import { useState } from "react";
import { StaffProfile } from "../types";
import { StaffCard } from "./StaffCard";
import { StaffProfileModal } from "./StaffProfileModal";

interface StaffListProps {
  staffProfiles: StaffProfile[];
}

export const StaffList = ({ staffProfiles }: StaffListProps): JSX.Element => {
  const [isStaffProfileModalVisible, setIsStaffProfileModalVisible] =
    useState(false);
  const [selectedStaffProfile, setSelectedStaffProfile] =
    useState<StaffProfile>();

  const handleStaffCardClick = (id: string) => {
    setIsStaffProfileModalVisible(true);

    const selectStaffProfile = staffProfiles.find((item) => item.id === id);
    setSelectedStaffProfile(selectStaffProfile);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {staffProfiles.map((item) => {
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
