"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { CodeBlock } from "@/components/ui/code-block";
import { PracticeCategory } from "@/data/practices";
import { SlideProps } from "./types";

type PracticeData = {
  category: PracticeCategory;
};

export function PracticeSlide({ data, step }: SlideProps<PracticeData>) {
  if (!data) return null;
  const { category } = data;

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center gap-9 text-center">
      <div className="flex flex-col items-center gap-4">
        <Pill tone="accent" className="text-xs uppercase tracking-[0.35em]">
          Practice
        </Pill>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{category.label}</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{category.description}</p>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-3">
        {category.practices.map((practice, idx) => (
          <motion.div
            key={practice.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= idx + 1 ? 1 : 0.35, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="flex h-full flex-col bg-white/[0.05] p-6 text-left sm:p-7">
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                <Lightbulb size={20} className="text-[var(--accent)]" />
                {practice.title}
              </div>
              <p className="mt-3 text-base leading-relaxed text-slate-200">{practice.detail}</p>
              {practice.tip && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Tip — {practice.tip}
                </div>
              )}
              {practice.prompt && (
                <div className="mt-3">
                  <CodeBlock label="프롬프트 예시" className="text-xs">
                    {practice.prompt}
                  </CodeBlock>
                </div>
              )}
              {practice.resources && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {practice.resources.map((resource) => (
                    <Link
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 transition hover:border-[var(--accent)] hover:text-white"
                    >
                      <ExternalLink size={12} />
                      {resource.label}
                    </Link>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

