const CHANGE_DISP = "disp"

function replyId(obj){
    const receivedId = obj.id;
    disting(receivedId);
}

function disting(int){
    const idNum = int;
    const check = document.getElementById(int).children[1].classList.length 
    if (check == 1){
        displayDisp(idNum);
    }
    else{
        removeDisp(idNum);
    }
}

//표시 함수
function displayDisp(int){
    document.getElementById(int).children[1].classList.add(CHANGE_DISP);
}

//제거 함수 
function removeDisp(int){
    document.getElementById(int).children[1].classList.remove(CHANGE_DISP);
}