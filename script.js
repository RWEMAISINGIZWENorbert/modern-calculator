// javascript code
 


 function num0(){
    display.value += '0';
 }
 function num1(){
    display.value += '1';
 }

 function num2(){
    display.value += '2';
 }

 function num3(){
    display.value += '3';
 }

 function num4(){
    display.value += '4';
 }
 function num5(){
    display.value += '5';
 }

 function num6(){
    display.value += value;
 }
 function num7(){
    display.value += '7'; 
 }
 function num8(){
    display.value += '8'; 
 }
 function num9(){
    display.value += '9';
 }

 function opc(){
    display.value = '';
 }

 function opdel(){
    display.value = display.value.slice(0,-1);
 }

 function opper() {
    display.value += "%";
 }

 function opdivide() {
    display.value += "/";
 }

 function opsum() {
    display.value += "+";
 }

 function opmin() {
    display.value += "-";
 }

 function opmult() {
    display.value += "*";
 }

 function opdot(){
    display.value += "."
 }

 function opeq(){
    display.value = eval(display.value);
 }