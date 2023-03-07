export const HeroContent = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center">
        <p className="p-4 text-5xl text-center text-secondary mb-4 opacity-80 rounded-sm">
          <span className="inline-block">吉川市の</span>
          <span className="inline-block mt-4">フットボールの</span>
          <span className="inline-block mt-4">文化を</span>
          <span className="inline-block mt-4">創り・育む</span>
        </p>
      </div>

      <img
        src="/hero.jpg"
        alt="hero"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};
