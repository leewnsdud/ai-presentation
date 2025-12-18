"use client";

import { motion } from "framer-motion";
import { BadgeInfo } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { Keyword } from "@/data/keywords";
import { SlideProps } from "./types";

type KeywordData = {
  keyword: Keyword;
};

export function KeywordSlide({ data, step }: SlideProps<KeywordData>) {
  if (!data) return null;
  const { keyword } = data;

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center gap-9 text-center">
      <div className="flex flex-col items-center gap-4">
        <Pill tone="muted" className="text-xs uppercase tracking-[0.4em]">
          {keyword.id}
        </Pill>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">{keyword.label}</h2>
        <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{keyword.summary}</p>
      </div>
      <div className="grid w-full gap-5 md:grid-cols-2">
        {keyword.cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= idx + 1 ? 1 : 0.35, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="h-full bg-white/[0.05] p-6 text-left sm:p-8">
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                <BadgeInfo size={20} className="text-[var(--accent)]" />
                {card.title}
              </div>
              <p className="mt-3 text-base leading-relaxed text-slate-200">{card.body}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

