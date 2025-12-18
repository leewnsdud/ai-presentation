"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { Keyword } from "@/data/keywords";
import { SlideProps } from "./types";

type KeywordsIndexData = {
  keywords: Keyword[];
};

export function KeywordsIndexSlide({ data, step }: SlideProps<KeywordsIndexData>) {
  if (!data) return null;
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center gap-10 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <Map size={24} className="text-[var(--accent)]" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.45em] text-slate-500">Keyword Map</div>
          <h2 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">오늘 다룰 키워드</h2>
        </div>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-2">
        {data.keywords.map((keyword, idx) => (
          <motion.div
            key={keyword.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: step >= 1 ? 1 : 0.5, y: 0 }}
            transition={{ delay: idx * 0.02 }}
          >
            <Card className="flex h-full flex-col justify-between bg-white/[0.05] p-5 text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">#{idx + 1}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{keyword.label}</div>
              <p className="mt-1 text-sm text-slate-400">{keyword.id}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

