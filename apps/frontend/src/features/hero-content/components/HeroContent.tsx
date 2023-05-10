export const HeroContent = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center">
        <p className="fadeIn p-4 text-2xl md:text-4xl text-center text-secondary opacity-80 font-light">
          <span className="inline-block">吉川市の</span>
          <span className="inline-block">フットボール文化を</span>
          <span className="inline-block">創り、育む</span>
        </p>
      </div>

      <video
        src="/assets/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="object-cover h-screen w-screen"
      ></video>
    </div>
  );
};
