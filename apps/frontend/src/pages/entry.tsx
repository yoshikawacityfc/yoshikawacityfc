import { Icon } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

const Entry: NextPage = () => {
  return (
    <MainLayout>
      <section className="pt-64 max-w-[1000px] m-auto px-4">
        <h2 className="font-semibold text-5xl sm:text-6xl text-center mb-32">
          入会案内
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-primary font-bold text-7xl mb-8">01</p>
            <h3 className="font-semibold text-4xl mb-4">入会体験申込</h3>
            <p>
              各練習日または入会体験会にご参加ください。お問合せフォームまたはメールにてお申込ください。
            </p>
          </div>

          <img src="/entry.png" alt="entry" className="m-auto" />
        </div>

        {/* TODO: アイコン自作 */}
        <Icon
          icon={faAnglesDown}
          size="4xlarge"
          className="m-auto block my-8"
        />
      </section>
    </MainLayout>
  );
};

export default Entry;
