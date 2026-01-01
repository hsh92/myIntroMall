# ATELIER MODE - 프리미엄 패션 브랜드 웹사이트

Next.js 16 기반의 현대적인 패션 브랜드 소개 웹사이트입니다.

## 🚀 빠른 시작

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 📦 주요 기능

### 홈페이지
- ✅ 반응형 디자인 (모바일/데스크톱)
- ✅ 히어로 섹션
- ✅ 브랜드 소개 섹션 (`#about`)
- ✅ 컬렉션 갤러리 (`#collections`) - 3개 컬렉션 카드
- ✅ 브랜드 가치 소개 (`#values`)
- ✅ 문의하기 폼 (`#contact`)

### 채용정보 페이지
- ✅ MD 파일 기반 채용정보 시스템
- ✅ 4개 포지션 정보 (디자이너, 마케팅, 영업, 제품개발)
- ✅ 자격 요건 및 우대 사항 상세 안내
- ✅ 채용 프로세스 및 지원 방법 안내

### 네비게이션 및 UX
- ✅ 부드러운 스크롤 네비게이션
- ✅ 페이지 간 섹션 이동 (해시 URL 없이 처리)
- ✅ 반응형 모바일 메뉴
- ✅ 고정 헤더 (스크롤 시 유지)

### 최적화
- ✅ Next.js Image 컴포넌트로 이미지 최적화
- ✅ SEO 최적화 (메타데이터 설정)
- ✅ Vercel Analytics 통합
- ✅ 프로덕션 빌드 최적화

## 🛠 기술 스택

### 핵심 기술
- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5
- **Runtime**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9

### UI 라이브러리
- **Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod

### 추가 라이브러리
- **Markdown**: remark, remark-html, gray-matter (채용정보 페이지용)
- **Analytics**: Vercel Analytics
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

## 📄 페이지 구조

### 홈페이지 (`/`)
- **히어로 섹션**: 메인 비주얼 및 브랜드 소개
- **브랜드 소개** (`#about`): 회사 철학 및 통계 (10K+ 고객, 500+ 제품)
- **컬렉션** (`#collections`): 3개 시즌 컬렉션 카드
  - Spring/Summer 2025
  - Fall/Winter 2024
  - Essential Collection
- **브랜드 가치** (`#values`): 핵심 가치 소개
- **문의하기** (`#contact`): 연락처 폼

### 채용정보 페이지 (`/careers`)
- MD 파일 기반 동적 콘텐츠 (`app/careers/requirements.md`)
- 4개 채용 포지션:
  1. 패션 디자이너
  2. 마케팅 매니저
  3. 영업 관리자
  4. 제품 개발 매니저
- 각 포지션별 담당 업무, 자격 요건, 우대 사항 상세 안내

## 🚀 무료 배포하기

### Vercel (추천 ⭐)

**이미 GitHub에 푸시 완료된 경우:**
1. [vercel.com](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. `hsh92/myIntroMall` 저장소 선택
5. **중요**: Root Directory를 `my-intro`로 설정
6. Framework Preset: Next.js (자동 감지)
7. "Deploy" 클릭
8. 완료! 🎉

**자동 배포:**
- GitHub에 푸시할 때마다 자동으로 재배포됩니다
- Pull Request마다 Preview 배포가 생성됩니다

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참고하세요.

### 다른 배포 옵션

- **Netlify**: [netlify.com](https://netlify.com) - 쉬운 배포, 폼 처리 기능
- **Railway**: [railway.app](https://railway.app) - 데이터베이스 포함 가능
- **Render**: [render.com](https://render.com) - 무료 플랜 제공

## 📝 프로젝트 구조

```
my-intro/
├── app/                      # Next.js App Router
│   ├── page.tsx              # 홈페이지
│   ├── layout.tsx            # 루트 레이아웃 (메타데이터, 폰트)
│   ├── globals.css           # 전역 스타일 (Tailwind, 마크다운 스타일)
│   ├── careers/              # 채용정보 페이지
│   │   ├── page.tsx         # 채용정보 페이지 컴포넌트
│   │   └── requirements.md  # 채용정보 MD 파일
│   └── favicon.ico
├── components/               # React 컴포넌트
│   ├── header.tsx           # 헤더 (네비게이션, 모바일 메뉴)
│   ├── footer.tsx           # 푸터
│   ├── hero-section.tsx     # 히어로 섹션
│   ├── about-section.tsx    # 브랜드 소개 섹션
│   ├── collections-section.tsx  # 컬렉션 섹션
│   ├── values-section.tsx   # 브랜드 가치 섹션
│   ├── contact-section.tsx  # 문의하기 섹션
│   ├── scroll-handler.tsx   # 스크롤 처리 유틸리티
│   └── ui/                  # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/                      # 유틸리티
│   └── utils.ts             # 공통 유틸리티 함수
├── public/                   # 정적 파일
│   ├── *.jpg                # 컬렉션 이미지
│   └── *.svg                # 아이콘
├── next.config.ts           # Next.js 설정
├── tsconfig.json            # TypeScript 설정
├── tailwind.config.js       # Tailwind CSS 설정
├── package.json             # 의존성 관리
├── README.md                # 프로젝트 문서
└── DEPLOYMENT.md            # 배포 가이드
```

## 🔧 개발

### 스크립트

- `npm run dev` - 개발 서버 실행 (포트 3000)
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

### 주요 컴포넌트 설명

#### Header (`components/header.tsx`)
- 고정 헤더 네비게이션
- 데스크톱/모바일 반응형 메뉴
- 페이지 간 섹션 이동 처리
- 해시 URL 없이 스크롤 처리

#### ScrollHandler (`components/scroll-handler.tsx`)
- URL 해시 처리 및 제거
- sessionStorage를 통한 페이지 간 스크롤 관리
- 부드러운 스크롤 애니메이션

#### 채용정보 페이지 (`app/careers/page.tsx`)
- MD 파일을 읽어서 HTML로 변환
- remark를 사용한 마크다운 파싱
- 에러 처리 포함

### 채용정보 수정 방법

`app/careers/requirements.md` 파일을 수정하면 채용정보 페이지가 자동으로 업데이트됩니다.

```markdown
# 채용 정보
## 현재 채용 중인 포지션
### 1. 포지션명
...
```

## 📋 최근 업데이트 내역

### v1.0.0 (최신)
- ✅ 채용정보 페이지 추가 (MD 파일 기반)
  - 4개 포지션 정보 (디자이너, 마케팅, 영업, 제품개발)
  - 자격 요건 및 채용 프로세스 안내
- ✅ 네비게이션 개선
  - 페이지 간 섹션 이동 기능
  - 해시 URL 없이 스크롤 처리
  - ScrollHandler 컴포넌트 추가
- ✅ 이미지 최적화
  - Next.js Image 컴포넌트 적용
  - 컬렉션 이미지 추가 완료
- ✅ 배포 준비
  - GitHub 저장소 설정 완료
  - 배포 가이드 문서 작성
  - 프로덕션 빌드 테스트 완료

### 초기 버전
- ✅ 홈페이지 섹션 구성 (히어로, 소개, 컬렉션, 가치, 문의)
- ✅ 반응형 디자인 구현
- ✅ SEO 최적화
- ✅ Vercel Analytics 통합

## 🐛 알려진 이슈

없음

## 🔮 향후 계획

- [ ] 다크 모드 지원
- [ ] 다국어 지원 (i18n)
- [ ] 블로그 기능 추가
- [ ] 관리자 대시보드 (채용정보 관리)
- [ ] 이메일 알림 기능

## 📚 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🤝 기여하기

이슈나 개선사항이 있으면 GitHub Issues에 등록해주세요.

## 📄 라이선스

이 프로젝트는 개인/상업적 용도로 자유롭게 사용 가능합니다.

## 👤 작성자

ATELIER MODE Development Team

---

**GitHub 저장소**: [hsh92/myIntroMall](https://github.com/hsh92/myIntroMall)
