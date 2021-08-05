question_turn="player1";
answer_turn="player2";


player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn- "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn- "+player2_name;

function send(){
    word=document.getElementById("word").value;
    getword=word.toLowerCase();
    console.log(getword);
    charat1=getword.charAt(1);
    wordlength=Math.floor(getword.length/2);
    charat2=getword.charAt(wordlength);
    minnumber=getword.length-1;
    charat3=getword.charAt(minnumber);
    removecharat1=getword.replace(charat1,"_");
    removecharat2=removecharat1.replace(charat2,"_");
    removecharat3=removecharat2.replace(charat3,"_");
    console.log (removecharat3);
    question_word = "<h4 id='question'> Q. "+removecharat3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check(){
     getanswer=document.getElementById("input_check_box").value;
     answer=getanswer.toLowerCase();
    if (getword == answer){
        if (answer_turn == "player1"){
            player1_score +=1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else{
            player2_score +=1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        document.getElementById("status").innerHTML = "Yes you are right!!";
    }else{
        document.getElementById("status").innerHTML = "Sorry you were wrong";
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML ="question turn : "+ player2_name;
        document.getElementById("player_answer").innerHTML ="answer turn : "+ player1_name;
    }else{
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML ="question turn : "+ player1_name; 
        document.getElementById("player_answer").innerHTML ="answer turn : "+ player2_name;
    }
    document.getElementById("output").innerHTML = "";
}
