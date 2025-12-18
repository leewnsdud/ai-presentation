# AI 키워드 훑어보기 — 정적 웹 슬라이드 덱

Next.js(App Router) + TypeScript + Tailwind + Framer Motion으로 만든 20분 분량 슬라이드형 웹. 키보드 내비게이션과 정적 빌드(`output: "export"`)를 지원합니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:3000` → 첫 슬라이드로 자동 이동합니다.

### 빌드/배포

- 정적 빌드: `npm run build` (산출물: `out/`)
- 이미지 최적화는 `unoptimized`라 Vercel/Netlify 정적 호스팅에 바로 배포 가능합니다.
- 배포 설정
  - Vercel/Netlify: Build command `npm run build`, Output directory `out`

## 구조

- `app/page.tsx` : 첫 슬라이드로 리다이렉트
- `app/slides/[slug]/page.tsx` : 슬라이드 라우트 + 정적 생성
- `components/deck/*` : 데크 셸, 내비게이션 훅, 프레젠터/오버뷰
- `components/slides/*` : 슬라이드 템플릿(뉴스, 키워드, 베스트 프랙티스 등)
- `components/ui/*` : 카드/필/프로그레스/코드블록 등 공용 UI
- `data/*` : 뉴스/키워드/실전 활용/덱 정의

## 키보드 단축키

- ←/→ : 이전/다음 슬라이드
- ↑ 혹은 Space : 현재 슬라이드 단계(step) 진행
- ↓ 혹은 Backspace : 단계 되돌리기
- Esc : 오버뷰(그리드) 토글, 클릭으로 임의 슬라이드 이동
- `?presenter=1` : 간단 프레젠터 바 표시

## 커스터마이징

- 새 슬라이드 추가: `data/deck.ts`에 항목 추가 후 필요한 데이터 파일 작성
- 키워드/뉴스/실전 사례 수정: `data/keywords.ts`, `data/news.ts`, `data/practices.ts`
- 색상/타이포: `app/globals.css` 및 `tailwind.config.ts` 참고

## 라이선스

내부 발표용 샘플. 필요에 맞게 자유롭게 수정/배포하세요.
