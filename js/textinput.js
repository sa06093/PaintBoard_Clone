// Text Input 설정 //

// 더블클릭한 곳에 텍스트 그려주기
const textInput = document.getElementById("text");

// 글씨 속성 설정
const fontSizeInput = document.getElementById("fontSizes");
const fontTypesSelect = document.getElementById("fontTypes");
const fontWeightSelect = document.getElementById("fontWeights");

function onDoubleClick(event){
    const text = textInput.value;
    const fontSize = fontSizeInput.value;
    // 최대 font size가 48 못넘어가게 지정
    const maxFontSize = 48;
    if (parseInt(fontSize) > maxFontSize) {
        fontSize = maxFontSize;
    }
    const selectedFontType = fontTypesSelect.value;
    const selectedFontWeight = fontWeightSelect.value;

    // text가 존재한다면
    if (text !== "") {
        // save와 restore 사이에서 일어난 수정은 저장되지 않음
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = `${selectedFontWeight} ${fontSize}px ${selectedFontType}`;
        console.log(selectedFontWeight, selectedFontType, fontSize);
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

canvas.addEventListener("dblclick", onDoubleClick);