/* Dodawanie do pliku HTML */
// <script src="path/to/file.js"></script> 
// najlepiej tuż przed znacznikiem zamykającym body (</body>), bo na tym etapie cała strona jest już stworozna (jej reprezentacja DOM - o czym sobie oczywiście jeszcze powiemy)

// wysietlenie zawartości podanej w nawiasie w konsoli (przeglądarki - jeśli kod uruchamiamy w przeglądarce)
console.log("ok");

/* INSTRUKCJA - najmniejsza składowa programu */
// Przykłady prostych instrukcji (będziemy je omawiać w dalszej części kursu, póki co przykłady)
2 + 2; //operator dodawania
console.log(2 + 2); //wyświetlenie w konsoli wyniku wyrażenia
console.log("2" + "2");
let result = 2 + 2; //instrukcja dekaracji zmiennej i inicjalizacji jej wartości, która będzie wynikiem wyrażanie 2 + 2 (czyli 4)
"tekst".toUpperCase(); //metoda wykonana na wartości
const users = []; //inicjalizacja zmienne (zmiennej stałej) i stworzenie tablicy (tak własnie tworzy się pustą tablicę: []).


/* 
- instrukcja może coś zwracać albo nie musi. Widać to dobrze w konsoli.
- Instrukcja to zadanie, pojedyńczy element programu. Instrukcja ma sens o ile wpływa na program.
- średnik kończy instrukcję, jeśli nie napiszemy go, to i tak zosatnie dodany w procesie wykonywania kodu.
- mimo wszytsko lepiej dodawać średnik, bo jego brak może powodować różne problemy np. problem z formatowanie kodu w róznych edytorach (przy róznych dodatkach).
- instrukcje są wykonywane po kolei z góry na dół. Tak jest czytany program przez interpreter.
*/

/* NOTACJA WIELBŁĄDZIA (CAMEL CASE)*/
let myName = "Tomasz"; //drugi i kolejne wyrazy w nazwie są pisane z wielkiej litery.
"cos".toUpperCase(); //przykład notacji wielbłądziej w metodzie wbudowanej
const variableName = "tutaj zawartość";


/* KOMENTARZE */
/*
- ignorowane przez interpreter
- pisz, bo za miesiąc nie będziesz pamietał co robiłeś i dlaczego :)
- samokomentujący się kod? Tak, zanim użyjesz komentarza używaj nazw, które będą zrozumiałe i będą określały to co zawiera (robi) zmienna.
*/
// Przykład nazw samokomentujących, gdzie komentarz jest zbędny
const userID = 1023; //identyfkator użytkownika
function upadeteScore() { } //jeśli funkcja ma aktualziować wynik
let lastLogin = "11.09.2018" //data ostatniego logowania
function addUserToCourse() { } //funkcja, która dodaje użytkownika do kurs

// Przykład nazw, które są nieodpowiednie, bo zbyt ogólne
const item = "Tomasz"
function add() { }

/*
- komentujemy kod w celach testowych (wyłączyć/włączyć)
*/

//Komentarz jednowierszowy
// ctrl /  

/*
komentarz wielowierszowy 
alt shift a
*/

