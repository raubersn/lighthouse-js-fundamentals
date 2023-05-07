const urlEncode = function(text) {
  text = text.trim();
  let encodeText = "";

  for (let i = text.length - 1; i >= 0; i--)
    encodeText = (text[i] === " ") ? "%20" + encodeText : text[i] + encodeText;

  return(encodeText);
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));