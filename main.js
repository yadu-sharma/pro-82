var mouseevent="empty";
var last_pos_of_x,last_pos_of_y;
var radius;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color="red";
var line_width=5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
line_width=document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;

    mouseevent = "mouseDown"


}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_pos_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_pos_of_mouse_y = e.clientY - canvas.offsetTop;
     if(mouseevent=="mouseDown"){
        console.log("last position of X and Y cords = ")
        console.log("x= "+last_pos_of_x+"y= "+last_pos_of_y);
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = line_width;
     ctx.arc(current_pos_of_mouse_x,current_pos_of_mouse_y,radius,0,2 * Math.PI)
console.log("current position of X and Y = ");
console.log("x= "+current_pos_of_mouse_x+"y= "+current_pos_of_mouse_y);
ctx.stroke();
     }
     last_pos_of_x=current_pos_of_mouse_x;
     last_pos_of_y=current_pos_of_mouse_y;

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

