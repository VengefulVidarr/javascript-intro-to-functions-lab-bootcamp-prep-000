var toUpperCase = 'HELLO!'

var toLowerCase = 'hello!'

var mixedCase = 'Hi there!'

//Yells
function shout(string) {
  console.log (string);
  return string.toUpperCase()

}

//Needs Spy Added
function logShout(string){
  console.log(string).toUpperCase;
  function spy(string){
    if (`$string` === string.toUpperCase)
    spyon(console, `log`).andCallThrough
  }
}


//whisper
function whisper(string) {
  console.log(string);
  return string.toLowerCase();
}

function logWhisper(string) {
  console.log(string);
}

function sayHiToGrandma(string){
  if (`$(string)` === string.toLowerCase) {
    return console.log("I can\'t hear you!");
  }
  else if (`$(string)` === string.toUpperCase){
    return console.log("YES INDEED!");
  }
}
