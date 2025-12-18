"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { SlideProps } from "./types";

type TitleData = {
  kicker: string;
  date: string;
};

export function TitleSlide({ data }: SlideProps<TitleData>) {
  if (!data) return null;
  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <Pill tone="accent" className="text-sm">
          {data.kicker}
        </Pill>
        <span className="text-slate-400">{data.date}</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold leading-tight text-white sm:text-[48px]"
      >
        AI 키워드 훑어보기
      </motion.h1>

      <div className="flex items-center gap-3 text-sm text-slate-300">
        <Sparkles size={18} className="text-[var(--accent)]" />
        개발자 관점으로 AI 트렌드·키워드·실전 활용을 20분 압축
      </div>
    </div>
  );
}

