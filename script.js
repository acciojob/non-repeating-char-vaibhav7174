//your JS code here. If required.
 let str=prompt("Enter a String");

       function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "null";
}
alert(firstNonRepeatingCharacter(str));