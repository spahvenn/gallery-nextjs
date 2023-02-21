import { useRouter } from "next/router";
import { useEffect } from "react";

// Used for scrolling the position to top on router page changes
export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
