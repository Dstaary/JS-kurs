// Typy danych - wprowadzenie
// Mamy 7 typów wbudowanych (6 typów prostych i jeden typ referencyjny)

// Typy proste
// string, number, boolean, undefined, null, symbol

// Typy referencyjne (obiekty)
// Obiekty: obiekt, funkcja, tablica ...

// Uwaga typy string, number, boolean i obiekty będą omówione dodatkowo w innych filamch 

// TYP CZYLI CO? Zbiór cech i zachowań przypisany do wartości zaliczanej do danego typu. Z punktu widzenia języka JS wartość "100" i 100 czy "true" i true, to zupełnie coś innego i ma inne własciwości i metody (w skrócie inaczej się zachowuje i inne rzeczy umożliwia)

// typeof - operator, który zwraca informacje o typie
2 + 2; //zwróci typ strung z nazwą typu np. "string" czy "number" jak w przykładzie

// String - łańcuch znaków
typeof "tekst";
typeof '222.222';
typeof `grawis`;
let userName = "Tymoteusz"
typeof userName;

// Number - liczba (bez podziału na integer(liczba całkowita), float, decimal - czyli bez podziału na liczbę całkowitą czy ułamek dziesiętny jak to jest w wielu innych językach programoaniu. )
typeof 222.222;
typeof 1000;
typeof 3.2e10;
typeof NaN;
typeof (2.2 * "a") //konwersja niejawna "a" na liczbę daje NaN, a 2.2 * NaN te też NaN (Not a Number) - wyjasnię to szczegółowo (NaN) w materaileo typie number

// Boolean - wartość logiczna
typeof true;
typeof false;
typeof (2 == 3);

// Undefined - niezdefiniowany (jedna wartość)
//najczęściej tworzone przez interpreter przy wykonywaniu kodu 
typeof undefined;
let dateFirstLogin; //deklaracja zmiennej bez inicjalziacji wartości powoduje przypisanie undefined
typeof dateFirstLogin;

// Null - nie posiada (jedna wartość)
// Najczęściej przez programistę nadawana
let userSecondName = null;
typeof null; // błędnie zwraca jako "object", ale to nie jest obiekt

// Symbol (nowy typ w ES6)
//do stworzenie wymaga wywołania funkcji. Nie będzie omawiany w kursie.
typeof Symbol();

// Typ referencyjny - Obiekty
typeof {};
typeof [];
typeof function () { };


// Przypisanie wartości i przypisanie referencji do obiektu
let primitiveType1 = 20;
let primitiveType2 = primitiveType1; //Tworzona jest kopia, wartość identyczna, ale nie ta sama (jest to idealna kopi wartość, ale stanowiaca już osobną wartość)

//W wyniku tych dwóch instrukcji powyżej powstają dwie zmienne które mają warrości 20. Są to dwie wartości 20 (a nie jedna ta sama przypisana do obu zmiennych)

primitiveType1 = 30;
console.log(primitiveType2);
// Ponieważ wartość została skopiowana i obie zmienne mają rózne wartości, to przypsiania nowej wartośic do zmiennej primitiveType1 nie wpływa na zmienną primitiveType2. Nie ma miezy nimi żadnego połączenia (wcześniej zostałą tylko skopiowana wartość - tylko tyle)


const referenceValue1 = [1, 2, 3];
const referenceValue2 = referenceValue1;
//Tylko jeden obiekt istnieje. Nie ma tu kopii obiektu jak przy typach prostych. Tu kopiujemy tylko referencje (dloatego typ referencyjny) do miesjca w pamięci (adres). Obie zmienne nie przechowują tego obiektu tylko jakby link do niego.

// Praca z tym samym obiektem na obu zmiennych. Nie ma znaczenie na której coś zmieniamy, bo obie prowadzą do tego samego. Nie tworzymy tu nowego obiektu tylko dokonujemy zmian w jednym już utworzonym (przy deklaracji referenceValue1) 
referenceValue1[3] = 4;
referenceValue2[4] = 10;

// console.log(referenceValue2);
//Obiekt nie została skopiowany, a został przypisany jedynie link do miejsca w pamięci, w którym się znajduje. 