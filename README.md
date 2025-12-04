<img width="900" height="600" alt="TEOConf_2025" src="https://github.com/user-attachments/assets/7117d973-b625-4ef7-9959-77ceef6b190e" />

## 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/TEOConf-FE.git
cd TEOConf-FE
```

### 2. 의존성 설치
```bash
yarn install
```

### 3. 개발 서버 실행
```bash
yarn dev
```

## 폴더 구조

TEOConf는 매년 개최되는 컨퍼런스로, 연도별로 독립적인 페이지를 관리합니다.
각 연도는 `teoconf.com/first`, `teoconf.com/second`와 같이 URL로 접근 가능합니다.

### 디렉토리 구조

```
TEOConf-FE
├─ components/
├─ data/
└─ pages/
```

### 새로운 회차 추가 방법

1. **폴더 생성**: 다음 3개 폴더에 새 연도 폴더를 생성합니다

   - `components/2026/`
   - `data/2026/`
   - `pages/2026/`

2. **참고할 폴더**: 가장 최근 회차 폴더를 복사하여 시작하는 것을 권장합니다

   - 예: `components/2025/` 폴더를 복사 → `components/2026/`으로 수정

3. **주의사항**:
   - 각 회차는 독립적으로 동작하므로 다른 회차에 영향을 주지 않습니다
   - 이전 회차 페이지는 그대로 유지되어 아카이브 역할을 합니다
   - 메인 페이지(`pages/index.tsx`)에서 최신 회차로 리다이렉트 또는 회차 목록을 보여줄 수 있습니다

## 배포

### 배포 방식

- **플랫폼**: GitHub Pages
- **자동 배포**: GitHub Actions 사용
- **트리거 브랜치**: `develop` 브랜치에 push 시 자동 배포

### 도메인 관리

- **도메인 소유자**: 테오
- **현재 설정**: GitHub Pages 커스텀 도메인
- **설정 위치**: Repository Settings > Pages > Custom Domain

### 배포 플랫폼 변경이 필요한 경우

만약 Vercel, Netlify 등 다른 플랫폼으로 변경하고 싶다면:

1. 새 플랫폼에 프로젝트 연결 및 배포
2. 테오에게 DNS 레코드(A 레코드, CNAME) 변경 요청
3. 변경 완료 후 기존 GitHub Pages 설정 해제

## 환경변수

### 카카오지도 API

- **용도**: 오시는 길 페이지의 지도 표시
- **관리 방식**: GitHub Secrets and variables로 안전하게 관리
  - 위치: Repository Settings > Secrets and variables > Actions > Repository secrets
- **Secret 이름**: `NEXT_PUBLIC_KAKAO_MAP_API_KEY`
- **로컬 개발**: `.env` 파일에 API Key 설정 필요
  - 파일이 필요한 경우 `hyer1205@gmail.com`으로 문의
  - kakao developers 에 멤버 추가가 필요한 경우 `hyer1205@gmail.com`으로 문의

### GitHub 토큰

- **용도**: GitHub Pages 자동 배포
- **설정 방법**: 설정 불필요 (GitHub Actions가 자동 제공)
- **토큰 이름**: `GITHUB_TOKEN`
- **권한**: 워크플로우 실행 시 자동 생성 및 만료
