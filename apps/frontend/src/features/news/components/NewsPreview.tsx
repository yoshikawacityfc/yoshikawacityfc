import { Button, ScrollAnimation } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import { NewsCardSliderList } from "./NewsCardSliderList";
import { NewsListItem } from "../types";

interface NewsPreviewProps {
  news: NewsListItem[];
}

export const NewsPreview = ({ news }: NewsPreviewProps): JSX.Element => {
  const router = useRouter();

  return (
    <ScrollAnimation delay={300} className="flex flex-col items-center">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
        お知らせ
      </h2>

      {news.length > 0 && <NewsCardSliderList news={news} />}

      <div className="mt-24 max-w-[800px] w-3/4">
        <Button
          label="もっと見る"
          fullWidth
          onClick={() => router.push(PagePaths.news())}
        />
      </div>
    </ScrollAnimation>
  );
};
