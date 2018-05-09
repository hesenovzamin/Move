var div = document.body.querySelector(".div");

var box1 = document.body.querySelector(".box1");

var box2 = document.body.querySelector(".box2");

var box3 = document.body.querySelector(".box3");

var box4 = document.body.querySelector(".box4");

var arr = [box1,box2,box3,box4];
var loopcount = 0;
var box1leftpos =0;
var box1toppos =0;
var box2leftpos =1350;
var box2toppos =0;
var box3leftpos =1350;
var box3toppos =550;
var box4toppos =550;
var box4leftpos =0;


div.onclick = function(){

	 setInterval(Move, 0.01);

	console.log("salam")

};
var count=10;
function Move()
{
	if (box1leftpos<1350)
	{
	box1leftpos++;
	box1toppos=0;
	}
	if (box1leftpos>=1350 && box2toppos <550)
	 {
		box2leftpos =1350;
		box2toppos++;
	 }
	 if (box2toppos >=550 && box3leftpos>=0)
	  {
	  	box3leftpos--;
		box3toppos=550;
	  }
	  if (box3leftpos<=0 && box4toppos >=0)
	  {
		box4leftpos =0;
		box4toppos--;
	  }

	  if (box4toppos !=-1) 
	  {
	  	loopcount++;
	  }
	  if (loopcount==3796) 
	  {
	  	count++;
	  	loopcount = 0;
	  }

console.log(count)



	arr[0].style.top = box1toppos + "px";
	arr[0].style.left = box1leftpos + "px";
	arr[1].style.top = box2toppos + "px";
	arr[1].style.left = box2leftpos + "px";
	arr[2].style.top = box3toppos + "px";
	arr[2].style.left = box3leftpos + "px";
	arr[3].style.top = box4toppos + "px";
	arr[3].style.left = box4leftpos + "px";



}




