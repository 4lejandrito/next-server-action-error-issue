"use client";
import { useTransition } from "react";
import { getServerData } from "./actions";

export default function Component() {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          getServerData().catch(() => {});
        });
      }}
    >
      Block requests and click me
    </button>
  );
}
