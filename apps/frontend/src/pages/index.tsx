import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { HeroContent } from "@/features/hero-content/components";
import { JuniorYouth } from "@/features/junior-youth/components";
import { NewsPreview } from "@/features/news/components";
import { School } from "@/features/school/components";
import { SocialContribution } from "@/features/social-contribution/components";
import { SponsorRecruiting } from "@/features/sponsor-recruiting/components";
import { NextPage } from "next";

const Top: NextPage = () => {
  return (
    <MainLayout>
      <section>
        <HeroContent />
      </section>

      <section className="mt-[160px]">
        <AboutTeam />
      </section>

      <section className="mt-[220px]">
        <JuniorYouth />
      </section>

      <section className="mt-[-120px] mx-4">
        <School />
      </section>

      <section className="mt-[220px]">
        <SocialContribution />
      </section>

      <section className="mt-[220px] sm:mt-[320px]">
        <NewsPreview />
      </section>

      <section className="mt-[320px]">
        <SponsorRecruiting />
      </section>
    </MainLayout>
  );
};

export default Top;
