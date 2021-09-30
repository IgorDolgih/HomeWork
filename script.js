
// HOMEWORK #1 АНКЕТА

 /* while (!(name = prompt("Ваше имя:"))) {
    alert('Значение не должно быть пустым');
  }

  while (!(sername = prompt("Ваша фамилия:"))) {
    alert('Значение не должно быть пустым');
  }

  while (!(midleName = prompt("Ваше отчество:"))) {
    alert('Значение не должно быть пустым');
  }

  while (isNaN(age = parseInt(prompt("Ваш возраст:")))) {
    alert('Введите корректное значение');
  }

  let isMale = confirm("Ваш пол мужской?");
  let allDays = age * 365 + parseInt(age / 4);
  let future = age + 5;

  let pension = age > 60 ? "да" : "нет";
  let gender = isMale ? "мужской" : "женский";


  alert("ваше ФИО: " + sername + " " + name + " " + midleName +
    "\n" + "ваш возраст в годах: " + age + "\n" + "ваш возраст в днях: " + allDays +
    "\n" + "через пять лет вам будет: " + future + "\n" + "ваш пол: " + gender + "\n" + "вы на пенсии: " + pension); */



//HOMEWORK #2 МАССИВ

/* arr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];

function treeSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'object') {
      sum += treeSum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
}

console.log(treeSum(arr));
 */


//HOMEWORK #3 ПОДСЧЕТ ГЛАСНЫХ

/* function countVowels() {
    let k = 0;
    let stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let string = prompt("Напишите что-нибудь");
    for (var i = 0; i < string.length; i++)
      for (var j = 0; j < stringsearch.length; j++)
        if (string[i] === stringsearch[j]) {
          ++k;
          break;
        }
    return k 
  }

  console.log(countVowels()); */



  // HOMEWORK #4 ПОДСЧЕТ ГЛАСНЫХ С ИСПОЛЬЗОВАНИЕМ ФУНКЦИЙ

/* 
  let text = prompt("Напишите что-нибудь").toLowerCase();

  function countVowels(text) {
    let arrayString = text.split('');
    let stringSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let counter = 0;
    arrayString.forEach(function (l) {
      stringSearch.forEach(function (v) {
        if (v === l) {
          ++counter;
        }
      });
    });
    return counter;
  }
  console.log(countVowels(text)); */

/////////////////////////////////////////////////////////

 /*  let text = prompt("Напишите что-нибудь").toLowerCase();

  function countVowels(text) {
    let arrayString = text.split('');
    let stringSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let counter = 0;
    arrayString.filter((l) => {stringSearch.filter((v) => {
      if (v === l) {
        ++counter;
      }
    })});
    return counter;
  }
  console.log(countVowels(text)); */

  //////////////////////////////////////////////////////

  /* let text = prompt("Напишите что-нибудь").toLowerCase();

  function countVowels(text) {
    let arrayString = text.split('');
    let stringSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let result = arrayString.reduce((counter, l) => {
      stringSearch.forEach((v) => {
        if (v === l) {
          ++counter;
        }
      });
      return counter;
    }, 0);
    return result;
  }
  console.log(countVowels(text)); */
  





