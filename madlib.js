
function boxes() {
var name1 = document.getElementById("name1").value;

var adj1 = document.getElementById("adj1").value;

var verbing1 = document.getElementById("verbing1").value;

var place = document.getElementById("place").value;

var verbing2 = document.getElementById("verbing2").value;

var noun1 = document.getElementById("noun1").value;

var noun2 = document.getElementById("noun2").value;

var name1 = document.getElementById("name1").value;

var verb = document.getElementById("verb").value;

var verbed = document.getElementById("verbed").value;

document.getElementById("paragraph").innerHTML="The pirate crew led by "+ name1 +" were on a/an " + adj1 + " ship that was "+ verbing1 + " to an island off the coast of "+ place +". They docked their ship and began " + verbing2 +" for booty, pulling out their map to find the right spot. Along the way, the pirates encountered " + noun1 + " and " + noun2 + ". Led by "+ name1 + ", they " + verb + " their swords and defeated the enemies. The pirates left a little richer and " + verbed + " their way home.";
}
