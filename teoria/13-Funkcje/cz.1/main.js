/* FUNKCJE */

// Co o funkcjach trzeba wiedzieć na początek:

// -- są obiektami (jak tablica, któą już poznaliśmy)

// -- można je wywołać (jedyny obiekt, który można wywołać) -- nazwaFunkcji()

// -- o funkcjach należy myśleć jako o małych programach które coś robią z danymi lub coś zwracają (lub robią i to i to). Funkcja może modyfikować program (nazywamy to efektem ubocznym) lub go nie modifikować a jedynie przetwarzać elementy zwracajać nową wartość (służy do tego słowo kluczowe return).

// -- funkcje są wielokrotnego użytku (funkcja może być wywołana/uruchomiona wielokrotnie) 

// -- można ich używać tam gdzie innych obiektów (są first-class objects, czyli są pełnoprawnymi obiektami) np. przypisać do zmiennych, jako argumentu w innej funkcji czy jako wartość zwracana z funkcji.


// JAK STWORZYĆ FUNKCJE


// 1. WYRAŻENIE FUNKCYJNE (funkcja bez nazwy - do funkcji odwołujemy się za pomocą zmiennej). Po angielsku Function Expression.

// Szkielet funkcji 
// const nazwaFunkcjiCoRobi = function() {} ;

const showMessage = function() {
 console.log("wywołałem funkcję showMessage")
}

// showMessage()

// taka funkcja bez nazwy określana jest funkcją anonimową.



// 2. DEKLARACJA FUNKCJI. Najpierw słowo kluczowe function, potem nazwa. Po angielsku Function Declaration

// Szkielet funkcji 
// function nazwaFunkcjiCoRobi(){} 

function addNumbers(x, y) {
 return x + y;
}

addNumbers(2, 4);

// Plusem (minusem, zależy jak patrzeć) jest to, że taka funkcja (dzięki hoistingowi) jest możliwa do uruchomienia nawet przed deklaracją.

// showCourseName();

function showCourseName() {
 console.log("Programowanie w JS");
}


// 3. KONSTRUKTOR (Function Constructor)

// Szkielet funkcji 
// const nazwaFunkcjiCoRobi = new Function(); 

const textAlert = new Function("text", "alert(text);");

// textAlert('działa!')

// ostatni argument to ciało funkcji. 


// W większych programach rekomenduje używanie pierwszej opcji, a więc wyrażenia funkcyjnego (bezpieczne const). W małych opcja 1 i 2 są najlepsze. O opcji 3 wiec tylko, że istnieje. 


// Tak było do niedawna. Mamy 4 sposób

// 4. FUNKCJA STRZAŁKOWA, FUNKCJA ZE STRZAŁKĄ (ARROW FUNCTION)

// Szkielet funkcji 

// const nazwaFunkcjiCoRobi = () => {};

// Funkcja strzałkowa ma inną składnię i trochę inne zachowania, ale jest bardzo ciekawym rozwiązanie. Omówimy ją trochę bardziej przy OOP i przy okazji projektów.
// Funkcja strzałkowa jest zawsze anonimowa
// Główna zaleta na teraz - krótsza
// Szczególnie użyteczna dla prostych zadań

const showMeTextMyArrowFunction = (text) => { console.log(text) };

// showMeTextMyArrowFunction("hejjjj!");


/* ---------------------------------------- */

// PRZYPISANIE FUNKCJI DO INNEJ ZMIENNEJ
// Funkcje są obiektami a więc działają jak inne obiekty jeśli chodzi o przypisanie (czyli przypisujemy referencje, obiekt jest ciągle jeden).

const showNewCourse = showCourseName;
// showCourseName();
// to jest dokładnie ta sama funkcja (nie jej kopia)

/* ---------------------------------------- */

// WYWOŁYWANIE FUNKCJI (invoking)
// nazwa() - tak wywołujemy funkcje
// nazwa(argument1, argument2) - wywoł
// Stworzona funkcja może być wywołana wielokrotnie (może też nie być wywołana nigdy)
// innych wartości czy obiektów niż funkcja wywołać się nie da.

/* ---------------------------------------- */

// ZWRACANIE WARTOŚCI Z FUNKCJI
// funkcja może coś robić i może coś zwracać.
// Domyślnie każda funkcja po wykonaniu zadania zwraca undefined
// Możemy to zmienić (i często to robimy) używajac instrukcji return


// Przykład 1 - Funkcja która wpływa na program (efekt uboczny) nic nie zwraca (formalnie zwraca undefined)

const divideBy2 = function(number) {
 console.log(number / 2);
}

// const result1 = divideBy2(10);

let number = 0
const add = function() {
 number++;
 console.log(number);
}

// Przykład 2 - Funkcja, która tylko przetwarza dane (bez efektu ubocznego) i zwraca wartość
const divideBy3 = function(number) {
 return number / 3; //słowo kluczowe return
}

const result2 = divideBy3(20);

// Przykład 3 - Funkcja z efektem ubocznym i zwracająca wartość

const divideBy5 = function(number) {
 const result = number / 5
 console.log(result);
 return result;
}

const result3 = divideBy5(26);

// PARAMETRY I ARGUMENTY

// Parametr element składowy funkcji na etapie jej tworzenia. Nie trzeba ich umieszczać (funkcja nie musi mieć parametrów)

// Bez paramtru
const showMyName = function() {
 console.log("Bartek");
}

// Z parametrem
// Parametr - pojecie używane dla określenie nazwy użytej przy tworzeniu funkcji
const showUserName = function(userName) {
 console.log("witaj " + userName);
}

// Argument - pojęcie użyte przy wywołaniu funkcji.
showUserName("Franciszek");

// Przykładowo w funkcji powyżej tworząć funkcję ustawiamy jeden parametr. Przy wywołaniu w miejsce parametru podajemy argument, który pełni rolę wartości dla parametru.

// Jeśli nie podamy argumenty, to w jego miejsce zostanie wstawione undefined

// showUserName();

// Jeśli podamy więcej argumentów niż paramtrów, to nie spowoduje to błędu
showUserName("Piotr", 200);

showUserName.length; //mówi ile argumentów oczekuje funkcja (czyli ile parametrów posiadała funkcja w momencie tworzenia)
