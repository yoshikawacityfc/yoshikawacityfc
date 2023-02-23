import Image from "next/image";

export const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <p className="z-10 absolute text-white text-2xl">
        吉川市のフットボールの文化を創り・育む
      </p>
      <Image src="/hero.jpg" alt="hero" className="object-cover" fill />
    </section>
  );
};
