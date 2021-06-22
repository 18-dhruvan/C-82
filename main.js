var MouseEvent=""
var lastpositionofX= ""
var currentpositionofX =""
var lastpositionofY = ""
var currentpositionofY =""
var canvas = document.getElementById ("myCanvas") ;
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown", mymousedown) ;
function mymousedown(e){
    MouseEvent="mouseDown"
}
canvas.addEventListener("mouseup", mymouseup) ;
function mymouseup(e){
    MouseEvent="mouseup"
}
canvas.addEventListener("mousemove", mymousemove) ;
function mymousemove(e){
    currentpositionofX =e.clientX-canvas.offsetLeft;
    currentpositionofY =e.clientY-canvas.offsetTop;
    if(MouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.moveTo(lastpositionofX,lastpositionofY)
        ctx.lineTo(currentpositionofX,currentpositionofY);
        ctx.stroke();
    }
    lastpositionofX=currentpositionofX;
    lastpositionofY=currentpositionofY;
}
canvas.addEventListener("mouseleave", mymouseleave) ;
function mymouseleave(e){
    MouseEvent="mouseleave"
}
