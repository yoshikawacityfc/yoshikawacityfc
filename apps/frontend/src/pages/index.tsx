import { MainLayout } from "@/components/Layout";
import { AboutTeam } from "@/features/about-team/components";
import { HeroContent } from "@/features/hero-content/components";
import { JuniorYouth } from "@/features/junior-youth/components";
import { NewsPreview } from "@/features/news/components";
import { NewsListItem } from "@/features/news/types";
import { School } from "@/features/school/components";
import { SocialContribution } from "@/features/social-contribution/components";
import { SponsorRecruiting } from "@/features/sponsor-recruiting/components";
import { cmsClient } from "@/lib/cmsClient";
import { GetStaticProps, NextPage } from "next";

interface TopProps {
  news: NewsListItem[];
}

const Top: NextPage<TopProps> = ({ news }: TopProps) => {
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
        <NewsPreview news={news} />
      </section>

      <section className="mt-[320px]">
        <SponsorRecruiting />
      </section>
    </MainLayout>
  );
};

export default Top;

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await cmsClient.get({
    endpoint: "news",
    queries: { orders: "-publishedAt", limit: 10 },
  });

  const news = data.contents.map((content: any) => {
    return {
      id: content.id,
      title: content.title,
      publishedAtString: content.publishedAt,
      thumbnail: content.eyecatch ?? null,
    };
  });

  return {
    props: {
      news,
    },
  };
};
