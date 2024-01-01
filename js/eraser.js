// 전체 지우는 버튼 설정//

// 사실 흰색으로 전체 Fill하는 것과 같음
const destroyBtn = document.getElementById("destroy-btn");

function onDestroyClick(){
    // Destroy 버튼 클릭시 알림 띄워줌
    if (confirm("정말 삭제하시겠습니까?") === true) {
        ctx.fillStyle = "white";    // 도형을 채울 색 정하기
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

destroyBtn.addEventListener("click", onDestroyClick);


// 지우개 버튼 설정//

// 흰색으로 그리는 것과 같음
const eraserBtn = document.getElementById("eraser-btn");

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;  // Draw 상태로 만들어줌
    modeBtn.innerText = "🩸 Fill";
}

eraserBtn.addEventListener("click", onEraserClick);