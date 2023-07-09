interface ProfileImage {
  url: string;
  height: number;
  width: number;
}

export interface StaffProfile {
  id: string;
  name: string;
  position: string | null;
  oneWord: string | null;
  description: string | null;
  license: string | null;
  career: string | null;
  coachingAchievement: string | null;
  playerHistory: string | null;
  playerAchievement: string | null;
  profileImage: ProfileImage | null;
}
