"use client";

import { ExternalLink, Link2 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SlideProps } from "./types";

type LinksData = {
  references: { label: string; url: string }[];
};

export function LinksSlide({ data }: SlideProps<LinksData>) {
  if (!data) return null;
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center gap-2 text-slate-300">
        <Link2 size={18} className="text-[var(--accent)]" />
        참고 링크 & 원문
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.references.map((ref) => (
          <Card key={ref.url} className="flex items-center justify-between bg-white/[0.04]">
            <div className="pr-4 text-sm text-slate-200">{ref.label}</div>
            <Link
              href={ref.url}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-100 transition hover:border-[var(--accent)]"
            >
              <ExternalLink size={14} />
              열기
            </Link>
          </Card>
        ))}
      </div>
      <div className="text-sm text-slate-400">
        모델/프로토콜/도구는 빠르게 업데이트됩니다. 최신 릴리스 노트와 샘플을 자주 확인하세요.
      </div>
    </div>
  );
}

