# Vercel / Netlify 배포 가이드

이 프로젝트를 Vercel 또는 Netlify로 배포하는 방법입니다.  
두 서비스 모두 **GitHub 저장소 연동**만 하면 푸시할 때마다 자동으로 빌드·배포됩니다.

---

## 공통 사항

- **필요한 것**: GitHub 계정, 이 저장소가 GitHub에 연결되어 있음
- **배포 후 주소**:  
  - Vercel: `https://my-vide-app.vercel.app` (또는 지정한 도메인)  
  - Netlify: `https://랜덤이름.netlify.app` (또는 지정한 도메인)
- `vite.config.js`는 이미 Vercel/Netlify 환경에서는 경로(base)를 `/`로 사용하도록 설정되어 있습니다.

---

## 1. Vercel로 배포

### 1단계: Vercel 가입 및 로그인

1. 브라우저에서 **https://vercel.com** 접속
2. **Sign Up** → **Continue with GitHub** 선택 후 GitHub로 로그인

### 2단계: 프로젝트 가져오기

1. 로그인 후 **Add New…** → **Project** 클릭
2. **Import Git Repository**에서 **GitHub** 선택
3. GitHub 권한 요청이 나오면 **Authorize** 등으로 허용
4. 저장소 목록에서 **profess7807/my-vide-app** 선택 후 **Import** 클릭

### 3단계: 빌드 설정 (그대로 두고 배포)

- **Framework Preset**: Vite (자동 감지될 수 있음)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `dist` (기본값)
- **Install Command**: `npm install` (기본값)

그대로 **Deploy** 클릭합니다.

### 4단계: 배포 완료

- 빌드가 끝나면 **Visit** 버튼으로 사이트 주소로 이동할 수 있습니다.
- 주소 형식: `https://my-vide-app-xxxx.vercel.app` (프로젝트 이름에 따라 다름)
- **Settings → Domains**에서 커스텀 도메인을 연결할 수 있습니다.

### 이후

- `main` 브랜치에 **push**할 때마다 자동으로 다시 배포됩니다.
- 배포 로그는 Vercel 대시보드의 **Deployments**에서 확인할 수 있습니다.

---

## 2. Netlify로 배포

### 1단계: Netlify 가입 및 로그인

1. 브라우저에서 **https://www.netlify.com** 접속
2. **Sign up** → **Sign up with GitHub** 또는 **Log in with GitHub** 선택

### 2단계: 새 사이트 추가 (Git 연동)

1. 로그인 후 대시보드에서 **Add new site** → **Import an existing project** 클릭
2. **Connect to Git provider**에서 **GitHub** 선택
3. GitHub 권한 허용 후, 저장소 목록에서 **my-vide-app** (또는 profess7807/my-vide-app) 선택
4. **Branch to deploy**: `main` (기본값 유지)

### 3단계: 빌드 설정 입력

다음 값만 확인·입력합니다.

| 항목 | 값 |
|------|-----|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

**Deploy site** 클릭합니다.

### 4단계: 배포 완료

- 빌드가 끝나면 **Site is live**와 함께 사이트 주소가 표시됩니다.
- 주소 형식: `https://랜덤이름.netlify.app`
- **Domain settings**에서 **Change site name**으로 주소를 바꾸거나, 커스텀 도메인을 연결할 수 있습니다.

### 이후

- `main` 브랜치에 **push**할 때마다 자동으로 다시 배포됩니다.
- 배포 로그는 **Deploys** 탭에서 확인할 수 있습니다.

---

## 3. 문제 해결

### 빌드 실패 시

- **Vercel**: 프로젝트 **Settings → General**에서 **Build Command**가 `npm run build`, **Output Directory**가 `dist`인지 확인
- **Netlify**: **Site configuration → Build & deploy → Build settings**에서 **Build command** `npm run build`, **Publish directory** `dist` 확인
- 저장소에 `package-lock.json`이 있으면 그대로 두고, 없다면 로컬에서 `npm install` 후 `package-lock.json`을 커밋한 뒤 다시 배포

### 프로필 이미지가 안 보일 때

- `public/profile.jpg` 파일이 GitHub 저장소에 포함되어 있는지 확인
- 포함되어 있다면 Vercel/Netlify 빌드 결과물(`dist`)에도 복사되며, 코드에서는 이미 `import.meta.env.BASE_URL`을 사용하므로 두 서비스 모두에서 정상 표시됩니다.

### GitHub Pages와 함께 사용할 때

- 같은 저장소를 GitHub Pages와 Vercel(또는 Netlify)에 동시에 연동해도 됩니다.
- GitHub Pages: `https://profess7807.github.io/my-vide-app/`
- Vercel/Netlify: 각 서비스에서 부여한 URL

---

## 요약

| 항목 | Vercel | Netlify |
|------|--------|---------|
| 가입 | https://vercel.com | https://www.netlify.com |
| 연동 | GitHub → Import project | Add new site → Import from Git → GitHub |
| Build command | `npm run build` | `npm run build` |
| Publish/Output | `dist` | `dist` |
| 자동 배포 | main 푸시 시 | main 푸시 시 |

위 설정만 맞추면 추가 코드 수정 없이 배포할 수 있습니다.
