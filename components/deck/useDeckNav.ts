"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { DeckEntry } from "@/data/deck";

type UseDeckNavOptions = {
  deck: DeckEntry[];
  currentIndex: number;
  stepCount: number;
};

export function useDeckNav({ deck, currentIndex, stepCount }: UseDeckNavOptions) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const maxStep = Math.max(0, stepCount);

  const goToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= deck.length) return;
      router.push(`/slides/${deck[index].slug}`);
    },
    [deck, router],
  );

  const goNextSlide = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      goToIndex(currentIndex + 1);
    }
  }, [currentIndex, deck.length, goToIndex]);

  const goPrevSlide = useCallback(() => {
    if (currentIndex > 0) {
      const prevStep = Math.max(0, (deck[currentIndex - 1].stepCount ?? 0));
      setStep(prevStep);
      goToIndex(currentIndex - 1);
    }
  }, [currentIndex, deck, goToIndex]);

  const goStepForward = useCallback(() => {
    if (step < maxStep) {
      setStep((s) => Math.min(maxStep, s + 1));
    } else {
      goNextSlide();
    }
  }, [goNextSlide, maxStep, step]);

  const goStepBack = useCallback(() => {
    if (step > 0) {
      setStep((s) => Math.max(0, s - 1));
    } else {
      goPrevSlide();
    }
  }, [goPrevSlide, step]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goNextSlide();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goPrevSlide();
      } else if (event.key === "ArrowUp" || event.key === " ") {
        event.preventDefault();
        goStepForward();
      } else if (event.key === "ArrowDown" || event.key === "Backspace") {
        event.preventDefault();
        goStepBack();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNextSlide, goPrevSlide, goStepBack, goStepForward]);

  return {
    step,
    setStep,
    goNextSlide,
    goPrevSlide,
    goStepForward,
    goStepBack,
    goToIndex,
  };
}

