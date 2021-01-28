//  za pomocą literału, po prostu liczba utworzy wartość typu prostego

const integerExample = 100;
const decimalExample = 100.212;
typeof integerExample; //number w JS, w innych językach często integer dla liczb całkowitych 
typeof decimalExample; //number w JS, w innych językach często float czy decimal

// JS akceptuje różne systemy liczbowe (poza dziesętnym)
// Reprezentacja szesznastkowa (prefiks 0x)
const hexNumber = 0xff; //znamy z css czyli ff to 255 w systemie dziesiętnym

// Mamy system ósemkowy czy binarny. System binarny to prefiks 0b
// console.log(0b011101)

// notacja naukowa (e)
console.log(5e2)
//5 i 10 do potęgi drugiej

// Przykładowe metody, które możemy wykonać na liczbie
const newNumber = 123.45;

// METODA .toFixed(), czyli zaokrągelnie
// zaokrąglenie do liczby całkowitej (od 5 zaokrągla wzwyż, poniżej 5 w dół)
newNumber.toFixed();
// zaokrąglenie do jednego miejsca po przecinku
newNumber.toFixed(1);
// problem jeśli pracuejmy bezpośrednio na liczbie
// 123.toFixed(0);
123..toFixed(0);

// Ważne: po zaokrągleniu metoda toFixed zwraca wartość, która jest stringiem

// METODA .toString() - jawna zamiana typów z number na string z możliwością zamiany systemu liczbowego
newNumber.toString(); //na system dziesiętny
newNumber.toString(2); // na system dwójkowy (binarny)
// 255.toString(16); // żle 
// 255..toString(16);  //dobrze
// na system szesnastkowy

//METOD .toExponential() - jawna zamiana na notację naukową (też jako string)
newNumber.toExponential()
//przy okazji pierwszeństwo działań warto zobaczyć
// typeof newNumber.toExponential()
// newNumber.toExponential() == newNumber.toExponential()

// FUNKCJE, które pozwalają zrobić rózne zadania z liczbami

// sprawdzenie czy jest liczbą całkowitą
Number.isInteger(decimalExample) //false, bo 100.212 (wcześniej zadeklarowaliśmy i zainiclalizowaliśmy tą zmieną)
Number.isInteger(100.1) //false
Number.isInteger(integerExample) //true
Number.isInteger(28001) //true

const integerExample2 = 100.00
Number.isInteger(integerExample2) //true, nawet jak jest ułamek dzieisętny ale tylko w zapisie

// Sprawdzenie czy dana liczba jest skończona (prawidłowa)
Number.isFinite(2); //true
Number.isFinite(NaN); //false
Number.isFinite(Infinity); //false
Number.isFinite(1e400); //false, ponieważ maksymalna liczba to 1e308, najmniejsza liczba -1e308
Number.isFinite(3e300); //true

//NaN - wartość typu number, ale o nie rozpoznanej wartości (Not a Number). Liczba, która nie jest liczbą. np gdy number mnożymy przez string
typeof NaN; //number

//Infinity - gdy przekrozymy maksymalne i minimalne wartości i gdy dzielimy przez 0
typeof Infinity; //number

// Tworzenie obiektu instancji Number
const numberObj = new Number() //bez podania wartości da 0
const numberObj2 = new Number("doś") //podanie stringa da NaN, true da 1, a false 0
const umberObj3 = new Number("222.121") //da liczbę nawet jak podajemy argument jako string
const umberObj4 = new Number(222.121) //wynik taki sam co wyżej 

// Działania arytmetyczne - przykłady
// Reszta z działania jest zwraca - modulu
console.log(20 % 2) //0
// console.log(20 % 3) //2
// console.log(20 % 21) //20

// Potęgowanie
2 ** 8
2 * 8
2 / 8
//Operatory dwuargumentowe (argumenty to operandy)


//Konwersja niejawna/automatyczna (coercion) liczby w stringa lub stringa w liczbę (przy różnych operatorach)
// konkatenacja
20 + "20" //"2020"
20 * "20" //400

// Konwersja jawna - inny typ w number
Number('210'); //210
Number(true); //1
Number(""); //0
Number("cos"); //NaN - jeśli czegoś nie może zamienić w liczbę

//Wykorzystanie konwersji niejawnej
// trick - przemnożyć przez jeden bo mnożenie zamienia stringa na number
"20" * 1
 // Sztuczka działająca (hack)
 + "20"
// Natomiast liczbę na stringa możemy zamienić dodając pusty strong
20 + ""

//Gdy chcemy typ number zamienić na typ string (toString było wyżej, ale przypominam) 
200..toString();
String(200);
// oczywiście najczęsciej konwertujemy odwołujace się do zmiennej, a nie bezpośrednio liczbę

// Również parseInt() pozwala nam zmienić stringa w number. Najpierw podajemy string (w którym jest liczba) a potem możemy powiedzieć w jakim jest systemie. Wynikiem działania funkcji będzie number w zapisie dziesiętnym
parseInt('20', 10) //20
parseInt('100', 2) //4
parseInt('0xff', 16) //255
// Druga wartość jest niepotrzebna jeśli chcemy uzyskać wartość dziesiętną
parseInt('100') //100
parseInt('200') //200
parseInt('0xff') //255
parseInt("222abc") //222 bo usunie litery. Działa jeśli liczba występuje jako pierwsza
parseInt("22.55") //usunie to co po kropce 22
parseFloat("2.22") // nie usuwa.

parseInt('200') + parseInt("3"); //najpierw wykonają się metody a potem (na tym etapie będą już typu number) zostaną dodane 


//Wykorzystanie wbudowanego obiektu Math. Ma wiele metod, które możemy wykorzystać w naszym programie
Math.round(200.55); //zaokrąglenie w górę
Math.round(200.45); //zaokrąglenie w dół 
Math.floor(200.55); //pozbywamy się ułamka (po prostu jest usuwany, nie ma tu żadnego zaokrąglenia)
Math.random(); //zwraca losową liczbę z przedziału od 0 do 1 (bez 1) czyli wynik >= 0 i <1 np. 0.3298483234

// Przypomnienie inkrementacji i przypisania

let activeUsers = 0;
//inkrementacja
activeUsers++;
// przypisanie (dodanie) wartości
activeUsers += 7;
// activeUsers = activeUsers + 7;

// Ciekawostki
undefined + NaN //NaN
Infinity + undefined //NaN
Infinity - Infinity //NaN
Infinity - 100 //Infinity
0 + null // 0
1 / Infinity //0