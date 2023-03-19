import { Button, Modal } from "@/components/Elements";
import { useMemo } from "react";
import { STAFF_EMPTY_IMG_PATH } from "../constants";
import { StaffProfile } from "../types";

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
    ].every((item) => !item);
  }, [staffProfile]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="w-[90vw] max-w-[700px] h-[90vh] overflow-scroll p-6">
        <img
          src={staffProfile.profileImage || STAFF_EMPTY_IMG_PATH}
          alt={staffProfile.name}
          className="object-cover w-[200px] h-[200px] rounded-[50%] m-auto mb-4"
        />

        <div className="flex flex-col items-center mb-8">
          <span className="text-sm">{staffProfile.position}</span>
          <p className="text-xl font-semibold">{staffProfile.name}</p>
        </div>

        <p className="text-primary font-semibold mb-8">
          {staffProfile.oneWord}
        </p>

        {staffProfile.description && (
          <p className="mb-8 whitespace-pre-line">{staffProfile.description}</p>
        )}

        {isCareerProfile && (
          <div className="bg-gray-200 px-6 py-8 rounded-lg">
            {/* TODO: リストコンポーネント化 */}
            {staffProfile.career && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">経歴</h3>

                <ul>
                  {staffProfile.career.map((item, index) => (
                    <li className="mb-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {staffProfile.coachingAchievement && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">指導実績</h3>

                <ul>
                  {staffProfile.coachingAchievement.map((item, index) => (
                    <li className="mb-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {staffProfile.license && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">資格</h3>

                <ul>
                  {staffProfile.license.map((item, index) => (
                    <li className="mb-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {staffProfile.playerHistory && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">選手歴</h3>

                <ul>
                  {staffProfile.playerHistory.map((item, index) => (
                    <li className="mb-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {staffProfile.playerAchievement && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">選手実績</h3>

                <ul>
                  {staffProfile.playerAchievement.map((item, index) => (
                    <li className="mb-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
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
