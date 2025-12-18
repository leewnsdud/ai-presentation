import { redirect } from "next/navigation";
import { deck } from "@/data/deck";

export default function Home() {
  const first = deck[0]?.slug ?? "title";
  redirect(`/slides/${first}`);
}
