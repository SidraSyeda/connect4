var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

setInterval(draw,10);
var player1=true;

var count=0;
var circle_x;
var circle_y;
var arr = [];


var count1=0;
	var count2=0;

for (var i=0;i<7;i++) {
    arr[i] = [];
    for (var j=0;j<5;j++) {
     arr[i][j] = {x:0,y:0, touched:false, player:3};
  	}
}



function drawGrid(){
	for (var i=0;i<7;i++) {
		 count1=0;
		count2=0;

	    for (var j=0;j<5;j++) {

	    	

		     arr[i][j].x=i*65+15;
		     arr[i][j].y=j*65+15;
		    

		     
			    ctx.beginPath();
				//ctx.rect(i*65+15,j*65+15,60,60);
				ctx.arc( arr[i][j].x+30,  arr[i][j].y+30, 25, 0, Math.PI*2);
				
				//ctx.fillStyle="brown";
				ctx.stroke();
				ctx.closePath();

				 if(arr[i][j].touched){
				 	if(arr[i][j].player)	{
				 		ctx.fillStyle = "yellow";
				 		count2++;
					count1=0;
				 	
				 	}
				 	else {
				 		ctx.fillStyle = "red";
				 		count1++;
					count2=0;
				 	
				 	}				 	


				 	ctx.beginPath();
					ctx.arc( arr[i][j].x+30,  arr[i][j].y+30, 25, 0, Math.PI*2);
				
					ctx.fill();
					ctx.closePath();


					if(count1==4){
						console.log(count1);
						console.log("Player 1 You Win!");
				//alert("Player 1 You Win!");
				 	document.location.reload();

			}
			else if (count2==4){
						console.log(count2);
						console.log("Player 2 You Win!");
										 	document.location.reload();

			}


				 }
				 else{
				 	ctx.fillStyle = "white";
				 	ctx.beginPath();
					ctx.arc( arr[i][j].x+30,  arr[i][j].y+30, 25, 0, Math.PI*2);
				
					ctx.fill();
					ctx.closePath();
				 	count1=0;
					count2=0;
				 }


		
	  	}
  	}	

}



document.addEventListener("mousemove", mouseMoveHandler);
document.addEventListener("click", mouseClickHandler);


function checkgame(){
	
	for(var i=0;i<5;i++){
		 count1=0;
		count2=0;
		for(var j=0;j<7;j++){

			if(count1==4){
				alert("Player 1 You Win!")
				document.location.reload();

			}
			else if (count2==4){
				alert("Player 2 You Win!");
				document.location.reload();

			}

			if (arr[j][i].touched){
				if (arr[j][i].player==0) {
					count1++;
					count2=0;
				}
				else{
					count2++;
					count1=0;
				} 

			}
			else{
				count1=0;
		count2=0;
			}


	}
}



for(var i=0;i<4;i++){
	 count1=0;
		count2=0;
	var col=i;
	var condition=7-i;

	if (col==0 ||col==1){
		condition=5
	}
	while(col<condition){
			if(count1==4){
				alert("Player 1 You Win!")
				document.location.reload();

			}
			else if (count2==4){
				alert("Player 2 You Win!");
				document.location.reload();

			}



		if (arr[col][col-i].touched){
			if (arr[col][col-i].player==0) {
					count1++;
					count2=0;
				}
				else{
					count2++;
					count1=0;
				} 

		}
		else{
			count1=0;
		count2=0;
		}
		col++;

	}



}





}


function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	var relativeY = e.clientY - canvas.offsetTop;
	var grid_x=Math.round((relativeX-60)/60);
	var grid_y=Math.round((relativeY-50)/60);
	console.log(grid_x);
	console.log(grid_y);
	
	circle_x=arr[grid_x][grid_y].x+30;
 	circle_y=arr[grid_x][grid_y].y+30;

	if(count%2==0) ctx.fillStyle = "red";
	else ctx.fillStyle = "yellow";



	ctx.beginPath();
	ctx.arc(circle_x, circle_y, 25, 0, Math.PI*2);
	
	ctx.fill();
	ctx.closePath();
}


function mouseClickHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	var relativeY = e.clientY - canvas.offsetTop;
	var grid_x=Math.round((relativeX-60)/60);
	var grid_y=Math.round((relativeY-50)/60);
	

	for(var i=4;i>=0;i--){
		if (!arr[grid_x][i].touched){
			if(count%2==0) arr[grid_x][i].player=0;
			else arr[grid_x][i].player=1;
		arr[grid_x][i].touched=true;
		count++;
			
		break;
	}

	}
	
	draw();

}




function draw(){

	ctx.clearRect(0,0,canvas.width,canvas.height);
	checkgame();

	drawGrid();

	}


