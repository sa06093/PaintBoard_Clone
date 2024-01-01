// canvas에 그림그리기 //

let isPainting = false;
const onClickFillStroke = document.getElementById("fillstroke");

function onMove(event){
    const fillStroke = onClickFillStroke.value;
    // MouseDown이면서 Move하고있으면 그리기
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);

        if (fillStroke === "Stroke") {
            ctx.stroke();
        } else {
            ctx.fill();
        }
        return;
    } else {
     // 이전까지 그렸던 선들과의 연결 끊어주기
    ctx.beginPath();
    // 그냥 Move만 하고있으면 연필을 움직이기만 함
    ctx.moveTo(event.offsetX, event.offsetY);
    }
}

// 마우스 클릭시
function onMouseDown(){
    isPainting = true;
}

// 마우스 클릭 해제시
function cancelPainting(){
    isPainting = false;
    //ctx.fill(); // 이거 조건부로 만들어두기 
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);