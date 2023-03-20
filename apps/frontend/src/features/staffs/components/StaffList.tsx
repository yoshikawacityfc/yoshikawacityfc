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

  const handleStaffCardClick = (id: number) => {
    setIsStaffProfileModalVisible(true);

    setSelectedStaffProfile(staffProfiles.find((item) => item.id === id));
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {staffProfiles.map((staffProfile, index) => {
          return (
            <StaffCard
              key={index}
              staffProfile={staffProfile}
              className="mx-2 mb-4"
              onClick={(id: number) => handleStaffCardClick(id)}
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
