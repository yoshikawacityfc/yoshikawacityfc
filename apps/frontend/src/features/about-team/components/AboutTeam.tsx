import { Button } from "@/components/Elements";

export const AboutTeam = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center max-w-[1000px] m-auto flex-wrap-reverse px-4">
      <div className="flex flex-col items-center md:w-1/2">
        <img src="../logo.webp" alt="logo" className="w-[100px]" />

        <h2 className="font-semibold text-6xl my-10">YCFCとは</h2>

        <p className="font-medium mb-16">
          YOSHiKAWA CiTY
          FCは埼玉県吉川市にフットボール文化を創り育む事を理念として活動します。
        </p>

        <div className="w-3/4">
          <Button label="もっと詳しく" fullWidth />
        </div>
      </div>

      <img
        src="../spike-and-ball-yoshikawa.png"
        alt="spike-and-ball"
        className="w-1/2 min-w-[360px]"
      />
    </div>
  );
};
