"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    //reirect
    router.push("/build-wig");
  }, [router]);

  return null;
}
