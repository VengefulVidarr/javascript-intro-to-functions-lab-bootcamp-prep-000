function shout(string) {
    return string.toUpperCase();
}

function logShout(string) {
  if (string === "HELLO"){
      console.log(string);
  }
}

function whisper(string) {
    return string.toLowerCase();
}

function logWhisper(string) {
  if (string === "hello") {
    console.log(string);
  }
}

//var uppercase = 'HELLO!'
//uppercase.toUpperCase() === uppercase // true

//var lowercase = 'hello!'
//lowercase.toLowerCase === lowercase // true

//var mixedCase = 'Hi there!'
//mixedcase.toLowerCase() === mixedCase // false
//mixedcase.toUpperCase() === mixedCase // false


function sayHiToGrandma(string) {
  if (string === 'hello') {
    return "I can\'t hear you!"
  }
  else if (string === 'HELLO') {
    return "YES INDEED!"
  }
  else if (string === 'I love you, Grandma.') {
    return "I love you, too."
  }
}
