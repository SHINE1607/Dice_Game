init();



//document.querySelector("#current-" +activeplayer).textContent=dice;

//document.querySelector("#current-" +activeplayer).innerHTML=dice;




//event handler
function btn(){
	
	
	//1. random number
	dice=Math.floor(6*Math.random())+1;
	//2.diplay the result
	var diceDOM=document.querySelector(".dice");
	diceDOM.style.display="block";
	diceDOM.src="dice-"+dice+".png";
	
	//3.update the score only if the dice value is not equal to 1
	if(dice!==1){
		
	
		roundscore=roundscore+dice;
		document.querySelector("#current-" +activeplayer).innerHTML=roundscore;
		
	}
	else if(dice==1){
		score[activeplayer]=score[activeplayer]+roundscore;
		document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
		document.querySelector(".dice").style.display="none";
		
		
		if(activeplayer==0){
		document.querySelector(".player-0-panel").classList.remove('active');
		document.querySelector(".player-1-panel").classList.add('active');
		}
		else if(activeplayer==1){
		document.querySelector(".player-1-panel").classList.remove('active');
		document.querySelector(".player-0-panel").classList.add('active');
		}
		
		
		
		document.querySelector("#current-" +activeplayer).textContent="0";
		if(score[activeplayer]>=100){
			document.querySelector("#name-" +activeplayer).textContent="WINNER";
		}
		
		activeplayer===0? activeplayer=1:activeplayer=0;
		roundscore=0;
		
		
		
	}
		
		
}

document.querySelector(".btn-roll").addEventListener("click",btn);

//function to add current score to global score
function hold(){
	score[activeplayer]=score[activeplayer]+roundscore;
	document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
	if(activeplayer==0){
		document.querySelector(".player-0-panel").classList.remove('active');
		document.querySelector(".player-1-panel").classList.add('active');
		}
		else if(activeplayer==1){
		document.querySelector(".player-1-panel").classList.remove('active');
		document.querySelector(".player-0-panel").classList.add('active');
		}
	document.getElementById("current-"+activeplayer).textContent="0";
	activeplayer===0? activeplayer=1:activeplayer=0;
	roundscore=0;
	
	
	
}



document.querySelector(".btn-hold").addEventListener("click",hold);


document.querySelector(".btn-new").addEventListener("click",init);
													
function init(){
	
	 score=[0,0];
	 roundscore=0;
	 activeplayer=0;
	console.log(roundscore);
	console.log(score);
	var player_1=prompt("enter the player 1 name");
	var player_2=prompt("enter the player 2 name");
	document.querySelector("#name-0").textContent=player_1;
	document.querySelector("#name-1").textContent=player_2;
	
	
	document.querySelector(".dice").style.display="none";
	
	document.getElementById("score-0").textContent="0";
	document.getElementById("score-1").textContent="0";
	document.getElementById("current-0").textContent="0";
	document.getElementById("current-1").textContent="0";
	document.querySelector(".dice").style.display="none";

}													
													




			//add current score to global score
	








