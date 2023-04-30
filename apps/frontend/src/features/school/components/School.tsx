import { Button, Icon } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { faArrowTrendUp, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export const School = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="px-4 py-8 shadow-lg rounded-md max-w-[800px] m-auto bg-secondary">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-12">
        CiTY SCHOOL
      </h2>

      <div className="rounded m-auto mb-16 max-w-[650px]">
        <h3 className="font-medium text-2xl mb-6">
          <Icon icon={faFutbol} color="text" size="2xlarge" className="mr-2" />
          ゲームスクール
        </h3>

        <ul>
          <li className="flex border-b-2 py-4 border-gray-100">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              対象
            </div>
            <p>1〜6年生</p>
          </li>
          <li className="flex border-b-2 py-4 border-gray-100">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              会場
            </div>
            <p>吉川市内 （お問い合わせください）</p>
          </li>
          <li className="flex border-b-2 py-4 border-gray-100">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              開催日
            </div>
            <p>毎週水曜日（祝日はお休み）</p>
          </li>
          <li className="flex border-b-2 py-4 border-gray-100">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              時間
            </div>
            <p>18:30~19:45</p>
          </li>
          <li className="flex border-b-2 py-4 border-gray-100">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              費用
            </div>
            <p>
              1回1,000円/年会費3,000円
              <br />
              <span className="text-slate-500 text-sm">
                ※回数券 5回券 4,000円、10券 7,000円
              </span>
            </p>
          </li>
          <li className="flex py-4">
            <div className="mr-4 bg-primary px-2 text-secondary rounded-md flex-shrink-0 h-fit">
              内容
            </div>
            <p>
              W-up後たくさんゲームを行います！
              <br />
              <span className="text-slate-500 text-sm">
                ※毎月第一週目はスキルアップの為のスクールを開催します(4〜6年生）
              </span>
              <br />
              <span className="text-slate-500 text-sm">
                ※体験参加随時受付（2回まで無料）
              </span>
            </p>
          </li>
        </ul>
      </div>

      <div className="w-80 m-auto">
        <Button
          label="入会案内"
          fullWidth
          onClick={() => router.push(PagePaths.entrySchool())}
        />
      </div>
    </div>
  );
};
