import { Button, Modal } from "@/components/Elements";
import { EMPTY_USER_IMAGE_PATH } from "@/constants/image";
import { AdvisorProfile } from "../types";

interface AdvisorProfileModalProps {
  visible: boolean;
  advisorProfile: AdvisorProfile;
  onClose: () => void;
}

export const AdvisorProfileModal = ({
  visible,
  advisorProfile,
  onClose,
}: AdvisorProfileModalProps): JSX.Element => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="w-[90vw] max-w-[700px] overflow-scroll p-6">
        <img
          src={advisorProfile.profileImage || EMPTY_USER_IMAGE_PATH}
          alt={advisorProfile.name}
          className="object-cover w-[200px] h-[200px] rounded-[50%] m-auto mb-4"
        />

        <div className="flex flex-col items-center mb-8">
          <span className="text-sm">{advisorProfile.position}</span>
          <p className="text-xl font-semibold">{advisorProfile.name}</p>
        </div>

        {advisorProfile.description && (
          <p className="mb-8 whitespace-pre-line">
            {advisorProfile.description}
          </p>
        )}

        <div className="w-3/4 m-auto mt-8 px-4">
          {/* NOTE: モーダルを開くタイミングで強制的にボタンまでスクロールしてしまうためtabIndexに負の値を渡す */}
          <Button label="閉じる" fullWidth tabIndex={-1} onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};
