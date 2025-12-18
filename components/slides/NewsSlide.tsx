"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { NewsItem } from "@/data/news";
import { SlideProps } from "./types";

type NewsData = {
  news: NewsItem[];
};

export function NewsSlide({ data, step }: SlideProps<NewsData>) {
  if (!data) return null;
  const items = data.news ?? [];
  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center gap-10 text-center">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.45em] text-slate-500">AI News Radar</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">지금 주목해야 할 흐름 한눈에</h2>
      </div>

      <div className="flex w-full flex-col gap-5 text-left">
        {items.map((news, idx) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= idx ? 1 : 0.25, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="w-full bg-white/[0.05] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Pill tone="accent" className="text-xs">
                    {news.source}
                  </Pill>
                  <span className="text-xs text-slate-500">{news.date}</span>
                </div>
                <Link
                  href={news.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 transition hover:border-[var(--accent)] hover:text-white"
                >
                  원문 보기
                  <ExternalLink size={12} />
                </Link>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{news.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-200">{news.summary}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

