# 배포 가이드

이 프로젝트를 무료로 배포하는 방법들을 안내합니다.

## 🚀 추천 배포 플랫폼

### 1. Vercel (가장 추천 ⭐)

**장점:**
- Next.js 제작사가 만든 플랫폼으로 최적화됨
- 자동 배포 및 CI/CD
- 무료 SSL 인증서
- 글로벌 CDN
- 이미 프로젝트에 Vercel Analytics 포함
- 무료 플랜: 무제한 프로젝트, 100GB 대역폭/월

**배포 방법:**

1. **GitHub에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Vercel에 배포**
   - [vercel.com](https://vercel.com) 접속
   - GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - Framework Preset: Next.js (자동 감지)
     - Root Directory: `my-intro` (또는 프로젝트 루트)
   - "Deploy" 클릭
   - 완료! 자동으로 배포 URL 제공

**자동 배포:**
- GitHub에 푸시할 때마다 자동 배포
- Preview 배포로 PR마다 테스트 가능

---

### 2. Netlify

**장점:**
- 쉬운 배포 프로세스
- 무료 SSL
- 폼 처리 기능
- 무료 플랜: 100GB 대역폭/월, 300분 빌드 시간/월

**배포 방법:**

1. **GitHub에 코드 푸시** (위와 동일)

2. **Netlify에 배포**
   - [netlify.com](https://netlify.com) 접속
   - GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - 빌드 설정:
     - Build command: `cd my-intro && npm run build`
     - Publish directory: `my-intro/.next`
   - "Deploy site" 클릭

**또는 Netlify CLI 사용:**
```bash
npm install -g netlify-cli
cd my-intro
netlify deploy --prod
```

---

### 3. GitHub Pages (정적 사이트만)

**장점:**
- 완전 무료
- GitHub과 통합

**단점:**
- Next.js의 서버 사이드 기능 제한
- 정적 사이트만 가능 (SSG)

**배포 방법:**

1. **next.config.ts 수정:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   };
   ```

2. **GitHub Actions 설정** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: cd my-intro && npm install
         - run: cd my-intro && npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./my-intro/out
   ```

---

### 4. Railway

**장점:**
- 쉬운 배포
- 데이터베이스 포함 가능
- 무료 플랜: $5 크레딧/월

**배포 방법:**
- [railway.app](https://railway.app) 접속
- GitHub 저장소 연결
- 자동 감지 및 배포

---

### 5. Render

**장점:**
- 무료 플랜 제공
- 자동 SSL
- 무료 플랜: 750시간/월 (무료 티어는 15분 비활성 후 슬립)

**배포 방법:**
- [render.com](https://render.com) 접속
- GitHub 저장소 연결
- Web Service 선택
- 빌드 명령: `cd my-intro && npm install && npm run build`
- 시작 명령: `cd my-intro && npm start`

---

## 📝 배포 전 체크리스트

### 1. 환경 변수 확인
```bash
# .env.local 파일이 있다면 확인
# Vercel/Netlify 등에서 환경 변수 설정 필요
```

### 2. 빌드 테스트
```bash
cd my-intro
npm run build
npm start
```

### 3. 프로덕션 빌드 확인
- 모든 페이지가 정상 작동하는지 확인
- 이미지 로딩 확인
- 링크 동작 확인

### 4. SEO 설정 확인
- `app/layout.tsx`의 메타데이터 확인
- Open Graph 태그 추가 고려

---

## 🎯 가장 추천하는 방법: Vercel

이 프로젝트는 이미 Vercel Analytics가 포함되어 있고, Next.js 프로젝트이므로 **Vercel이 가장 적합**합니다.

### 빠른 배포 (5분 안에)

1. **GitHub 저장소 생성**
   ```bash
   cd my-intro
   git init
   git add .
   git commit -m "Ready for deployment"
   # GitHub에서 새 저장소 생성 후
   git remote add origin https://github.com/yourusername/atelier-mode.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - vercel.com 접속
   - "Add New Project"
   - GitHub 저장소 선택
   - 자동 감지 → Deploy
   - 완료!

### 커스텀 도메인 연결 (선택사항)
- Vercel 대시보드 → Settings → Domains
- 도메인 추가 (예: ateliermode.com)
- DNS 설정 안내 따르기

---

## 💡 추가 팁

### 성능 최적화
- 이미지 최적화: Next.js Image 컴포넌트 사용 중 ✅
- 코드 스플리팅: 자동 처리됨 ✅
- CDN: Vercel/Netlify 자동 제공 ✅

### 모니터링
- Vercel Analytics: 이미 포함됨 ✅
- 에러 추적: Sentry 추가 고려

### 보안
- 환경 변수는 배포 플랫폼에서 설정
- API 키는 절대 코드에 포함하지 않기

---

## 🆘 문제 해결

### 빌드 실패 시
```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 확인 후 수정
```

### 이미지 로딩 문제
- `next.config.ts`에서 이미지 도메인 설정 확인
- `unoptimized: true` 옵션 확인

### 환경 변수 문제
- 배포 플랫폼의 환경 변수 설정 확인
- `.env.local`은 배포되지 않음

