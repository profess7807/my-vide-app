# Supabase 설정 가이드

이 프로젝트는 **Supabase**를 사용하여 문의 메시지를 데이터베이스에 저장합니다.

## 1단계: Supabase 프로젝트 생성

1. https://supabase.com 방문
2. **New project** 클릭
3. 프로젝트 이름, 데이터베이스 비밀번호 설정 후 생성

## 2단계: 데이터베이스 테이블 생성

Supabase 대시보드 → **SQL Editor** → 새 쿼리에서 다음 코드 실행:

```sql
CREATE TABLE messages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  language TEXT DEFAULT 'ko',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 행 수준 보안 활성화 (선택사항)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 누구나 메시지 삽입 가능하도록 정책 설정
CREATE POLICY "Allow insert for all" ON messages
FOR INSERT WITH CHECK (true);
```

## 3단계: API 키 복사

1. Supabase 대시보드 → **Project Settings** → **API**
2. 다음 값 복사:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** → `VITE_SUPABASE_ANON_KEY`

## 4단계: 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

`.env.example` 파일을 참고하세요.

## 5단계: 패키지 설치

```bash
npm install
```

## 완료!

이제 포트폴리오에서 **Send Message** 버튼을 클릭하면 메시지가 Supabase에 저장됩니다.

### 메시지 확인하기

Supabase 대시보드 → **Table Editor** → **messages** 테이블에서 저장된 메시지를 확인할 수 있습니다.

---

## 로컬 개발

```bash
npm run dev
```

## 배포 시 주의사항

Vercel/Netlify에 배포할 때 환경 변수를 설정해야 합니다:

1. Vercel: **Settings** → **Environment Variables**에서 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` 추가
2. Netlify: **Site settings** → **Build & deploy** → **Environment**에서 동일하게 추가
