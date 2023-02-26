import { Button, ScrollAnimation } from "@/components/Elements";
import { News as NewsType } from "../types";
import { NewsCardList } from "./NewsCardList";

// TODO: データ繋ぎ込み後に削除
const NEWS_DEMO_DATA: NewsType[] = [
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "ウェアのサイズ合わせを行いました",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "スポーツクラブルネサンス様とのタイアップ",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "2023年 第一回練習会",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "ウェアのサイズ合わせを行いました",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title:
      "スポーツクラブルネサンス様とのタイアップスポーツクラブルネサンス様とのタイアップスポーツクラブルネサンス様とのタイアップ",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "2023年 第一回練習会",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "ウェアのサイズ合わせを行いました",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title:
      "スポーツクラブルネサンス様とのタイアップスポーツクラブルネサンス様とのタイアップスポーツクラブルネサンス様とのタイアップ",
    updateDate: "2023.01.28",
  },
  {
    thumbnailSrc: "/social-contribution.jpg",
    title: "2023年 第一回練習会",
    updateDate: "2023.01.28",
  },
];

export const News = (): JSX.Element => {
  return (
    <ScrollAnimation delay={500} className="flex flex-col items-center">
      <h2 className="font-semibold text-6xl text-center mb-24">お知らせ</h2>

      <NewsCardList news={NEWS_DEMO_DATA} />

      <div className="mt-24 max-w-[1000px] w-3/4">
        <Button label="もっと見る" fullWidth />
      </div>
    </ScrollAnimation>
  );
};
