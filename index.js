//Yells
function shout(string) {
  console.log (string);
  return string.toUpperCase()
}

//Needs Spy Added 
function logShout(string){
  console.log(string);
}

//whisper
function whisper(string) {
  console.log(string);
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string);
}

function sayHiToGrandma(string){
  if (`$(string)` === "hello") {
    console.log("I can't hear you!")
  }
}