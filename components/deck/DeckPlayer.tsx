"use client";

import { useMemo } from "react";
import { DeckEntry, DeckComponent } from "@/data/deck";
import { useDeckNav } from "./useDeckNav";
import { DeckShell } from "./DeckShell";
import { SlideProps } from "../slides/types";
import { TitleSlide } from "../slides/TitleSlide";
import { AgendaSlide } from "../slides/AgendaSlide";
import { SectionIntroSlide } from "../slides/SectionIntroSlide";
import { NewsSlide } from "../slides/NewsSlide";
import { KeywordsIndexSlide } from "../slides/KeywordsIndexSlide";
import { KeywordSlide } from "../slides/KeywordSlide";
import { PracticeSlide } from "../slides/PracticeSlide";
import { SummarySlide } from "../slides/SummarySlide";
import { LinksSlide } from "../slides/LinksSlide";
import { QASlide } from "../slides/QASlide";

type SlideComponent = (props: SlideProps<unknown>) => JSX.Element | null;

const slideRegistry: Record<DeckComponent, SlideComponent> = {
  title: TitleSlide,
  agenda: AgendaSlide,
  "section-intro": SectionIntroSlide,
  news: NewsSlide,
  "keywords-index": KeywordsIndexSlide,
  keyword: KeywordSlide,
  practices: PracticeSlide,
  summary: SummarySlide,
  links: LinksSlide,
  qa: QASlide,
};

type DeckPlayerProps = {
  deck: DeckEntry[];
  currentSlug: string;
  presenterMode?: boolean;
};

export function DeckPlayer({ deck, currentSlug, presenterMode }: DeckPlayerProps) {
  const currentIndex = useMemo(() => deck.findIndex((slide) => slide.slug === currentSlug), [currentSlug, deck]);
  const currentSlide = deck[currentIndex];
  const stepCount = currentSlide?.stepCount ?? 0;

  const { step, goStepForward, goStepBack } = useDeckNav({
    deck,
    currentIndex,
    stepCount,
  });

  if (!currentSlide) return null;

  const SlideComponent = slideRegistry[currentSlide.component];

  return (
    <DeckShell
      title={currentSlide.title}
      index={currentIndex}
      total={deck.length}
      step={step}
      stepCount={stepCount}
      onPrev={goStepBack}
      onNext={goStepForward}
      presenterMode={presenterMode}
      note={currentSlide.note}
    >
      <SlideComponent step={step} data={currentSlide.data} />
    </DeckShell>
  );
}

