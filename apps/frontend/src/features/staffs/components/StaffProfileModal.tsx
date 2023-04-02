import { Button, Modal } from "@/components/Elements";
import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import { useMemo } from "react";
import { StaffProfile } from "../types";
import { StaffCareerList } from "./StaffCareerList";

interface StaffProfileProps {
  visible: boolean;
  staffProfile: StaffProfile;
  onClose: () => void;
}

export const StaffProfileModal = ({
  visible,
  staffProfile,
  onClose,
}: StaffProfileProps): JSX.Element => {
  const isCareerProfile = useMemo(() => {
    return ![
      staffProfile.career,
      staffProfile.license,
      staffProfile.coaching_achievement,
      staffProfile.player_history,
      staffProfile.player_achievement,
    ].every((item) => item.length === 0);
  }, [staffProfile]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="w-[90vw] max-w-[700px] overflow-scroll p-6">
        <img
          src={staffProfile.assets?.src || EMPTY_USER_IMAGE_PATH}
          alt={staffProfile.assets?.file_name}
          className="object-cover w-[200px] h-[200px] rounded-[50%] m-auto mb-4"
        />

        <div className="flex flex-col items-center mb-8">
          <span className="text-sm font-medium">{staffProfile.position}</span>
          <p className="text-xl font-semibold">{staffProfile.name}</p>
        </div>

        <p className="text-primary font-medium mb-8">{staffProfile.one_word}</p>

        {staffProfile.description && (
          <p className="mb-8 whitespace-pre-line">{staffProfile.description}</p>
        )}

        {isCareerProfile && (
          <div className="bg-gray-200 px-6 py-8 rounded-lg">
            {staffProfile.career.length > 0 && (
              <StaffCareerList label="経歴" career={staffProfile.career} />
            )}

            {staffProfile.coaching_achievement.length > 0 && (
              <StaffCareerList
                label="指導実績"
                career={staffProfile.coaching_achievement}
              />
            )}

            {staffProfile.license.length > 0 && (
              <StaffCareerList label="資格" career={staffProfile.license} />
            )}

            {staffProfile.player_history.length > 0 && (
              <StaffCareerList
                label="選手歴"
                career={staffProfile.player_history}
              />
            )}

            {staffProfile.player_achievement.length > 0 && (
              <StaffCareerList
                label="選手実績"
                career={staffProfile.player_achievement}
              />
            )}
          </div>
        )}

        <div className="w-3/4 m-auto mt-8 px-4">
          {/* NOTE: モーダルを開くタイミングで強制的にボタンまでスクロールしてしまうためtabIndexに負の値を渡す */}
          <Button label="閉じる" fullWidth tabIndex={-1} onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};
