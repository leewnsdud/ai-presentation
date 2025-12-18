import { notFound } from "next/navigation";
import { DeckPlayer } from "@/components/deck/DeckPlayer";
import { deck } from "@/data/deck";

type SlidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return deck.map((slide) => ({ slug: slide.slug }));
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { slug } = await params;

  const exists = deck.some((slide) => slide.slug === slug);
  if (!exists) {
    notFound();
  }

  return <DeckPlayer deck={deck} currentSlug={slug} />;
}

