# ADS Booth

Neural D의 ADS(Advanced Display System) 제품을 소개하는 인터랙티브 웹 부스입니다.

## 기능

- **비디오 탭**: ADS 제품 소개 비디오 (자막 포함)
- **3D 모델 탭**: WebGL 기반 3D 모델 뷰어
  - 회전, 확대/축소 가능
  - AR 모드 지원
  - 전체화면 모드

## 반응형 디자인

모바일, 태블릿, PC 환경에 따라 로고 크기가 동적으로 조정됩니다.

| 환경 | ADS 로고 | Neural D 로고 |
|------|---------|---------------|
| 모바일 (< 768px) | 24px | 20px |
| 태블릿 (768px ~ 1023px) | 32px | 28px |
| PC (≥ 1024px) | 40px | 36px |

로고는 화면 크기 변경 시 부드러운 전환 효과(`transition: height 0.3s ease`)가 적용됩니다.

## 기술 스택

- **HTML5**: 구조화된 마크업
- **CSS3**: 반응형 디자인 및 미디어 쿼리
- **JavaScript**: 탭 전환 기능
- **Model Viewer**: 3D 모델 렌더링 (Google Model Viewer)

## 파일 구조

```
ads-booth/
├── index.html           # 메인 HTML 파일
├── src/
│   ├── style.css        # 스타일 시트 (반응형 로고 크기 조정)
│   ├── main.js          # 자바스크립트 로직
│   ├── image/           # 이미지 자산
│   │   ├── background.png
│   │   ├── neural_d_logo_white.png
│   │   └── ads_logo_white.png
│   ├── video/           # 비디오 자산
│   │   ├── ads-intro.mp4
│   │   └── ads-intro.vtt (자막)
│   └── model/           # 3D 모델 파일
│       ├── ads_3d_model.glb
│       └── ads_3d_model.usdz
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Pages 자동 배포 설정
```

## GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

- **배포 URL**: https://anthony0514.github.io/ads-booth/
- **트리거**: `main` 브랜치 푸시 시 자동 배포

## 개발

### 로컬 서버 실행

```bash
# Python 3.x 사용
python -m http.server 8000

# 또는 Python 2.x 사용
python -m SimpleHTTPServer 8000
```

브라우저에서 `http://localhost:8000` 접속

## 최근 업데이트

- ✨ 모바일, 태블릿, PC 환경에 따른 반응형 로고 크기 조정 추가
- 🚀 GitHub Actions를 통한 자동 배포 설정 추가
