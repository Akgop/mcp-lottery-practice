# 🎲 로또 번호 생성기

React와 Vite를 사용하여 제작된 간단하고 모던한 로또 번호 생성기 웹 애플리케이션입니다.

![Lotto-Generator-Demo](https://user-images.githubusercontent.com/49853081/183182898-7a52e3e5-8a16-4d0f-8f8d-6c5f7d2f9b0f.gif) 
*(위 이미지는 데모용 GIF 예시입니다.)*

## ✨ 주요 기능

- **랜덤 번호 생성**: 1부터 49 사이의 중복되지 않는 6개의 숫자를 생성합니다.
- **아름다운 애니메이션**: 로또 공이 하나씩 뽑히는 듯한 재미있는 애니메이션 효과가 적용되었습니다.
- **반응형 디자인**: 데스크탑, 태블릿, 모바일 등 모든 기기에서 최적화된 화면을 제공합니다.
- **결과 공유**: 생성된 번호를 버튼 클릭 한 번으로 간편하게 클립보드에 복사할 수 있습니다.

## 🛠️ 기술 스택

- **React**: UI 라이브러리
- **Vite**: 빠르고 모던한 프론트엔드 빌드 툴
- **JavaScript (ES6+)**: 핵심 로직
- **CSS3**: 스타일링 및 애니메이션

## 🚀 실행 방법

1.  **저장소 클론**:
    ```bash
    git clone https://github.com/Akgop/mcp-lottery-practice.git
    cd mcp-lottery-practice
    ```

2.  **의존성 설치**:
    ```bash
    npm install
    ```

3.  **개발 서버 실행**:
    ```bash
    npm run dev
    ```

    이제 브라우저에서 `http://localhost:5173`으로 접속하여 애플리케이션을 확인할 수 있습니다.

## 📂 프로젝트 구조

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Ball.jsx
│   │   └── Lottery.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```
