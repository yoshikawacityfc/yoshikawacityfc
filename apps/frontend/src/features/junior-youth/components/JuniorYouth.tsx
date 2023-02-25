import { Button } from "@/components/Elements";

export const JuniorYouth = (): JSX.Element => {
  return (
    <>
      <div className="bg-primary text-secondary w-full">
        <div className="max-w-[1000px] m-auto p-4 flex items-center flex-col">
          <h2 className="font-semibold text-6xl text-center">Jr.ユース</h2>

          <p className="text-center my-12">
            フットボールの力で、人、地域をもっと笑顔にするチームを目指します。
          </p>

          <img src="../junior-football.jpg" alt="junior-football" />

          <h3 className="text-2xl text-center my-12">
            2023年Jr.ユース（U-15始動）
          </h3>

          <p className="text-center">
            2023年度から始動する、埼玉県吉川市を拠点に活動をするJr.ユースチームです。【大人の描く想像を超えていく】選手の育成を目指すクラブチームです。スポーツジムとの連携、テクノロジーの活用、各種専門家との交流など選手1人1人の成長の為に全力を尽くします。
          </p>

          <a className="relative my-12 block">
            <div className="absolute">
              <p>2023年度始動 第1期期生</p>
              <p>選手募集</p>
            </div>

            <img src="../ball.jpg" alt="ball" />
          </a>

          <Button label="Jr.ユースページへ" color="secondary" fullWidth />
        </div>
      </div>
    </>
  );
};
