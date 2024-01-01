// File Input 버튼 설정 //

const fileInput = document.getElementById("file");

function onFileChange(event){
    const file = event.target.files[0]; // 사용자가 선택한 파일 가져옴
    const url = URL.createObjectURL(file);  // 그 파일을 가르키는 URL 생성
    const image = new Image();  // HTML에서 <image src="" /> 태그 쓰는것과 동일
    image.src = url;    // image 객체의 scr 속성 설정
    image.onload = function(){
        // image 객체에 로드된 이미지를 canvas에 그림
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // 파일 입력 요소의 값을 초기화해줌
        fileInput.value = null;
    }
}

fileInput.addEventListener("change", onFileChange);
