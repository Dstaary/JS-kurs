
/* CO TO JEST ZMIENNA */
// Zmienne to sposób na zapisanie danych w pamięci, tak by móc te dane wykorzystać w programie.


/* TRZY ATRYBUTY ZMIENNEJ W JS */
// 1. Nazwa
// 2. Miejsce w pamięci (prowadzi do niego identyfikator, którym jest nazwa)
// 3. Wartość
// (4.) Możemy jeszcze dodać jeden atrybut, którym jest czas życia. Czas życia zmiennej jest zależny od miejsca gdzie stworzona jest dana zmienna (globalna i lokalna) - o tym porozmawiamy sobie przy materiale o scope (zakres)


/* CZY ZMIENNA MA TYP? Cze zmienna jest typu string, number, itd?*/
// W wielu językach tak, ale nie w JavaScript. W JavaScript to wartość ma typ a nie zmienna. Wraz z deklaracją nie podajemy typu zmiennej. Gdyby JS upodobnić do innych popularnych języków programowania to mogłoby to wyglądać tak:
// let float idUser = 76.2;
// gdzie float byłby informacją, że zmienna przechowuje wartość zmiennoprzecinkową.
// Ale tak nie jest, a wygląda tak, bez podawania wartości
let idUser = 76;
// Przy czym TYPY W JSISTNIEJĄ, ale są nadawane dynamicznie, czyli przez interpreter podczas wykonywania programu (mówimy o typowaniu dynamicznym, w przeciwieństwie do typowania statycznego, czyli nadawania typu w kodzie jak w tym przykładzie z float). Pamiętajmy jednak, że to nie tworzona zmienna ma typ np.number a właśnie wartość. Zmienna tylko przechowuje wartośc.

// Operator typeof zwraca nam informacje o typie wartości przechowywanej w zmiennej

/* NAZWA ZMIENNEJ */
// - po angielsku (używaj translatora jeśli znasz słabo)
// - niech oznacza to czym jest / do czego jest / czym się zajmuje
// - notacja wielbłądzia (rekomendowane) przykład: notacjaWielbladzie
// - słowa zarezerowane - ich nie używamy jako nazwy zmiennej (lista poniżej)
// - brak spacji, brak myślnika, cyfra nie może być na początku (moze być dalej)
// - można z dużej litery zacząć i używać ich w naziwe (wielkość liter znaczenie), można używać podkreślenia (_) i znaku $

/* DEKLARACJA ZMIENNEJ I PRZYPISANIE WARTOŚCI (DWIE INSTRUKCJE) */

// Deklaracja - sama deklaracja oznacza stworzenie zmiennej, ale też przypisania do zmiennej wartości undefined
let firstLetterUserName;
// Przypisania wartości do zmiennej może nastąpić w innej instrukcji. Przypisać wartość tylko do zmiennej która istnieje 
firstLetterUserName = "J";
// Najczęściej jednocześnie deklarujemy i przypisujemy (inicjalizujemy) wartość
let userSurname = "Smith";
// dekracja i inicjalizacja podczas, której tworzymy funkcję ( o funkcjach będziemy dopiero rozmawiać - tu jako przykład)
let showUserName = function () { console.log(userSurname) };

// DEKLAROWANIE WIELU ZMIENNYCH
let name, age, address; //w jednej linii tylko przed pierwszą nazwą słowo kluczowe
let position = [200, 100], score = null, time = 20.2, ipAddress; //możemy od razu inicializować (przypisywać) wartość zmiennej
const firstUser = "Ania", secondUser = "Tomasz";

/* ZMIENNE STAŁE I ZMIENNE ZMIENNE */

// const - zmienna stała (stała) od ES6
// let - zmienna od ES6
// var - zmienna przed ES6 (ciągle można używać)

// Tworząć zmienną wybierz const, chyba że zawartosć (wartość przypisana), będzie w trakcie działania programu zamienniona inną wartością.

// Różnice
//  - "let" i "const" można zadeklarować tylko raz, var (co jest głupie) pozawala deklarować wielokrotnie
//  - do "const" nie mozna przypisać nowej wartości (można modyfikować obiekty, które są przypisane)

let example1 = 200;
example1 = example1 + 1; // przypisujemy nową wartość zwiększoną o 1
example1++; //przypisujemy nową wartość zwiekszoną o 1

const example2 = 200;
// const już na to nie pozwoli (będzie błąd), bo nie można nowej wartości przypisać (pamietajmy, że taka zmiana jest tworzeniem nowej wartości)
// example2 = example2 + 1;
// example2++;

// Pamietajmy też, że taki zapis jak ponizej to kopiowana wartość istniejącej zmiennej do nowej zmiennej. Tworzy się nowa wartość, to nie jest ta sama wartość, mimo że jest identyczna. 
// let example3 = example2;

// CONST - przykładz z obiektem (jeszcze nie omawialiśmy obiektów)
const arrayExample = ["pierwszy"]; // utworzenie tablicy z jednym elementem w środku

// Przypisanie nowego obiektu (poniżej) nie jest możliwe w przypadku const. Wyskoczy błąd
// arrayExample = [1, 2];


// Modyfikacje w obiekcie juz przypisanym - jak najbardziej są możliwe w const
arrayExample[1] = "drugi"; //dodajey drugi element w tablicy. Ale to ciągle ta sama tablicaq
// console.log(arrayExample);

// Bardzo ważny jest zakres (scope) zmiennych, ale o tym sobie jeszcze powiemy.

// Obiekt globalny (window) z var tworzona jest nowa właściwość (głupie). Z let i const nie jest tworzoba
var globalProperty1 = "za pomocą var";
//powyżej utworzy też window.globalProperty1. Poniżej nie
let globalProperty2 = "za pomocą let";
const globalProperty3 = "za pomocą const";
// console.log(window.globalProperty1);

// Hoistowana var, let i const
// hoisting to przenoszenie przez interpreter na góre kodu (przed jego wykonaniem) deklaracji zmiennych ale nie inicjalizacji wartości. Hoisting dotyczy zmiennych deklarowanych za pomocą var, ale nie let i const (to dobrze, bo hositing może wprowadzać w błąd).
//Pamiętajmy, że wynoszona na górę jest tylko deklaracja. A zadeklarowana zmienna (bez przypisania) ma wartość undefined

// console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);
// var varVariable = 1;
// let letVariable = 1;
// const constVariable = 1;

/*  JAKICH ZMIENNYCH UŻYWAĆ */
// Po pierwsze const, po drugie, jeśli zawartość zmiennej ma ulegać zmianie to let.

// Jeśli program nie będzie zmieniać imienia użytkownika
const userName = "Adam";
// Jeśli program będzie zmieniał wynik
let points = 200;
// Zmiennej var możemy używać, ale bardzo rzadko ma to sens (w małych projektach na stronkach).
var userLastLoginDate = "15.10.2018";

// LISTA SŁÓW ZAREZERWOWANYCH (nie można używać jako nazwy zmiennych)
/* 
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
 */




