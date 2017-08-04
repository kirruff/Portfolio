function translator(){
  var output = ""
  var str = document.getElementById("translator").value;
  for (var x=0; x < str.length; x++) {
    var char = str.charAt(x);
      if (char == "a" || char=="e" || char=="i" || char=="o" || char=="u") {
      output= output +"ub" + char;
      }
      else {
        output = output + char;
      }
    }
  document.getElementById("translate").innerHTML=output;
}
