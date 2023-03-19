import { Button, ScrollAnimation } from "@/components/Elements";
import { NEWS_DEMO_DATA } from "../data";
import { NewsCardSliderList } from "./NewsCardSliderList";

export const NewsPreview = (): JSX.Element => {
  return (
    <ScrollAnimation delay={300} className="flex flex-col items-center">
      <h2 className="font-semibold text-6xl text-center mb-24">お知らせ</h2>

      <NewsCardSliderList news={NEWS_DEMO_DATA} />

      <div className="mt-24 max-w-[1000px] w-3/4">
        <Button label="もっと見る" fullWidth />
      </div>
    </ScrollAnimation>
  );
};
