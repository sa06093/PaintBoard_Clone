// 전체 채우는 버튼 설정 //

const modeBtn = document.getElementById("mode-btn");
const currentStatus = document.getElementById("currentStatus");

const fillstr = document.getElementById("fillstroke");

let isFilling = false;

function onModeClick(){
    if(isFilling){
        // Filling 상태면 Draw상태 만들어주고, 버튼 텍스트 Fill로
        isFilling = false;
        modeBtn.innerText = "🩸 Fill";
        currentStatus.innerText = "Current: 🎨 Draw"
        fillstr.style.display = "block";
    } else{
        // Drawing 상태면 Fill상태 만들어주고, 버튼 텍스트 Draw로
        isFilling = true;
        modeBtn.innerText = "🎨 Draw"
        currentStatus.innerText = "Current: 🩸 Fill"
        fillstr.style.display = "none";
    }
}

function onCanvasClick(){
    // canvas를 눌렀을 때, isFilling = true라면, Canvas 전체를 그 색으로 채워줌
    // 색은 위의 ctx.color에서 설정되어 있는 상태
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

modeBtn.addEventListener("click", onModeClick);
canvas.addEventListener("click", onCanvasClick);