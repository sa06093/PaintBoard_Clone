// 기본 canvas 설정 //

// canvas HTML에서 가져오기
const canvas = document.querySelector("canvas");

// ctx는 canvas에 그림을 그릴 때 사용
const ctx = canvas.getContext("2d");

// canvas 크기 설정
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
