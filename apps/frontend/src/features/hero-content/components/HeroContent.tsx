export const HeroContent = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center">
        <p className="p-4 text-2xl text-center text-secondary mb-4 shadow-lg opacity-80 rounded-sm">
          吉川市のフットボールの文化を創り・育む
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
