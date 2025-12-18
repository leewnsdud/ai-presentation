import { newsItems } from "./news";
import { keywords } from "./keywords";
import { practiceCategories } from "./practices";

export type DeckComponent =
  | "title"
  | "agenda"
  | "section-intro"
  | "news"
  | "keywords-index"
  | "keyword"
  | "practices"
  | "summary"
  | "links"
  | "qa";

export type DeckEntry = {
  slug: string;
  title: string;
  component: DeckComponent;
  stepCount?: number;
  data?: Record<string, unknown>;
  note?: string;
};

const references = [
  { label: "OpenAI GPT-4o", url: "https://openai.com/index/introducing-gpt-4o/" },
  { label: "Anthropic Claude 3.5 Sonnet", url: "https://www.anthropic.com/news/claude-3-5-sonnet" },
  { label: "Google Gemini 1.5 Pro", url: "https://blog.google/technology/ai/google-gemini-update-1-5-pro/" },
  { label: "GitHub: The State of AI in Software Development (2024)", url: "https://github.blog/2024-06-18-the-state-of-ai-in-software-development/" },
  { label: "Model Context Protocol", url: "https://spec.modelcontextprotocol.io" },
  { label: "Vercel AI SDK", url: "https://sdk.vercel.ai" },
  { label: "OpenAI Function Calling 가이드", url: "https://platform.openai.com/docs/guides/function-calling" },
];

export const deck: DeckEntry[] = [
  {
    slug: "title",
    title: "AI 키워드 훑어보기",
    component: "title",
    data: {
      kicker: "Internal Dev Talk",
      date: "2025",
    },
  },
  {
    slug: "agenda",
    title: "오늘 이야기",
    component: "agenda",
    stepCount: 2,
    data: {
      items: [
        "AI 관련 뉴스: 3~4건의 흐름 훑기",
        "AI 관련 키워드: LLM, RAG, MCP, 도구호출 등",
        "현업 활용: 개발자의 베스트 프랙티스 3분류",
      ],
    },
  },
  {
    slug: "news-intro",
    title: "AI 관련 뉴스",
    component: "section-intro",
    data: { accent: "News", description: "제품/모델 리더들과 현업 활용 흐름" },
  },
  {
    slug: "news-overview",
    title: "AI 관련 뉴스",
    component: "news",
    stepCount: newsItems.length,
    data: { news: newsItems },
  },
  {
    slug: "keywords-intro",
    title: "AI 관련 키워드",
    component: "section-intro",
    data: { accent: "Keywords", description: "개발자가 챙겨야 할 개념/도구" },
  },
  {
    slug: "keywords-map",
    title: "키워드 지도",
    component: "keywords-index",
    stepCount: 1,
    data: { keywords },
  },
  ...keywords.map((keyword) => ({
    slug: `keyword-${keyword.id}`,
    title: keyword.label,
    component: "keyword" as const,
    stepCount: 4,
    data: { keyword },
  })),
  {
    slug: "practices-intro",
    title: "현업에서 활용 가능한 AI",
    component: "section-intro",
    data: { accent: "Practice", description: "팀/개발자 입장에서 바로 적용" },
  },
  ...practiceCategories.map((category) => ({
    slug: `practice-${category.id}`,
    title: category.label,
    component: "practices" as const,
    stepCount: 3,
    data: { category },
  })),
  {
    slug: "qa",
    title: "Q&A",
    component: "qa",
    data: { message: "무엇이든 편하게 질문 주세요." },
  },
];

