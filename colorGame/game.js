var level=0;
var pickedColor;
var colors=[];
var sq=document.querySelectorAll(".block");
var head=document.getElementById("headColor");
var msg=document.getElementById("message");
var newbtn=document.querySelector("#gamebtn");
var h1=document.getElementById("heading");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");
easybtn.classList.add("selected");


logic(3);

newbtn.addEventListener("click",function(){
	if(level==0){
	logic(3);
}else{
	logic(6);
}
msg.textContent="";
newbtn.textContent="NEW GAME";
h1.style.backgroundColor="black";
})


easybtn.addEventListener("click",function(){
	level=0;
   logic(3);
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");

})



hardbtn.addEventListener("click",function(){
	level=1;
logic(6);
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");

})


function logic(num){

	colors=generateRandom(num);
    pickedColor=pickup(colors);
	head.textContent=pickedColor;
for(var i=0;i<sq.length;i++){
	if(i<num){
	sq[i].style.backgroundColor=colors[i];
	sq[i].style.display="block";
	sq[i].addEventListener("click",function(){
		var curColor=this.style.backgroundColor;
		//console.log(curColor,pickedColor);
		if(curColor===pickedColor){
			
			changeColor(pickedColor);
			msg.textContent="CORRECT!";
			newbtn.textContent="Play Again?";
			h1.style.backgroundColor=pickedColor;

		}else{
			this.style.backgroundColor="black";
			msg.textContent="TRY AGAIN!";
		}
	})
}else{
	sq[i].style.display="none";
}

}
// console.log(pickedColor);
// console.log(sq[0].style.backgroundColor,sq[1].style.backgroundColor,sq[2].style.backgroundColor,sq[3].style.backgroundColor,
// 	sq[4].style.backgroundColor,sq[5].style.backgroundColor);
}

function changeColor(pickedColor) {

	for(var i=0;i<sq.length;i++){
		sq[i].style.backgroundColor=pickedColor;
	}
}

function pickup(colors){
	var r=Math.floor(Math.random()*colors.length);
	return colors[r];
}

function generateRandom(num){
var ar=[];
for(var i=0;i<num;i++){

	ar[i]=RandomColor();
}
return ar;
}

function RandomColor(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}