export type PracticeResource = {
  label: string;
  url: string;
};

export type PracticeItem = {
  title: string;
  detail: string;
  tip?: string;
  prompt?: string;
  resources?: PracticeResource[];
};

export type PracticeCategory = {
  id: string;
  label: string;
  description: string;
  practices: PracticeItem[];
};

export const practiceCategories: PracticeCategory[] = [
  {
    id: "productivity",
    label: "개인 생산성 · 문서화",
    description:
      "반복적인 기록·정리 업무를 AI에 위임하면 개발자는 의사결정과 설계에 집중할 수 있습니다. 핵심은 근거와 책임 소재를 함께 남겨 팀이 바로 실행할 수 있는 출력물을 얻는 것입니다. 주간 단위로 산출물을 모아 회고하면 AI 자동화가 실제로 팀 흐름을 개선했는지 확인할 수 있습니다.",
    practices: [
      {
        title: "회의/티켓 요약 + 액션 생성",
        detail:
          "회의 녹취나 티켓 스레드를 요약하면서 결정 사항, 미결 이슈, 담당자 정보를 구조화하면 바로 공유 가능한 실행 로그가 됩니다. 링크/타임스탬프를 포함해 근거를 남기면 추후 분쟁도 줄어듭니다. 요약과 액션을 템플릿으로 묶어 슬랙/노션 자동 게시까지 연결하면 더 이상 수동 문서화가 필요 없습니다.",
        tip: "요약과 액션 항목을 JSON 스키마로 고정하고, 각 항목에 근거 문장을 첨부하도록 요구하세요.",
        prompt: `입력: 회의 메모/스레드
목표: 5줄 요약 + 액션 아이템(담당/마감) + 리스크`,
        resources: [
          {
            label: "Notion AI Meeting Notes",
            url: "https://www.notion.so/product/ai",
          },
        ],
      },
      {
        title: "PR 설명/체인지로그 자동 생성",
        detail:
          "Diff와 관련 티켓을 입력하면 변경 요약, 영향 범위, 롤백 포인트를 일관된 형식으로 뽑아낼 수 있습니다. 누가 읽어도 동일한 질문을 하지 않도록 테스트 여부와 배포 리스크를 스키마에 포함시키세요. 승인된 예시를 지속적으로 학습 세트에 추가하면 모델이 팀 어조와 규칙을 빠르게 습득합니다.",
        tip: "릴리즈 노트 폼을 JSON Schema로 공유해 리뷰어가 자동 생성된 결과를 바로 붙여 넣게 합니다.",
        prompt: `입력: git diff
출력: 변경요약(3줄), 영향 범위, 테스팅, 롤백 방법`,
        resources: [
          {
            label: "GitHub Copilot Changelog 사례",
            url: "https://github.blog/2024-06-18-the-state-of-ai-in-software-development/",
          },
        ],
      },
      {
        title: "API/설계 문서 초안",
        detail:
          "핵심 요구사항과 제약을 bullet로 입력하면 API 계약 혹은 시퀀스 다이어그램을 초안으로 제시할 수 있습니다. 팀이 공통 템플릿을 쓰면 문서 스타일이 통일되고, 검토자는 논의에 바로 집중합니다. 모델이 만들어 준 초안을 기준으로 이슈를 바로 작성하면 요구사항-문서-개발 파이프라인이 자연스럽게 이어집니다.",
        tip: "리턴 스키마를 JSON Schema로 명시해 두고, 예제 payload를 자동 생성하도록 요구하세요.",
        resources: [
          {
            label: "Stoplight API Design Guide",
            url: "https://blog.stoplight.io/api-design-guide",
          },
        ],
      },
    ],
  },
  {
    id: "code-quality",
    label: "코드 품질 · 리뷰",
    description:
      "리뷰 병목을 줄이고 품질 기준을 지키려면 AI가 먼저 위험 구간을 요약해 주고 사람이 근거를 확인하는 구조가 효과적입니다. 리뷰 규칙을 명문화할수록 모델 출력도 예측 가능합니다. 코드베이스별 위험 신호를 태그화하면 AI 리뷰 결과가 로그/메트릭과도 연결됩니다.",
    practices: [
      {
        title: "AI 보조 PR 리뷰",
        detail:
          "변경 요약, 위험 지점(데이터베이스/캐시/동시성), 테스트 갭을 리스트업해 사람이 재확인합니다. 각 코멘트에는 근거 라인을 포함해 ‘왜 이 부분이 위험한가’를 명시하도록 요구하세요. 리뷰 데이터를 축적하면 팀별 품질 리더보드나 교육 자료로도 활용할 수 있습니다.",
        tip: "첫 단계에서 린트·타입 오류를 체크하고, 추가 리뷰는 고위험 태그만 집중해서 확인합니다.",
        resources: [
          {
            label: "GitHub Copilot PR Review",
            url: "https://github.blog/2023-11-08-github-copilot-chat-is-generally-available/",
          },
        ],
      },
      {
        title: "테스트 케이스 브레인스토밍",
        detail:
          "새 기능이나 버그 수정 시 경계값·에러 경로·권한 관련 테스트를 제시해 테스트 파일의 뼈대를 빠르게 만듭니다. QA와 개발자가 공통 언어로 대화할 수 있도록 시나리오 설명을 강조하세요. 생성된 시나리오를 바로 테스트 러너 스켈레톤 코드로 변환하면 생산성이 배가됩니다.",
        prompt: `입력: 함수/엔드포인트 설명
출력: 필수 테스트 5개(경계/에러/권한/성능), 각 케이스의 기대/준비물`,
        resources: [
          {
            label: "Thoughtbot AI Testing Article",
            url: "https://thoughtbot.com/blog/ai-test-generation",
          },
        ],
      },
      {
        title: "리팩터링 가이드",
        detail:
          "긴 함수나 클래스를 입력하면 의존성 그래프와 사이드이펙트를 정리하고 단계별 리팩터링 순서를 제안합니다. 위험도가 높은 구간에는 체크리스트를 함께 붙여 사람이 검증하도록 남겨두세요. 변경 전/후 성능 지표를 함께 기록하면 리팩터링 효과가 명확해집니다.",
        resources: [
          {
            label: "Refactoring.Guru + AI 실험",
            url: "https://refactoring.guru/design-patterns/ai",
          },
        ],
      },
    ],
  },
  {
    id: "ops-knowledge",
    label: "운영 · 지식 · 온보딩",
    description:
      "운영과 온보딩 영역은 지식 최신성과 접근 권한 관리가 핵심입니다. RAG와 Q&A 흐름을 붙여 ‘질문→근거 확인→다음 행동’ 사이클을 빠르게 돌릴 수 있도록 설계합니다. 현장 피드백을 받아 주기적으로 데이터셋을 재정비해야 서비스 품질이 유지됩니다.",
    practices: [
      {
        title: "사내 위키/런북 RAG 챗봇",
        detail:
          "서비스 장애 대응, 배포 절차, 계정·권한 가이드를 근거 링크와 함께 제공하면 온콜 대응 속도가 빨라집니다. 문서 업데이트 이력을 함께 노출해 오래된 문서를 구분하도록 하세요. 주간 운영 리포트와 연결해 ‘어떤 질문이 많았는지’를 추적하면 데이터 갱신 우선순위도 명확해집니다.",
        tip: "메타데이터(버전, 작성일, 소유 팀)를 인덱싱하고 답변에도 그대로 노출해 신뢰를 확보합니다.",
        resources: [
          {
            label: "Atlassian Incident Guide",
            url: "https://www.atlassian.com/incident-management",
          },
        ],
      },
      {
        title: "온보딩 Q&A",
        detail:
          "팀별 필수 문서, 환경 셋업, 서비스 아키텍처를 묶어 신입이 질문-응답을 반복하며 학습하도록 만듭니다. 단계별 체크리스트를 프롬프트에 포함하면 교육 일정도 같이 관리됩니다. 학습 기록과 퀴즈 결과를 HR 시스템에 연동하면 온보딩 진행률을 계량화할 수 있습니다.",
        resources: [
          {
            label: "Stripe Dev Onboarding",
            url: "https://stripe.com/blog/developer-onboarding",
          },
        ],
      },
      {
        title: "모니터링/로그 코파일럿",
        detail:
          "로그 패턴 검색과 지표 이상 탐지를 자동화해 알람 설명을 요약하고 근본원인 탐색을 가이드합니다. SQL/로그 쿼리 템플릿을 함께 제시하면 대응 속도가 크게 향상됩니다. 알람 해결 과정을 캡처해 지식 베이스에 남기면 비슷한 장애 대응 시간이 꾸준히 단축됩니다.",
        resources: [
          {
            label: "Datadog + AI Ops 블로그",
            url: "https://www.datadoghq.com/blog/ai-ops/",
          },
        ],
      },
    ],
  },
];

