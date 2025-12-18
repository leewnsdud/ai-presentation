"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SlideProps } from "./types";

type SummaryData = {
  bullets: string[];
};

export function SummarySlide({ data, step }: SlideProps<SummaryData>) {
  if (!data) return null;

  return (
    <div className="flex h-full flex-col gap-6">
      <p className="text-lg text-slate-200">
        트렌드 → 키워드 → 실무 활용 순서로 정리했습니다. 바로 시도할 1~2가지를 골라보세요.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.bullets.map((bullet, idx) => (
          <motion.div
            key={bullet}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: step >= idx + 1 ? 1 : 0.35, y: 0 }}
            transition={{ delay: idx * 0.04 }}
          >
            <Card className="h-full bg-white/[0.04]">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 size={18} className="text-[var(--accent)]" />
                <span>{bullet}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

