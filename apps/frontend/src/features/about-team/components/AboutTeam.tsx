import { Button, ScrollAnimation } from "@/components/Elements";
import { YoshikawaCity } from "./YoshikawaCity";

export const AboutTeam = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center max-w-[1000px] m-auto flex-wrap-reverse px-4">
      <ScrollAnimation
        duration={1500}
        className="flex flex-col items-center md:w-1/2"
      >
        <img src="../logo.svg" alt="logo" className="w-[100px]" />

        <h2 className="font-semibold text-6xl my-10">YCFCとは</h2>

        <p className="font-medium mb-16">
          YOSHiKAWA CiTY
          FCは埼玉県吉川市にフットボール文化を創り育む事を理念として活動します。
        </p>

        <div className="w-3/4">
          <Button label="もっと詳しく" fullWidth />
        </div>
      </ScrollAnimation>

      <YoshikawaCity />
    </div>
  );
};
