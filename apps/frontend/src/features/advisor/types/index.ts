interface ProfileImage {
  url: string;
  height: number;
  width: number;
}

export interface AdvisorProfile {
  id: string;
  name: string;
  position: string | null;
  description: string | null;
  profileImage: ProfileImage;
}
