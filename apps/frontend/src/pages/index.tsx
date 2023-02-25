import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { Hero } from "@/features/hero/components";
import { JuniorYouth } from "@/features/junior-youth";

export default function Web() {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>

        <section className="mt-96">
          <AboutTeam />
        </section>

        <section className="mt-96">
          <JuniorYouth />
        </section>

        {/* 社会貢献 */}
        <section>
          <h2>社会貢献</h2>

          <h3>”次世代のために”</h3>
          <p>将来を担う子ども達が健全に成長出来る場・機会を提供します。</p>

          <h3>”地域と共に”</h3>
          <p>地域の美化活動を行います</p>

          <h3>”誰もがフットボールに親しむ”</h3>
          <p>
            障がい・年齢・性別・LGBTQなどすべての壁を取り払い「誰もがありのままに、自分らしく」心からスポーツを楽しみ、誰も排除しない”多様性”触れる機会をつくります。
          </p>
        </section>

        {/* お知らせ */}
        <section>
          <h2>お知らせ</h2>

          {[...Array(5)].map((i, index) => {
            return (
              <a key={index}>
                <div>サムネイル画像</div>
                <h4>記事タイトル：{i}</h4>
                <p>日付</p>
              </a>
            );
          })}

          <button>もっと見る</button>
        </section>

        {/* スポンサー募集 */}
        <section>
          <div>サラリーマンイラスト画像</div>
          <p>
            クラブを支えて下さるパートナー様を募集しています。
            <br />
            クラブと共に新たな価値を創造するお手伝いが出来ればと考えています。
            <br />
            お問い合わせお待ちしています。
          </p>
        </section>
      </main>

      {/* フッター */}
      <footer>
        <ul>
          <li>YCFCとは</li>
          <li>クラブコンセプト</li>
          <li>事業</li>
          <li>社会貢献活動</li>
          <li>お問い合わせ</li>
        </ul>

        <p>Copyright© YOSHiKAWA CiTY FC All Rights Reserved.</p>
      </footer>
    </MainLayout>
  );
}
