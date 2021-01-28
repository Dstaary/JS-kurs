// typ boolean, wartośc logiczna, typ logiczny
// tylko dwie wartości tego typu: true i false

// funkcja Boolean - zmienia wartość innego typu na wartość typu boolean
Boolean(0) //false
Boolean(2 >= 2) //true
Boolean("coś") //true
Boolean({}) //true
Boolean(["ktoś", 100, false]) //true
Boolean("") //false

// Wartości, które są konwertowane na false:
""; //pusty string, oczywiście też '' i ``
0; //też -0
NaN;
null;
undefined;

// OPERATORY ZWRACAJĄCE TYP LOGICZNY

//większy/mniejszy porównanie
2 > 4; // false
6 >= 5; // true
2 == 2; //true
"1" == true; //konwersja na number a potem porównanie
"1" === true; //false
"1" === 1; //false

// Negacja logiczna - zamień na typ logiczny (jesli nie jest) i odwróc
!false; //true
!0; //true
!200; //false
!true; //false

// podwójna negacja
!!true
!!0
!!""

const userName1 = "Ścibor";
const userName2 = "";
!!userName1
!!userName2

// LOGICZNE "I" (iloczyn logiczny) &&
//oba elementy prawdziwe
let userAge = 22;
let userMoney = 10.2;
let beerPrice = 11;
// warunek
(userAge >= 18 && userMoney > beerPrice)

// console.log(userAge > 18 && userMoney > beerPrice);

//Jak to działa

1 && 0;
/*
1- Sprawdza lewą stronę, dokonując konwersji wartości (wyrażenia) na typ boolean. Jeśli jest true to sprawdza drugą stronę, jeśli nie to zwraca tę wartość. np. "" && 1 - kończy działanie po pierwszym i zwraca "" (psty string) 

2 - Po przejściu do prawej strony sprawdza ją i zwraca ją.

Całe wyrażenie możemy potraktować jako prawdziwe tylko jeśli obie strony są prawdziwe (są true lub po konwersji na boolean będą true)
false && false  //false
true && false // false
false && true // false
true && true // true
*/

// LOGICZNE "LUB" (suma logiczna, alternatywa) ||

const userConnections = "syn głównej księgowej";
const userExperience = 0;

// Tylko jeden z operandów musi być true (czy konwertowany na true)
Boolean(userConnections || userExperience)

1 || 0;
/*
1- Sprawdza lewą stronę, dokonując konwersji wartości (wyrażenia) na typ boolean. Jeśli jest true to NIE SPRAWDZA już drugiej strony i zwraca wartość, którą sprawdzał (tak byłoby w przykładzie 1 || 0). Warunek na tym etapie jest już rpawdziwy. Jeśli jest false, to przechodzi do sprawdzenie argumentu z prawej strony np. "" || 0;

2 - Po przejściu do prawej strony sprawdza ją (konwertuje na typ boolean jeśli nie jest) i zwraca ją niezależnie jaka będzie. Całe wyrażeniej jest prawdziwe jeśli choć jedna strona jest true (mogą być też obie)

false || false  //false
true || false // true
false || true // true
true || true // true
*/


// Konwersja w drugą stronę - z boolean na inny typ (number i string)
Number(true); //1
Number(false); //0
String(true); // "true"
String(false); // false