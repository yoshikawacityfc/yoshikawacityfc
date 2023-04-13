import { Button } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { PagePaths } from "@/lib/pagePaths";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Entry: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <section className="pt-64 max-w-[1000px] m-auto px-8 pb-32">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-24">
          入会案内
        </h2>

        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
          <div className="rounded-2xl overflow-hidden h-[600px] relative flex flex-col justify-center">
            <img
              src="/school.jpg"
              alt="school"
              className="object-cover h-full w-full absolute -z-10"
            />

            <h3 className="font-bold text-secondary text-4xl text-center p-2 bg-primary/80">
              スクール
            </h3>

            <div className="absolute bottom-8 left-0 right-0 w-3/4 m-auto">
              <Button
                label="入会案内"
                color="primary"
                fullWidth
                onClick={() => router.push(PagePaths.entrySchool())}
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[600px] relative flex flex-col justify-center">
            <img
              src="/entry-junior-football.jpg"
              alt="entry-junior-football"
              className="object-cover h-full w-full absolute -z-10"
            />

            <h3 className="font-bold text-secondary text-4xl text-center p-2 bg-primary/80">
              Jr.ユース
            </h3>

            <div className="absolute bottom-8 left-0 right-0 w-3/4 m-auto">
              <Button
                label="お問い合わせ"
                color="primary"
                fullWidth
                onClick={() => router.push(PagePaths.contact())}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Entry;
