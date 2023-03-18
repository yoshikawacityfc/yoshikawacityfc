export interface StaffProfile {
  /** id */
  id: number;
  /** プロフィール画像 */
  profileImage: string;
  /** 役職 */
  position: string;
  /** 氏名 */
  name: string;
  /** 一言 */
  oneWord: string;
  /** 説明 */
  description: string;
  /** ライセンス */
  license?: string[];
  /** 指導歴 */
  coachingHistory?: string[];
  /** 指導実績 */
  coachingAchievement?: string[];
  /** 選手歴 */
  playerHistory?: string[];
  /** 選手実績 */
  playerAchievement?: string[];
}
