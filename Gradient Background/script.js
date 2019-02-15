var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var rand=document.getElementById("unique");

function setgrad(){
	body.style.background =
	"linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value 
	 + ")";

	 css.textContent= body.style.background + ";";
}

function rc(){
	var r1='#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return r1;
}
function randcol(){
	color1.value=rc();
	color2.value=rc();
	setgrad();
}
console.log(css);
console.log(color1);
console.log(color2);

rand.addEventListener("click",randcol);
color1.addEventListener("input", setgrad);
color2.addEventListener("input", setgrad);