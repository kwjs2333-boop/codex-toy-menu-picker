# 오늘 뭐 먹지? 🍽️

간단한 정적 웹 앱으로, 쉼표(,)로 메뉴를 입력하면 랜덤으로 오늘의 메뉴를 추천해줍니다.

## 기능
- 기본 메뉴 제공: `김밥, 라면, 비빔밥, 돈까스, 떡볶이, 초밥`
- 사용자 입력 메뉴(쉼표 구분)에서 랜덤 메뉴 2개 추천
- `초기화` 버튼으로 기본 메뉴 복원
- 모바일/태블릿/데스크톱 화면 대응

## GitHub Pages 배포
이 프로젝트는 별도 빌드 도구 없이 동작합니다.

GitHub Pages에서 아래처럼 설정하면 바로 배포할 수 있습니다.
1. 저장소의 **Settings > Pages**로 이동
2. **Build and deployment** 섹션에서 Source를 **Deploy from a branch**로 선택
3. Branch를 **main**, Folder를 **/ (root)** 로 선택
4. 저장 후 배포 URL 접속

루트 폴더의 `index.html`, `style.css`, `script.js` 파일만으로 동작합니다.
