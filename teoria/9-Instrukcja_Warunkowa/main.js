/* Bardzo często potrzebujemy uruchomić różny kod (różny blok kodu) w zaleznośic od stanu (sytuacji, spełnienia warunku) w programie. */


// INSTRUKCJA WARUNKOWA IF

// Przykład1
const condition = 2;

if (condition) {
 // alert("działa!");
 console.log("widzisz mnie ponieważ warunek jest prawdziwy i wykonuje zawartość bloku instrukcji warunkowej");
}


// Kod w bloku jest uruchomiony TYLKO WTEDY gdy warunek jest prawdziwy. Jeśli nie jest prawdziwy, to blok jest pomijany ({} - pomijany)

// Przykład 2
const userName = "Dobromir";

if (userName) {
 console.log("Witaj " + userName + "!")
}
// to samo, co wyżej z innaczej skonstruowanym warunkiem jednak oznaczajacym to samo.

if (userName !== "") {
 console.log("Witaj " + userName)
}

// INSTRUKCJA WARUNKOWA ELSE (IF...ELSE)
const hasTicket = true;
const moreThen15Years = true;
const bossFamily = false;

if (hasTicket && moreThen15Years || bossFamily) {
 console.log("wchodzisz");
} else {
 console.log("przykro mi");
}

// else wykonuje się tylko w wypadku gdy warunek if nie jest prawdą. Jeśli jest prawdą to else jest pomijany.

// KLAUZULA ELSE IF
const age = "20";

// Tak nie powinniśmy - bo to są osobne instrukcje sprawdzane za każdym razem oddzielnie.

if (age <= 9) {
 console.log("jesteś jeszcze dzieckiem")
}
if (age > 9 && age <= 18) {
 console.log("jesteś młodzieżą")
}
if (age > 18 && age <= 70) {
 console.log("cały świat przed Tobą")
}
if (age > 70) {
 console.log("Jesteś dojrzałem człowiekiem i doceniasz zalety tego wieku")
}

// Trudniej pomylić warunek i zdecydowanie lepiej zoptymalizowane

if (age <= 9 && typeof age === "number") {
 console.log("jesteś jeszcze dzieckiem")
} else if (age <= 18 && typeof age === "number") {
 console.log("jesteś młodzieżą")
} else if (age <= 70 && typeof age === "number") {
 console.log("cały świat przed Tobą")
} else {
 console.log("Jesteś dojrzałem człowiekiem i doceniasz zalety tego wieku lub nie mogę ustalić twoejgo wieku")
}


// ZAGNIEŻDZENIE IF
const guestName = "Bolesław";
const guestAge = 30;

if (guestName != "") {
 if (guestAge > 18) {
  console.log("Witaj w klubie " + guestName);
 }
 else {
  console.log("No niestety " + guestName + " nie wjedziesz")
 }
}
else {
 console.log("nie wiem jak masz na imię, więc nie wejdziesz");
}

// INSTRUKCJA WARUNKOWA SWITCH
//Czasami bardziej przejrzysta niż instrukcja if bedzie instrukcja switch, która tworzy drzewko z możliwymi opcjami. 

const dayOfTheWeek = "środa"

// jako argument podajemy wartość, którą będziemy porównywać.
switch (dayOfTheWeek) {
 //po case podajemy wartość do porównania z argumentem instrukcji
 case "poniedziałek":
  console.log("dziś poniedziałek");
  break;
 case "wtorek":
  console.log("dziś wtorek");
  break;
 case "środa":
  console.log("dziś środa");
  break;
 default:
  console.log("nie ma pojęcia co to za dzień");
  break;
}

// OPERATOR WARUNKOWY / OPERATOR POTRÓJNY (TRÓJKOWY)

// Prostą instrukcję warunkąwą if...else możemy napisać za pomocą operatora.

/* 
a ? b : c;
warunek ? wykonaj mnie jesli warunek true : wykonaj mnie jeśli warunek false
*/
const score = 100
20 == "20" && score ? console.log("wykonuje się, bo prawda") : console.log("wykonuje się bo warunek nie jest prawdziwy");

score > 120 ? console.log("prawda") : console.log("fałsz");

// Z instrukcji warunkowej nie można przechwycić wartości i przypisać jej do zmiennej. A w pewnych sytuacjach chcemy to zrobić.
// Operator warunkowy zwraca wartość (jako to operatory) i jest używany często gdy do zmiennej chcemy przypisać wynik działania

// Przykład zwracania wartości - instrukcji warunkowej if tak nie użyjemy
// console.log(1 > 10 ? 1 : 0)

let gameResult = 0;
let killedMonsters = 9
let score = killedMonsters > 10 ? 1 : 0;


const playerName = "Mściowej";
console.log(`Witaj ${playerName ? playerName : "nieznajomy wojowniku"}`)