import { MainLayout } from "@/components/Layout";
import { NextPage } from "next";

const Concept: NextPage = () => {
  return (
    <MainLayout title="クラブコンセプト">
      <section className="pt-64 max-w-[800px] m-auto px-4 mb-40">
        <img src="/logo.svg" alt="logo" className="w-[200px] m-auto mb-40" />

        {/* PHILOSOPHY */}
        <div className="mb-32">
          <h2 className="font-semibold text-5xl sm:text-6xl mb-12">
            PHILOSOPHY
          </h2>
          <h4 className="text-2xl font-medium mb-6">
            大人の描く想像を超える選手の育成を
          </h4>
          <p>
            明確な数字の目標では、達成後にノルマとなり作業になる。クラブとして上手い選手を育てる事は可能かもしれないが、いずれクラブとしての発展もなくなる。選手達の未来、無限の可能性を開花させる事を目指すクラブです。
          </p>
        </div>

        {/* CONCEPT */}
        <div className="mb-32">
          <h2 className="font-semibold text-5xl sm:text-6xl mb-12">CONCEPT</h2>
          <h4 className="text-2xl font-medium mb-6">
            選手一人ひとりの成長の為に全力を尽くす
          </h4>
          <ol>
            <li>1. 心・ルールの遵守、整理整頓、感謝</li>
            <li>2. 技・判断の質、判断のスピード、戦術理解、実行力</li>
            <li>3. 体・文武両道、健康、身体の成長に合ったトレーニング</li>
          </ol>
        </div>

        {/* VISION */}
        <div>
          <h2 className="font-semibold text-5xl sm:text-6xl mb-12">VISION</h2>

          <h4 className="text-2xl font-medium mb-6">人間性と社会性を高める</h4>
          <ul className="mb-12">
            <li className="mb-4">
              サッカーは自分の性格やその時のメンタルがプレーに大きく影響するスポーツです。挨拶や身だしなみを整える事でプレーでやるべき事が整理できます。
            </li>
            <li className="mb-4">
              サッカーは一人では成り立たないスポーツです。社会性を高めていく事で周りにいる人を思いやる心を育て、ピッチ内外において仲間を助けられる存在へと成長していけます。
            </li>
            <li>
              高校、大学や専門学校、プロや社会人、どのステージに進んでいっても通用する人間に成るよう自立した人間性と社会性の成長を促します。
            </li>
          </ul>

          <h4 className="text-2xl font-medium mb-6">進路を自ら切り拓く</h4>
          <ul>
            <li className="mb-4">
              文武両道。サッカーだけでなく学校生活や学業を疎かにしない。自分の進みたい進路には必ず成績が関わります。家庭での生活も含め時間の使い方を考えましょう。
            </li>
            <li>
              クラブは選手自身が進みたい進路をサポートします。ユース、高体連に関わらず全てのチームとコンタクトを取って必ずプレーを相手スタッフに観て機会を作ります。
            </li>
          </ul>
        </div>
      </section>
    </MainLayout>
  );
};

export default Concept;
