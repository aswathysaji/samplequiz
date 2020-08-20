function submitAnswer(){
var totalscore=5;
var score=0;
//get user input
var q1=document.forms["quizForm"]["q1"].value;
var q2=document.forms["quizForm"]["q2"].value;
var q3=document.forms["quizForm"]["q3"].value;
var q4=document.forms["quizForm"]["q4"].value;
var q5=document.forms["quizForm"]["q5"].value;
//validation
for(i=1;i<=totalscore;i++){
    if(eval('q' +i)==null || eval('q' +i)==''){
        alert('You missed the Question no ' + i);
        return false;
    }
}
var answers=["a","b","b","d","c"];
for(i=1;i<=totalscore;i++){
    if(eval('q' +i)==answers[i-1]){
        score++;
    }
}
var results=document.getElementById("results");
results.innerHTML="<h3>You scored <span>"+score+ "</span> out of <span>" +totalscore+ "</span></h3>";  
alert("You scored "+ score + " out of "+ totalscore);
return false;
}