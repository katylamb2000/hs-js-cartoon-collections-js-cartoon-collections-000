  

function dwarfRollCall(dwarves) {
var array = [];
  for (let i=0; i<dwarves.length; i++){
  array.push (`${i+1}. ${dwarves[i]} `)
  
  }
  return array.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var array = []
  for (let i = 0; i<planeteerCalls.length; i++) {
    array.push `${planeteerCalls[i].toUpperCase}! `
  }
  return array
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
