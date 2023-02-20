
let langCode = prompt("Please enter a language code: es, de, en, or fr");
alert("The language code entered by the user is: " + langCode);

if (langCode === "es") {
  alert("Hola mundo"); // Spanish
} else if (langCode === "de") {
  alert("Hallo Welt"); // German
} else if (langCode === "fr") {
  alert("Bonjour le monde"); // French
} else if (langCode === "en") {
  alert("Hello World"); // English
} else {
  alert("Invalid language code"); 
}