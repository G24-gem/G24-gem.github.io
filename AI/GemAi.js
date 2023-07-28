var compOpt = ["Rock", "Paper", "Scissor"];

function Rock() {
	var ran = Math.floor(Math.random() * 3);
	   document.getElementById("ME").innerHTML = "ME:" + "" + compOpt[ran];
	   document.getElementById("YOU").innerHTML = "YOU:" + "" + "Rock"
	 if (compOpt[ran] == compOpt[0]) {
         document.getElementById("result").innerHTML = "RESULT:" + "" + "It's a draw"
	 } if (compOpt[ran] == compOpt[2]){
        document.getElementById("result").innerHTML = "RESULT:" + "" + "You Win!"
	 }
	 if (compOpt[ran] == compOpt[1]){
         document.getElementById("result").innerHTML = "RESULT:" + "" + "You lose..."
	 }

}

function Paper() {
	var ran = Math.floor(Math.random() * 3);
	   document.getElementById("ME").innerHTML = "ME:" + "" + compOpt[ran];
	   document.getElementById("YOU").innerHTML = "YOU:" + "" + "Paper"
	 if (compOpt[ran] == compOpt[1]) {
         document.getElementById("result").innerHTML = "RESULT:" + "" + "It's a draw"
	 } if (compOpt[ran] == compOpt[0]){
        document.getElementById("result").innerHTML = "RESULT:" + "" + "You Win!"
	 }
	 if (compOpt[ran] == compOpt[2]){
         document.getElementById("result").innerHTML = "RESULT:" + "" + "You lose..."
	 }


}

function Scissor() {
	var ran = Math.floor(Math.random() * 3);
	   document.getElementById("ME").innerHTML = "ME:" + "" + compOpt[ran];
	   document.getElementById("YOU").innerHTML = "YOU:" + "" + "Scissor"
	 if (compOpt[ran] == compOpt[2]) {
         document.getElementById("result").innerHTML = "RESULT:" + "" + "It's a draw"
	 } if (compOpt[ran] == compOpt[1]){
        document.getElementById("result").innerHTML = "RESULT:" + "" + "You Win!"
	 }
	 if (compOpt[ran] == compOpt[0]){
         document.getElementById("result").innerHTML = "RESULT:" + "" + "You lose..."
	 }


}