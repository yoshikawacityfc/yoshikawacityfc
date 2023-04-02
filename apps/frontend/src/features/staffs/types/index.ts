export interface StaffProfile {
  id: any;
  position: string;
  name: string;
  one_word: string;
  description: string;
  license: (string | null)[];
  career: (string | null)[];
  coaching_achievement: (string | null)[];
  player_history: (string | null)[];
  player_achievement: (string | null)[];
  assets?: {
    src: string;
    file_name: string;
  } | null;
}
