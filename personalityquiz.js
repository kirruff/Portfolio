function quiz() {
var points=0;
  var q1 = document.querySelector("input[name='q1']:checked").value;
if (q1=="cat"){
  points+=0
}
  else {
    points+=1;
  }
var q2 = document.querySelector("input[name='q2']:checked").value;
if (q2=="husky"){
  points+=2;
}
  else if (q2=="chowChow"){
    points+=4;
  }
else if (q2=="spaniel"){
  points+=6;
}
else if (q2=="bulldog"){
  points+=8;
}

var q3 = document.querySelector("input[name='q3']:checked").value;
if (q3=="husky"){
  points+=2;
}
  else if (q3=="chowChow"){
    points+=4;
  }
else if (q3=="spaniel"){
  points+=6;
}
else if (q3=="bulldog"){
  points+=8;
}

var q4 = document.querySelector("input[name='q4']:checked").value;
if (q4=="husky"){
  points+=2;
}
  else if (q4=="chowChow"){
    points+=4;
  }
else if (q4=="spaniel"){
  points+=6;
}
else if (q4=="bulldog"){
  points+=8;
}

if (q1=="cat"){
  document.getElementById("output").innerHTML="You are a cat person :(";
}
else if (points<8){
document.getElementById("output").innerHTML="Congrats, you are a husky";
}
else if (points<14){
  document.getElementById("output").innerHTML="Congrats, you are a chow chow";
}
else if (points<20){
  document.getElementById("output").innerHTML="Congrats, you are a Cavalier King Charles Spaniel";
}
else{
  document.getElementById("output").innerHTML="Congrats, you are an English bulldog";
}
}
