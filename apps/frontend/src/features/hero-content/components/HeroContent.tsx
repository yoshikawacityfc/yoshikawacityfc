export const HeroContent = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center">
        <p className="p-4 text-5xl text-center text-secondary mb-4 opacity-80 rounded-sm">
          <span className="inline-block mr-4">YOSHiKAWA</span>
          <span className="inline-block mt-4">CiTY FC</span>
        </p>
      </div>

      <img
        src="/hero.webp"
        alt="hero"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};
