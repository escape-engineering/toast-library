import React from "react";
import Toast from "./Toast";
import { showToast } from "./showToast";

function App() {
    return (
        <div className="App">
            <button onClick={() => showToast("이것은 성공 메시지입니다!", "success")}>성공 토스트 표시</button>
            <button onClick={() => showToast("이것은 경고 메시지입니다!", "warn")}>경고 토스트 표시</button>
            <button onClick={() => showToast("이것은 오류 메시지입니다!", "error")}>오류 토스트 표시</button>
            <button onClick={() => showToast("이것은 일반 메시지입니다!", "normal")}>일반 토스트 표시</button>
            <Toast />
        </div>
    );
}

export default App;
