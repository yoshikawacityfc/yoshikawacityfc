import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { Hero } from "@/features/hero/components";
import { JuniorYouth } from "@/features/junior-youth/components";
import { News } from "@/features/news/components";
import { SocialContribution } from "@/features/social-contribution/components";
import { SponsorRecruiting } from "@/features/sponsor_recruiting/components";

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

        <section className="mt-96">
          <News />
        </section>

        <section className="mt-96">
          <SponsorRecruiting />
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
