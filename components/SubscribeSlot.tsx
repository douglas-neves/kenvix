"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { safeGetItem, STORAGE_KEYS } from "@/lib/localStorage";
import { SubscribeModal } from "./SubscribeModal";

export function SubscribeSlot() {
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setSubscribed(safeGetItem(STORAGE_KEYS.subscribed) === "true");
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary mt-8 w-full md:w-[360px] lg:w-[320px]"
        aria-haspopup="dialog"
      >
        {subscribed ? (
          <>
            <Check aria-hidden className="h-5 w-5" strokeWidth={2} />
            Você está na lista
          </>
        ) : (
          <>
            Seja avisado na abertura
            <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={1.5} />
          </>
        )}
      </button>
      <SubscribeModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => setSubscribed(true)}
      />
    </>
  );
}
