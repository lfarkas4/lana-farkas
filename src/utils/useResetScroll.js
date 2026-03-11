import { useEffect } from "react";
import { useRouter } from "next/router";

export function useResetScroll() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [router.asPath]);
}

export default useResetScroll;
