"use strict"

const range = document.querySelector('#range__slider'),
      output = document.querySelector('#volume'),
      capital = document.querySelector('#capital'),
      low = document.querySelector('#low'),
      digit = document.querySelector('#digit'),
      symbol = document.querySelector('#symbol'),
      resultSection = document.querySelector('ol'),
      btn = document.querySelector('BUTTON'),
      passwords = [],
      capitalLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      lowLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      digitArr = [1,2,3,4,5,6,7,8,9,0],
      symbolArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '<', '>', '=', '+', '/', '_'];

capital.checked = true;
digit.checked = true;
low.checked = true;

// console.dir(range)

const setChars = () => {
  let arr = [];
  if(capital.checked) arr.push(capitalLetter);
  if(low.checked) arr.push(lowLetter);
  if(digit.checked) arr.push(digitArr);
  if(symbol.checked) arr.push(symbolArr);
  arr = arr.flat(Infinity);
  // console.log(arr);
  return arr;
};

const getRandomSymbol = () => {
  const symbol = setChars();
  const r = Math.round(Math.random()*(symbol.length-1));
  const random = symbol[r];
  // console.log(`symbol length: ${symbol.length}`);
  // console.log(r);
  return random;
};

const generatePassword = () => {
  let password = '';
  const passwordLength = output.value;
  for(let i = 0; i < passwordLength; i++){
    const randomSymbol = getRandomSymbol();
    password += randomSymbol;
  };
  // console.log(und.test(password));
  return password
}

// console.log(generatePassword());

// const a = 'abcdea';
// console.log(a);
// console.log(a.replace(/a/gi, getRandomSymbol()));

const createPasswords = () => { 
  for(let i = 0; i < 5; i++) {
    const passwordChar = generatePassword();
    passwords.push(passwordChar);
  };
};

const updateValue = () => {
  range.addEventListener('input', ()=>{
    output.value = range.value;
  });
}

const render = () => {
  while(resultSection.firstChild){
    resultSection.removeChild(resultSection.firstChild)
  }
  console.log(resultSection);
  createPasswords();
  passwords.forEach((password) => {
    return resultSection.innerHTML += `<li>
    ${password} 
    </li>`
  })
  return passwords.splice(0)
};


updateValue();
btn.addEventListener('click', render);



