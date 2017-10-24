function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

var uppercase = 'HELLO!'
uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'
lowercase.toLowerCase === lowercase // true

var mixedCase = 'Hi there!'
mixedcase.toLowerCase() === mixedCase // false
mixedcase.toUpperCase() === mixedCase // false


function sayHiToGrandma(string) {
  if (lowercase) {
    return "I can\'t hear you!"
  }
  else if (uppercase){
    return "YES INDEED!"
  }
  else if (mixedCase) {
    return "I love you, too."
  }
}
