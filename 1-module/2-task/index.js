/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
// Регулярное выражение для проверки:
  // ^ - начало строки
  // \S - любой непробельный символ
  // {4,} - минимум 4 символа
  // $ - конец строки
   if (name == null) {
     return false;
    }
  const regex = /^\S{4,}$/;
  return regex.test(name);
}
/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
