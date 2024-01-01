// 저장 버튼 설정 //

const saveBtn = document.getElementById("save");

function onSaveClick(){
    // 이미지를 URL로 인코딩하기
    const url = canvas.toDataURL();
    // a 태그를 생성해 가짜 링크 만들기
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    // 링크 클릭해주기
    a.click();
}

saveBtn.addEventListener("click", onSaveClick);