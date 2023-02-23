import { Button } from "@/components/Elements";

export const AboutTeam = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center w-1/4 min-w-[400px]">
        <img src="../logo.webp" alt="logo" className="w-[100px]" />

        <h2 className="font-semibold text-6xl my-10">YCFCとは</h2>

        <p className="font-medium mb-16">
          YOSHiKAWA CiTY
          FCは埼玉県吉川市にフットボール文化を創り育む事を理念として活動します。
        </p>

        <Button label="もっと詳しく" fullWidth />
      </div>

      <img
        src="../spike-and-ball.jpg"
        alt="spike-and-ball"
        className="w-1/4 min-w-[400px]"
      />
    </div>
  );
};
