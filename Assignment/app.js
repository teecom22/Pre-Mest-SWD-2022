const colours=['f1f5f8','red','orange','yellow', 'green', 'blue','indigo','voilet'];
const color =document.querySelector('.color');
const btn =document.querySelector('.btn');




btn.addEventListener('click', ()=>{
  const random= getRandomNumber();
  document.body.style.backgroundColor=colours[random]
  color.textContent =colours[random]
  console.log(random)

})

  function getRandomNumber(){
return Math.floor(Math.random()*colours.length);
  }
  
  