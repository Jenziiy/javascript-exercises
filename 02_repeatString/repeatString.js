let string = ''; //  = prompt("insert a string", "hey");
let num; // = prompt("insert a number");



const repeatString = function(string, num) {
  let text = '';
  let i = 0;
while( i < num)
{
  text += string;
  i++;
}
if (num < 0){
  text += 'ERROR';
}
return text;

 };

// Do not edit below this line
module.exports = repeatString;
