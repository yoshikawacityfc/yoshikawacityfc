import { Pagination } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { useRouter } from "next/router";
import { NEWS_DEMO_DATA } from "../data";
import { NewsCardList } from "./NewsCardList";

export const NewsList = (): JSX.Element => {
  const router = useRouter();
  const currentPage = Number(router.query.page || 1);

  const handlePageChange = (pageNumber: number) => {
    router.push(`${PagePaths.news()}?page=${pageNumber}`);
  };

  return (
    <>
      <div className="max-w-[1000px] m-auto px-4">
        <h2 className="font-semibold text-6xl text-center mb-24">
          お知らせ一覧
        </h2>

        <NewsCardList news={NEWS_DEMO_DATA} />

        <div className="mt-16 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
