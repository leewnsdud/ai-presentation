"use client";

import { motion } from "framer-motion";
import { ListChecks } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SlideProps } from "./types";

type AgendaData = {
  items: string[];
};

export function AgendaSlide({ data, step }: SlideProps<AgendaData>) {
  if (!data) return null;
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center gap-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <ListChecks size={26} className="text-[var(--accent)]" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-400">Agenda</div>
          <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">오늘의 목차</h1>
          <p className="mt-3 text-base text-slate-400">오늘 이야기할 흐름을 먼저 훑고, 각 섹션으로 자연스럽게 이어집니다.</p>
        </div>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-3">
        {data.items.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: step >= idx ? 1 : 0.35, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="h-full bg-white/[0.04] text-left">
              <div className="text-sm font-semibold text-white">#{idx + 1}</div>
              <p className="mt-2 text-base leading-relaxed text-slate-200">{item}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

