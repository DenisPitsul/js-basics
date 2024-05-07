// Tasks for variables
// 1.1
const a = 3;
const b = 5;
console.log(`${a} * ${b} = ${a * b}`);

// 1.2
const c = 12;
const d = 4;
console.log(`${c} / ${d} = ${c / d}`);

// 1.3
const e = 6;
const f = 8;
console.log(`${e} + ${f} = ${e + f}`);

// 1.4
const numberVar = 11;
const booleanVar = true;
const strVar = 'java script';
const strNumVar = "100";
console.log(`number: ${numberVar}, boolean: ${booleanVar}, string: ${strVar}, string number: ${strNumVar}`);

// 1.5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// Tasks for input and output
// 2.1
const numberToSquare = +prompt('2.1. Enter a number to square:');
const squareNumber = numberToSquare ** 2;
console.log(`${numberToSquare}^2 = ${squareNumber}`);

// 2.2
const firstNumberForMean = Number(prompt('2.2. Enter first number for mean:'));
const secondNumberForMean = Number(prompt('2.2. Enter second number for mean:'));
const numbersMean = (firstNumberForMean + secondNumberForMean) / 2;
alert(`Mean for ${firstNumberForMean} and ${secondNumberForMean} is ${numbersMean}`);

// 2.3
const minutes = +prompt('2.3. Enter minutes to convert to seconds:');
const seconds = minutes * 60;
document.write(`<p>2.3. ${minutes} minutes = ${seconds} seconds.</p>`);

// 2.4
let greeting = 'Hello';
const userName = prompt('Input user name:');
greeting = greeting + ' ' + userName + '!';
document.write(`<p>2.4. ${greeting}</p>`);

// 2.5
const firstName = prompt('2.5. Input first name:', "anonymus");
const lastName = prompt('2.5. Input last name:', 'noname');
const age = Number(prompt('2.5. Input age:', '18'));
const email = prompt('2.5. Input email:', 'anonymus@gmail.com');
const phone = prompt('2.5. Input phone number:', '+380960000000');
const photoUrl = prompt('2.5. Input phone number:', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png');

document.write(`
  <article class="card">
    <img class="card-photo" src="${photoUrl}" alt="${firstName} photo">
    <h2 class="card-name">${firstName} ${lastName}</h2>
    <p class="card-age">${age} years old</p>
    <section class="card-info-wrapper">
      <div class="card-info-item">
        <i class="fa-solid fa-envelope"></i>
        <a class="card-link" href="mailto:${email}">${email}</a>
      </div>
      <div class="card-info-item">
        <i class="fa-solid fa-phone"></i>
        <a class="card-link" href="tel:${phone}">${phone}</a>
      </div>
    </section>
  </article>
`)