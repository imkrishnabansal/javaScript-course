let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let turnO = true;
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame = ()=>{
    turnO = true;
    enablebtns();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO){
        box.innerText = "O";
        turnO =false;
      }
      else{
        box.innerText = "X";
        turnO =true;
      }
      box.disabled =true;
      checkwinner();
    });
});
const disablebtns = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};
const enablebtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner)=>{
    let player = winner === "O" ? "Player 1" : "Player 2";
    message.innerText = `Congratulations! ${player} is the winner`;
    msgcontainer.classList.remove("hide");
    disablebtns();
};
const showdraw = ()=>{
    message.innerText = "It's a draw!";
    msgcontainer.classList.remove("hide");
    disablebtns();
};

const checkwinner= ()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val);
                return;
            }
        }
    }
    let isDraw = true;
    for(let box of boxes){
        if(box.innerText === ""){
            isDraw = false;
            break;
        }
    }
    if(isDraw){
        showdraw();
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

