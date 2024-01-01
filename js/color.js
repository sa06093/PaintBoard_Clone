// color 설정해주기 //

// color 내장버튼 가져옴
const color = document.getElementById("color");

// color-option이라는 class가 여러개 있으므로 Array로 가져와줌
const colorOptions = Array.from(document.getElementsByClassName("color-option"));

// color 값이 변경될 때 선과 채우기 색을 그 색으로 설정해줌
function onColorChange(event){
    ctx.strokeStyle = event.target.value;   // 선 색 설정
    ctx.fillStyle = event.target.value;     // 채우기 색 설정
}


function onColorClick(event){
    // 클릭된 요소의 data-color 속성 값 가져오기
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;   // 선 색 설정
    ctx.fillStyle = colorValue; // 채우기 색 설정
    color.value = colorValue;   // 선택된 요소를 color의 input요소로 설정 (내장버튼도 변경해주려고)
}

color.addEventListener("change", onColorChange);
// 배열에 있는 각각의 요소에 대해 "click" 이벤트 리스너를 등록
colorOptions.forEach(color => color.addEventListener("click", onColorClick));