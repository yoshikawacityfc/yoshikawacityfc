import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { HeroContent } from "@/features/hero-content/components";
import { JuniorYouth } from "@/features/junior-youth/components";
import { News } from "@/features/news/components";
import { SocialContribution } from "@/features/social-contribution/components";
import { SponsorRecruiting } from "@/features/sponsor-recruiting/components";

export default function Web() {
  return (
    <MainLayout>
      <main>
        <section>
          <HeroContent />
        </section>

        <section className="mt-[420px]">
          <AboutTeam />
        </section>

        <section className="mt-[420px]">
          <JuniorYouth />
        </section>

        <section className="mt-[-100px]">
          <SocialContribution />
        </section>

        <section className="mt-[420px]">
          <News />
        </section>

        <section className="mt-[520px]">
          <SponsorRecruiting />
        </section>
      </main>
    </MainLayout>
  );
}
