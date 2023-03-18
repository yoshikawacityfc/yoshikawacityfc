import { Modal } from "@/components/Elements";
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
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="w-[75vw] max-w-[700px]">
        <img
          src={staffProfile.profileImage}
          alt={staffProfile.name}
          className="max-w-[200px] m-auto mb-4"
        />

        <div className="flex flex-col items-center mb-8">
          <span className="text-sm">{staffProfile.position}</span>
          <p className="text-xl font-semibold">{staffProfile.name}</p>
        </div>

        <p className="text-primary font-semibold mb-8">
          {staffProfile.oneWord}
        </p>

        <p className="mb-8">{staffProfile.description}</p>

        <div className="bg-gray-200 px-6 py-8 rounded-lg">
          {/* TODO: リストコンポーネント化 */}
          {staffProfile.coachingHistory && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">指導歴</h3>

              <ul>
                {staffProfile.coachingHistory.map((item, index) => (
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
            <div>
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
        </div>
      </div>
    </Modal>
  );
};
