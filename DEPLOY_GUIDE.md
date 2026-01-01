# 배포 가이드 - 수정 사항 배포하기

## 🚀 빠른 배포 방법

### 1단계: 코드 수정 후 커밋 및 푸시

```bash
# 1. 변경 사항 확인
git status

# 2. 변경된 파일 추가
git add .

# 3. 커밋 (의미있는 메시지 작성)
git commit -m "설명: 변경 내용 요약"

# 4. GitHub에 푸시
git push origin main
```

### 2단계: Vercel 자동 배포

**이미 Vercel에 프로젝트가 연결되어 있다면:**
- ✅ GitHub에 푸시하면 **자동으로 배포**됩니다!
- Vercel 대시보드에서 배포 상태 확인 가능

**아직 Vercel에 배포하지 않았다면:**

1. [vercel.com](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. `hsh92/myIntroMall` 저장소 선택
5. **중요 설정:**
   - **Root Directory**: `my-intro` 선택
   - Framework Preset: Next.js (자동 감지)
6. "Deploy" 클릭
7. 배포 완료! 🎉

---

## 📋 배포 프로세스 상세

### 로컬에서 수정 → 배포까지 전체 흐름

```bash
# 1. 코드 수정
# (파일 편집)

# 2. 변경 사항 확인
git status

# 3. 변경된 파일 스테이징
git add <파일명>
# 또는 모든 변경사항
git add .

# 4. 커밋
git commit -m "커밋 메시지"
# 예시:
# git commit -m "feat: 채용정보 페이지 추가"
# git commit -m "fix: 네비게이션 링크 수정"
# git commit -m "docs: README 업데이트"

# 5. GitHub에 푸시
git push origin main

# 6. Vercel 자동 배포 (약 1-2분 소요)
```

### 커밋 메시지 컨벤션 (선택사항)

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가/수정
chore: 빌드 업무 수정, 패키지 매니저 설정 등
```

---

## 🔍 배포 상태 확인

### Vercel 대시보드에서 확인

1. [vercel.com/dashboard](https://vercel.com/dashboard) 접속
2. 프로젝트 선택
3. "Deployments" 탭에서 배포 상태 확인
   - ✅ 성공: 녹색 체크 표시
   - ⏳ 진행 중: 노란색 진행 표시
   - ❌ 실패: 빨간색 X 표시

### 배포 로그 확인

- Vercel 대시보드 → 프로젝트 → Deployments → 특정 배포 클릭
- 빌드 로그 확인 가능
- 에러 발생 시 로그에서 원인 확인

---

## 🛠 수동 배포 (필요한 경우)

### Vercel CLI 사용

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 디렉토리로 이동
cd my-intro

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

---

## 🔄 배포 후 확인 사항

### 1. 사이트 접속 확인
- 배포된 URL로 접속
- 모든 페이지 정상 작동 확인

### 2. 기능 테스트
- [ ] 홈페이지 로딩 확인
- [ ] 네비게이션 링크 작동 확인
- [ ] 채용정보 페이지 접속 확인
- [ ] 모바일 반응형 확인
- [ ] 이미지 로딩 확인

### 3. 성능 확인
- Vercel Analytics에서 트래픽 확인
- 페이지 로딩 속도 확인

---

## ⚠️ 문제 해결

### 배포 실패 시

1. **빌드 에러 확인**
   ```bash
   # 로컬에서 빌드 테스트
   npm run build
   ```

2. **환경 변수 확인**
   - Vercel 대시보드 → Settings → Environment Variables
   - 필요한 환경 변수 설정 확인

3. **Root Directory 확인**
   - Vercel 대시보드 → Settings → General
   - Root Directory가 `my-intro`로 설정되어 있는지 확인

### 배포는 되었지만 사이트가 작동하지 않을 때

1. **404 에러**: Root Directory 설정 확인
2. **이미지 로딩 실패**: public 폴더 경로 확인
3. **페이지 접속 불가**: 라우팅 설정 확인

---

## 📝 체크리스트

배포 전 확인:

- [ ] 로컬에서 `npm run build` 성공
- [ ] 로컬에서 `npm start`로 프로덕션 서버 정상 작동
- [ ] 모든 변경사항 커밋 완료
- [ ] GitHub에 푸시 완료
- [ ] Vercel 프로젝트 설정 확인 (Root Directory: `my-intro`)

배포 후 확인:

- [ ] 배포 성공 확인 (Vercel 대시보드)
- [ ] 배포된 사이트 접속 확인
- [ ] 주요 기능 테스트 완료
- [ ] 모바일 반응형 확인

---

## 🎯 자동 배포 설정 (이미 완료)

현재 설정:
- ✅ GitHub 저장소 연결 완료
- ✅ Vercel 자동 배포 활성화
- ✅ main 브랜치 푸시 시 자동 배포

**추가 설정 (선택사항):**

### Preview 배포
- Pull Request 생성 시 자동으로 Preview URL 생성
- 프로덕션 배포 전 테스트 가능

### 브랜치별 배포
- Vercel 대시보드 → Settings → Git
- 특정 브랜치만 배포하도록 설정 가능

---

## 💡 팁

1. **작은 변경사항도 자주 배포**: 작은 단위로 배포하면 문제 추적이 쉬움
2. **의미있는 커밋 메시지**: 나중에 변경 이력 추적이 쉬움
3. **로컬 빌드 테스트**: 배포 전 로컬에서 빌드 테스트 필수
4. **Vercel Analytics 활용**: 배포 후 트래픽 및 성능 모니터링

---

## 📞 도움이 필요하신가요?

- Vercel 문서: [vercel.com/docs](https://vercel.com/docs)
- Next.js 배포 가이드: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- GitHub Issues: 프로젝트 저장소에 이슈 등록

