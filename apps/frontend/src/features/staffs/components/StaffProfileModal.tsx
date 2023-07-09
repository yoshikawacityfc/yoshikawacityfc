import { Button, Modal } from "@/components/Elements";
import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import { useMemo } from "react";
import { StaffProfile } from "../types";
import Image from "next/image";

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
      staffProfile.coachingAchievement,
      staffProfile.playerHistory,
      staffProfile.playerAchievement,
    ].every((content) => content === null);
  }, [staffProfile]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="w-[90vw] max-w-[700px] overflow-scroll p-6">
        {staffProfile.profileImage ? (
          <Image
            className="object-cover w-[200px] h-[200px] rounded-[50%] m-auto mb-4"
            src={staffProfile.profileImage.url}
            alt={staffProfile.name}
            width={staffProfile.profileImage.width}
            height={staffProfile.profileImage.height}
          />
        ) : (
          <img
            src={EMPTY_USER_IMAGE_PATH}
            alt="empty"
            className="object-cover w-[200px] h-[200px] rounded-[50%] m-auto mb-4"
          />
        )}

        <div className="flex flex-col items-center mb-8">
          <span className="text-sm font-medium">{staffProfile.position}</span>
          <p className="text-xl font-semibold">{staffProfile.name}</p>
        </div>

        <p className="text-primary font-medium mb-8">{staffProfile.oneWord}</p>

        {staffProfile.description && (
          <p className="mb-8 whitespace-pre-line">{staffProfile.description}</p>
        )}

        {isCareerProfile && (
          <div className="bg-gray-200 px-6 py-8 rounded-lg">
            {staffProfile.career && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">経歴</h3>

                <p className="whitespace-pre-line">{staffProfile.career}</p>
              </div>
            )}

            {staffProfile.coachingAchievement && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">指導実績</h3>

                <p className="whitespace-pre-line">
                  {staffProfile.coachingAchievement}
                </p>
              </div>
            )}

            {staffProfile.license && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">資格</h3>

                <p className="whitespace-pre-line">{staffProfile.license}</p>
              </div>
            )}

            {staffProfile.playerHistory && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">選手歴</h3>

                <p className="whitespace-pre-line">
                  {staffProfile.playerHistory}
                </p>
              </div>
            )}

            {staffProfile.playerAchievement && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">選手実績</h3>

                <p className="whitespace-pre-line">
                  {staffProfile.playerAchievement}
                </p>
              </div>
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
