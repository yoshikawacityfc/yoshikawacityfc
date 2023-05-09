import { useRouter } from "next/router";
import { useEffect } from "react";
import { existsGaId, pageView } from "./index";

type RouteChangeCompleteEventOptions = {
  shallow: boolean;
};

export const usePageView = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (
      path: string,
      { shallow }: RouteChangeCompleteEventOptions
    ) => {
      if (!shallow) {
        pageView(path);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
