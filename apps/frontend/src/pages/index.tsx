import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { Hero } from "@/features/hero/components";
import { JuniorYouth } from "@/features/junior-youth/components";
import { SocialContribution } from "@/features/social-contribution/components";

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

        <section className="mt-96">
          <SocialContribution />
        </section>

        {/* お知らせ */}
        <section className="mt-96">
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
