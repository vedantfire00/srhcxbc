var mouse="empty";
var lastx; var lasty;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("xlast="+lastx+"ylast="+lasty);
        ctx.moveTo(lastx,lasty);
        console.log("xcurrent"+currentx+"ycurrent"+currenty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
lastx=currentx;
lasty=currenty;
}
