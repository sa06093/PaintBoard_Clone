// 마우스 커서 설정 //

// 캔버스 위에서 마우스 커서 모양 설정
canvas.addEventListener("mouseover", function() {
    
    if (modeBtn.innerText === "🩸 Fill") {
        // Fill 모드일 때 십자가 모양 커서로 설정
        canvas.style.cursor = "Crosshair";
    } else {
        // Draw 모드일 때 move 모양 커서로 설정
        canvas.style.cursor = "move";
    }
});

canvas.addEventListener("mouseout", function() {
     // 마우스가 Canvas 영역을 벗어나면 기본 커서로 설정
    canvas.style.cursor = "default";
});

// 버튼들 위에서 마우스 커서 모양 설정
const elements = document.querySelectorAll('input:not(#text), button, select, label'); // querySelectorAll을 쓰면 여러 태그들을 한번에 가져옴

elements.forEach(element => {
    element.addEventListener("mouseover", function() {
        // 마우스 오버 시 손모양 커서로 설정
        element.style.cursor = "pointer";
    });

    element.addEventListener("mouseout", function() {
        // 마우스 아웃 시 기본 커서로 설정
        element.style.cursor = "default";
    });
});