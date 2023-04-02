export interface StaffProfile {
  position: string;
  one_word: string;
  name: string;
  id: any;
  profile_image_asset_id?: any;
  player_history: (string | null)[];
  player_achievement: (string | null)[];
  license: (string | null)[];
  description: string;
  coaching_achievement: (string | null)[];
  career: (string | null)[];
}
