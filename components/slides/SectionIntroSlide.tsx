"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import { SlideProps } from "./types";

type SectionIntroData = {
  accent: string;
  description: string;
};

export function SectionIntroSlide({ data }: SlideProps<SectionIntroData>) {
  if (!data) return null;
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <Pill tone="accent" className="text-base">
        {data.accent}
      </Pill>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-white sm:text-5xl"
      >
        {data.description}
      </motion.h2>
      <p className="text-lg text-slate-300">
        키 포인트를 빠르게 훑고, 이후 슬라이드에서 사례/세부 포인트를 깊이 있게 봅니다.
      </p>
    </div>
  );
}

