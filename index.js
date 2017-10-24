function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function spyOn(string) {
  console.log(string);
}

//var uppercase = 'HELLO!'
//uppercase.toUpperCase() === uppercase // true

//var lowercase = 'hello!'
//lowercase.toLowerCase === lowercase // true

//var mixedCase = 'Hi there!'
//mixedcase.toLowerCase() === mixedCase // false
//mixedcase.toUpperCase() === mixedCase // false


function sayHiToGrandma(string) {
  if (string.toLowerCase) {
    return "I can\'t hear you!"
  }
  else if (string.toUpperCase){
    return "YES INDEED!"
  }
  if (string === `I love you, Grandma.`) {
    return "I love you, too."
  }
}
