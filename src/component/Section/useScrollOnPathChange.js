// hooks/useScrollOnPathChange.js
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollOnPathChange = (ref) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768 && ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, ref]);
};

export default useScrollOnPathChange;
