export type NewsItem = {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
  highlights: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: "meta-talent-war",
    title: "Meta: 대규모 AI 인재·GPU 투자로 모델 내재화 가속",
    source: "The Information / Reuters",
    date: "2024-11",
    url: "https://www.reuters.com/technology/meta-expands-ai-hiring-infrastructure-2024-11-07/",
    summary:
      "Meta가 파운데이션 모델을 자체 내재화하기 위해 수천 명 규모의 AI 인재 영입과 H100/H200 클러스터 증설을 진행.",
    highlights: [
      "대규모 모델을 사내 배치하려는 기업이 늘면서 인프라·인재 경쟁 심화",
      "모델·인프라 내재화는 개인정보/코드 유출 리스크를 줄이려는 움직임과 연결",
      "개발자 관점: 사내 모델 서빙·관측·배포 역량이 점점 필수 스킬로 부상",
    ],
  },
  {
    id: "copilot-adoption",
    title: "GitHub Copilot 도입: 코드 작성·리뷰 속도 체감 상승",
    source: "GitHub Blog",
    date: "2024-12",
    url: "https://github.blog/2024-12-10-copilot-adoption-report/",
    summary:
      "GitHub는 Copilot 사용 팀에서 반복 작업 자동화와 PR 리드타임 단축이 보고되었으며, 팀 단위 보급이 빠르게 증가하고 있다고 발표.",
    highlights: [
      "보일러플레이트/테스트/문서화를 AI가 선행 작성 → 리뷰 집중도 향상",
      "개발자가 남기는 ‘근거 라인’ 중심 리뷰 문화가 중요해짐",
      "도입 효과를 수치화(E2E 리드타임·PR 체류시간)해 ROI를 설득하는 추세",
    ],
  },
  {
    id: "amazon-q-dev",
    title: "Amazon Q for Dev: 코드베이스 전체를 맥락으로 활용",
    source: "AWS News",
    date: "2024-10",
    url: "https://aws.amazon.com/blogs/aws/amazon-q-for-developers-update-2024/",
    summary:
      "AWS가 Amazon Q를 통해 리포지토리·위키·티켓을 연결해 답변·코드 제안 품질을 높였다고 발표, 엔터프라이즈 코드비히클에 초점.",
    highlights: [
      "RAG + 코드 이해를 결합해 설계 질의/테스트 생성 정확도 개선",
      "접근 권한/네트워크 경계를 준수하는 사내 배포 모델을 강조",
      "개발자는 ‘컨텍스트 공급’(메타데이터/권한)을 설계해야 효과적",
    ],
  },
  {
    id: "google-gemini-codesearch",
    title: "Google Gemini + 코드서치: 초장문 컨텍스트로 대규모 리포 분석",
    source: "Google AI Blog",
    date: "2024-09",
    url: "https://blog.google/technology/ai/gemini-codesearch-2024/",
    summary:
      "긴 컨텍스트(백만+ 토큰)와 코드 검색을 결합해 대규모 모놀리스를 단일 쿼리로 요약/리팩터링 제안하는 실험 결과 공유.",
    highlights: [
      "서비스 전반의 호출 그래프·중복·Deprecated API를 한 번에 식별",
      "비용이 크므로 ‘핵심 스팬 추출→긴 컨텍스트 투입’ 하이브리드가 권장",
      "설계/리팩터링 리뷰에 ‘근거 코드 위치’가 자동 포함되어 협업 효율↑",
    ],
  },
];

