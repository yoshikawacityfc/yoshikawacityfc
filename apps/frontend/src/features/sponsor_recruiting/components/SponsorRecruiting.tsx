export const SponsorRecruiting = (): JSX.Element => {
  return (
    <div className="bg-tertiary w-full h-44 flex">
      <div className="max-w-[1000px] m-auto relative h-full flex items-center">
        <p className="px-4 text-sm sm:text-base">
          クラブを支えて下さるパートナー様を募集しています。
          <br />
          クラブと共に新たな価値を創造するお手伝いが出来ればと考えています。
          <br />
          お問い合わせお待ちしています。
        </p>

        <img
          src="sponsor-recruiting.svg"
          alt="sponsor-recruiting"
          className="h-[256px] transform translate-y-[-40px]"
        />
      </div>
    </div>
  );
};
