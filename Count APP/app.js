let btn1 = document.getElementById("increase");
let btn2 = document.getElementById("reset");
let btn3 = document.getElementById("decrease");
let display = document.getElementById("display");
var count = 0
btn1.addEventListener('click', ()=>{
  var increment = document.getElementById("display");
  increment.count =count;
  count++;
  display.textContent=count;
 increase.style.color = 'green';
 display.style.color ='green'

btn2.addEventListener('click',()=>{
var reset = document.getElementById("reset");
reset.count=count;
 count=0;
 display.textContent=count;
 display.style.color ='black'
 

})
  
})
btn3.addEventListener('click', ()=>{
  var decrement = document.getElementById("display");
  decrement.count = count;
  count--;
  display.textContent=count;
  decrease.style.color = 'red';
  display.style.color ='red'
})