//your JS code here. If required.
   let str=prompt("Enter a String");
       let str1=str[nonreapting(str)]
      function nonreapting(s){
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
}
//console.log(str1);
alert(str1);