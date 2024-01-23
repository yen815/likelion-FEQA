// import { React } from "https://esm.sh/react"; -> 해당 방법으로는 불가
// React, ReactDOM

// @ts-ignore
// @ts-nocheck
const { createRoot } = ReactDOM;

const createApp = () => {
    return (
        <div id="app">
            <h1>안녕!<br />리액트</h1>
            <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
        </div>
    )
}

const rootElement = document.getElementById('root') as HTMLDivElement;

// TS버전
const root = createRoot(rootElement);
root.render(
    createApp() // 함수를 넣어도 된다.
    // <h1>hi</h1>  // 코드를 직접 넣어도 된다.
)

// JS버전
// if(rootElement){
//     const root = createRoot(rootElement);
    
//     root.render(
//         <h1>hi</h1>
//     )
// }


