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

- ✅ 반응형 디자인 (모바일/데스크톱)
- ✅ 브랜드 소개 섹션
- ✅ 컬렉션 갤러리
- ✅ 브랜드 가치 소개
- ✅ 문의하기 폼
- ✅ 채용정보 페이지 (MD 파일 기반)
- ✅ 부드러운 스크롤 네비게이션
- ✅ SEO 최적화

## 🛠 기술 스택

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📄 페이지 구조

- `/` - 홈페이지 (히어로, 소개, 컬렉션, 가치, 문의)
- `/careers` - 채용정보 페이지

## 🚀 무료 배포하기

### Vercel (추천 ⭐)

1. **GitHub에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Vercel 배포**
   - [vercel.com](https://vercel.com) 접속
   - GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - 저장소 선택 → Deploy
   - 완료! 🎉

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참고하세요.

### 다른 배포 옵션

- **Netlify**: [netlify.com](https://netlify.com)
- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)

## 📝 프로젝트 구조

```
my-intro/
├── app/              # Next.js App Router
│   ├── page.tsx      # 홈페이지
│   ├── careers/      # 채용정보 페이지
│   └── layout.tsx    # 루트 레이아웃
├── components/       # React 컴포넌트
│   ├── header.tsx   # 헤더 네비게이션
│   ├── footer.tsx   # 푸터
│   └── ui/          # UI 컴포넌트
├── public/          # 정적 파일
└── lib/             # 유틸리티
```

## 🔧 개발

### 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## 📚 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 📄 라이선스

이 프로젝트는 개인/상업적 용도로 자유롭게 사용 가능합니다.
