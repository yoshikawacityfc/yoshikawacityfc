import { useQuery } from "@apollo/client";
import { useState } from "react";
import { queryStaffCollection } from "@/lib/gql/staffs";
import { StaffProfile } from "../types";
import { StaffCard } from "./StaffCard";
import { StaffProfileModal } from "./StaffProfileModal";

interface StaffListProps {
  categoryId: string;
}

export const StaffList = ({ categoryId }: StaffListProps): JSX.Element => {
  const { loading, error, data } = useQuery(queryStaffCollection, {
    variables: {
      filter: {
        category_id: {
          eq: categoryId,
        },
      },
    },
  });

  const [isStaffProfileModalVisible, setIsStaffProfileModalVisible] =
    useState(false);
  const [selectedStaffProfile, setSelectedStaffProfile] =
    useState<StaffProfile>();

  const handleStaffCardClick = (id: string) => {
    setIsStaffProfileModalVisible(true);

    const selectStaffProfile = data?.staffsCollection?.edges.find(
      (item) => item.node.id === id
    );
    setSelectedStaffProfile(selectStaffProfile?.node);
  };

  if (loading) return <></>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data?.staffsCollection?.edges.map((item) => {
          return (
            <StaffCard
              key={item.node.id}
              staffProfile={item.node}
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
