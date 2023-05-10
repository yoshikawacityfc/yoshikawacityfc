import { Button } from "@/components/Elements";
import { PagePaths } from "@/lib/pagePaths";
import { NextPage } from "next";
import { useRouter } from "next/router";

// 404ページ作成
const NotFoundPage: NextPage = () => {
  const route = useRouter();

  return (
    <div className="h-screen w-scree bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="/assets/image/logo-white.svg"
          alt="logo-white"
          className="w-[100px] mb-6"
        />

        <div className="text-secondary text-center">
          <h1 className="text-9xl font-bold mb-8">404</h1>
          <h2 className="text-2xl font-normal">ページが見つかりませんでした</h2>
        </div>

        <div className="m-auto w-full mt-16">
          <Button
            label="トップへ戻る"
            color="secondary"
            fullWidth
            onClick={() => route.push(PagePaths.index())}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
