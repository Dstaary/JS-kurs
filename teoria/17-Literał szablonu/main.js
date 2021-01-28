// TEMPLATE STRING - LITERAŁ SZABLONU

//grawis, lewy apostrof
`tekst`;
"tekst";
'tekst';

//Użycie pojedyńczych i podwójnych cudzysłowów w środku jest możliwe
`"I'm only human" - Alexander The Great`;
// "\"I'm only human\" - Alexander The Great";
// '"I\'m only human" - Alexander The Great';

// wielowierszowe stringi
// ES5
const text1 = "tekst\ntekst\ntekst";
// ES6
const text2 = `tekst
tekst
tekst`;


// ${} - osadzanie kodu JS wewnatrz stringa

const yourName = "Jagienka";

//Możliwość wstrzykiwania kodu wewnatrz stringa
const greeting = `Cześć ${yourName}!`;

// Podobny efekt możemy uzyskać za pomocą konkatenacji
const greeting2 = "Cześć " + yourName + "!";


//Możliwość użycia wyrażenia (wyrażenie jest wykonywane i zwracany jest wynik)

const user1 = 29;
const user2 = 45;
const user3 = 34;

// console.log(`Średni wiek użytkowników to: ${(user1 + user2 + user3) / 3}, a łączny wiek to ${user1 + user2 + user3} lat`);


// Pobranie i wyświetlenie aktualnej daty

// console.log(`Obecnie zegarek wskazuje ${new Date().toLocaleString()}`);

// Obliczenie

const price = 76.0;
const tax = 23;

// console.log(`Do zapłaty: ${price + (price * tax) / 100} złotych`)

// console.log(`Do zapłaty: ${(price + (price * tax) / 100).toFixed(2)} złotych`)


// Często wykorzystujemy w wyrażeniu operator trójargumentowy

// console.log(`Dzisiejsza cena netto jest ${price >= 80 ? "wysoka" : "niska"}.`)


// Inkrementacaj/dekrementacja

let itemName = "lcd"
let items = 20;
console.log(`Własnie sprzedałem jeden ${itemName}. Na stanie jest jeszcze ${--items}`)

