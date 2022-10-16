"use strict"

const range = document.querySelector('#range__slider'),
      output = document.querySelector('#volume'),
      capital = document.querySelector('#capital'),
      low = document.querySelector('#low'),
      digit = document.querySelector('#digit'),
      symbol = document.querySelector('#symbol'),
      resultSection = document.querySelector('section'),
      btn = document.querySelector('BUTTON'),
      passwords = [],
      capitalLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      lowLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      digitArr = [1,2,3,4,5,6,7,8,9,0],
      symbolArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '<', '>', '=', '+', '/', '_'];

capital.checked = true;
digit.checked = true;
low.checked = true;

const outputUpdate = (vol) => {
  output.value = vol;
  output.style.left= range.value + 'px';
};

const charset = () => {
  const arr = [];
  if(capital.checked) arr.push(capitalLetter);
  if(low.checked) arr.push(lowLetter);
  if(digit.checked) arr.push(digitArr);
  if(symbol.checked) arr.push(symbolArr);
  return arr.flat(Infinity);
};

const randomSymbol = () => {
  const symbol = charset();
  return symbol[Math.round(Math.random()*symbol.length)]
}

const createPass = (length) => {
  let password = '';
  for (let i = passwords.length; i < 5; i++) {
    for(let j = 0; j < length; j++){
      if(j.length === length) return passwords.push(password);
      j === 0 ? password += randomSymbol() : 
      password[j] === password[j-1] ? sliceJ(j) : password += randomSymbol();

    }
    passwords.push(password);
    password = '';
  }
  function sliceJ(x) {
    password.slice(x)
    return x--
  }
  return passwords;
}

const renderPass = () => {
  createPass(output.value);
  resultSection.innerHTML = '';
  console.log(resultSection);
  passwords.forEach(el=>{
   return resultSection.innerHTML += el + ' '
  })
  return passwords.splice(0)
}

console.log(btn);
btn.addEventListener('click', ()=>{
  renderPass()
  console.log(passwords);
});




range.addEventListener('input', ()=>outputUpdate(range.value));