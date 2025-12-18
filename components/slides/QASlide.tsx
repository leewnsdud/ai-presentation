"use client";

import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SlideProps } from "./types";

type QAData = {
  message: string;
};

export function QASlide({ data }: SlideProps<QAData>) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2 text-slate-300">
        <MessageCircle size={18} className="text-[var(--accent)]" />
        Q&A
      </div>
      <h3 className="text-3xl font-semibold text-white">무엇이든 편하게 질문 주세요.</h3>
      <Card className="bg-white/[0.04]">
        <p className="text-slate-200">
          {data?.message ??
            "궁금한 점, 적용이 막히는 부분, 팀 상황에 맞춘 최적화를 함께 논의해보면 좋겠습니다."}
        </p>
      </Card>
    </div>
  );
}

