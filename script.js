
// HOMEWORK #1 

 while (!(name = prompt("Ваше имя:"))) {
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
    "\n" + "через пять лет вам будет: " + future + "\n" + "ваш пол: " + gender + "\n" + "вы на пенсии: " + pension);



//HOMEWORK #2









//HOMEWORK #3

function countVowels() {
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

  console.log(countVowels());