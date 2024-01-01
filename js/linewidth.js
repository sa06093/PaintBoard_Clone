// line-width 설정해주기 //

// 초기 line-width 설정
const lineWidth = document.getElementById("line-width");
ctx.lineWidth = lineWidth.value;    //초기 line-width를 5로 지정
ctx.lineCap = "round";  //선의 끝을 둥글게 처리

// line-width 변경
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

lineWidth.addEventListener("change", onLineWidthChange);    // 변경되었을 때