var toUpperCase = 'HELLO!'

var toLowerCase = 'hello!'

var mixedCase = 'Hi there!'

function shout(string) {
  console.log (string);
  return string.toUpperCase()
}

function whisper(string) {
  console.log(string);
  return string.toLowerCase()
}

function logShout(string){
  console.log(string)
}

function logWhisper(string) {
  console.log(string);
}

function toUpperCase(string) {

}

function sayHiToGrandma(string) {
  if (`string` === toUpperCase) {
    return "I can\'t hear you!"
  }
  else if (`string` === toLowerCase){
    return "YES INDEED!"
  }
  else if (`string` === "I love you, Grandma.") {
    return "I love you too."
  }
}
