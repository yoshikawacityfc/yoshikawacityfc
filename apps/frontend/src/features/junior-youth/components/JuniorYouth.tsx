import { Button, ScrollAnimation } from "@/components/Elements";
import { useRef } from "react";

export const JuniorYouth = (): JSX.Element => {
  const imgRef = useRef<HTMLImageElement>(null);

  const startAnimation = () => {
    if (imgRef.current === null) return;

    imgRef.current.classList.add("ball-roll");
  };

  const endAnimation = () => {
    if (imgRef.current === null) return;

    imgRef.current.classList.remove("ball-roll");
  };

  return (
    <div className="overflow-hidden">
      <ScrollAnimation
        reset={true}
        beforeReveal={startAnimation}
        afterReset={endAnimation}
      ></ScrollAnimation>

      <div className="relative h-20 flex items-end">
        <img
          src="/grass.svg"
          alt="grass"
          className="w-screen min-w-[1000px] mb-[-1px]"
        />
        <img
          ref={imgRef}
          src="/ball-illust.svg"
          alt="ball-illust"
          className="w-16 absolute bottom-1 left-4"
        />
      </div>

      <div className="bg-primary text-secondary w-full">
        <div className="max-w-[1000px] m-auto px-4 py-8 flex items-center flex-col">
          <h2 className="font-semibold text-6xl text-center">Jr.ユース</h2>

          <p className="text-center my-12">
            フットボールの力で、人、地域をもっと笑顔にするチームを目指します。
          </p>

          <ScrollAnimation
            distance="400px"
            origin="left"
            duration={500}
            opacity={0}
            easing="ease-out"
          >
            <img
              src="/junior-football.jpg"
              alt="junior-football"
              className="max-w-none w-screen min-h-[300px] object-cover"
            />
          </ScrollAnimation>

          <h3 className="text-2xl text-center my-12">
            2023年Jr.ユース（U-15始動）
          </h3>

          <p className="text-center">
            2023年度から始動する、埼玉県吉川市を拠点に活動をするJr.ユースチームです。【大人の描く想像を超えていく】選手の育成を目指すクラブチームです。スポーツジムとの連携、テクノロジーの活用、各種専門家との交流など選手1人1人の成長の為に全力を尽くします。
          </p>

          <ScrollAnimation delay={300}>
            <a className="relative my-12 block shadow-2xl">
              <img
                src="/player-recruiting.png"
                alt="ball"
                className="rounded"
              />
            </a>
          </ScrollAnimation>

          <div className="w-3/4">
            <Button label="Jr.ユースページへ" color="secondary" fullWidth />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary w-full h-[520px] mt-[-1px]"></div>
    </div>
  );
};
