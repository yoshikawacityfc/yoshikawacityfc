import { ReactNode, useEffect, useRef } from "react";

type ScrollrevealOptions = scrollReveal.ScrollRevealObjectOptions;

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
} & ScrollrevealOptions;

export const ScrollAnimation = ({
  children,
  className,
  ...props
}: ScrollAnimationProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      if (containerRef === null) return;

      const sr = (await import("scrollreveal")).default;
      sr().reveal(containerRef.current as HTMLElement, props);
    };

    animate();
  }, [containerRef]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
