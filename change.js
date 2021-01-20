const dispBtn = document.querySelector(".js-allDisp");
const delBtn = document.querySelector(".js-allDel");

const NUM = 12; ///////전체 문장 개수
const CHANGE_DISP = "disp";

function replyId(obj){
    const receivedId = obj.id;
    disting(receivedId);
}


//클래스 개수 판단해서 표시/제거
function disting(int){
    const idNum = int;
    const check = document.getElementById(int).children[1].classList.length;
    if (check == 1){
        displayDisp(idNum);
    }
    else{
        removeDisp(idNum);
    }
}

//표시 함수
function displayDisp(num){
    document.getElementById(num).children[1].classList.add(CHANGE_DISP);
}

//제거 함수 
function removeDisp(int){
    document.getElementById(int).children[1].classList.remove(CHANGE_DISP);
}

//전체 표시 클래스 개수 판단해서 함수 실행 또는 그대로
function findDisp(){
    for(let i = 1; i < NUM + 1; i++){
        const checkNum = document.getElementById(i).children[1].classList.length;
        if (checkNum == 1){
            displayDisp(i);
        } 
    }
}
//전체 제거 클래스 개수 판단해서 함수 실행 또는 그대로
function findHideDisp(){
    for(let j = 1; j < NUM + 1; j++){
        const checkNumAgain = document.getElementById(j).children[1].classList.length;
        if (checkNumAgain == 2){
            removeDisp(j);
        } 
    }
}

//전체 표시 함수
function dispAll(){
    //alert("Display all sentences");
    findDisp();
}
//전체 제거 함수
function delAll(){
    //alert("Delete all sentences");
    findHideDisp();
}

function init(){
    dispBtn.addEventListener("click", dispAll);
    delBtn.addEventListener("click", delAll);
}

init();