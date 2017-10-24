//Yells
function shout(string) {
  console.log (string);
  return string.toUpperCase()

}

//Needs Spy Added
function logShout(string){
  console.log(string);
  }

function spy(string){
  if (`$string` === string.toUpperCase)
  console.log().andCallThrough
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
    console.log('I can\'t hear you!');
  }
}
