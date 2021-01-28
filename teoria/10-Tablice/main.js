// TABLICA - ARRAY

// Co trzeba wiedzieć o tablicy
// -- jest to obiekt wbudowany (ma więc właściwości i metody) 
// -- posiada uporządkową (kolejność jest ważna) zbiór wartości
// -- każda przechowywana wartość w tablicy ma swój indeks. Pierwsza wartość ma indeks 0



// TWORZENIE TABLICY

// Literał tablicy z podaniem zawartości

const nameList = ["Ludomir", "Żyrosław", "Gniewomir", "Myślimir"];

// Literał pustej tablicy a potem uzupełnienie za pomocą odwołania się do indeksu
const cityList = [];
cityList[0] = 'Konin';
cityList[1] = 'Zabrze';

// Konstruktor - pusta tablica
const items = [];
const gameItems = new Array();
// Konstruktor z uzupełnianonymi elementami
const colors = new Array("red", "blue");
colors[2] = "green";


// W każdym z tych sposobów powstaje instacja Tablicy o tych samych właściwościach i metodach (co widzimy po konstruktorze).
// console.log(typeof nameList);
// console.log(nameList);
// console.log(typeof colors);
// console.log(colors);


// Pamietajmy, że możemy edytować tablicę nawet jeśli jest ona przypisana do zmiennej const. Najczęściej więc wybierzemy dla tablicy zmienną const. Nie możemy jednak nic innego przypisać do tej zmiennej
const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";
// myArrayConst = "coś innego";
// myArrayLet = "coś innego";



// CO MOŻE ZAWIERAĆ TABLICA
// Każdą inną wartośc

const differentValues = ["string", 20, {}, ["jeden", "dwa"], null]


// ODWOŁANIE DO ELEMENTÓW TABLICY
// używamy indeksu. Indeks od zera i w nawiasach kwadratowych
// console.log(nameList[1]);
const popularName = nameList[2];
// nameList[4] = "Witomysł";
// nameList[2] === "Gniewomir";


// TWORZENIE NOWYCH ELEMENTÓW I MODYFIKOWANIE ISTNIEJĄCYCH W TABLICY
// Za pomocą indeksu, przypisujemy wartość (jeśli dany indeks isteniej to zamieniamy)
// nameList[5] = "Nowe imię";



// USUWANIE ELEMENTÓW Z TABLICY
// delete zastępuję wartość aktualną wartością undefined. Nie zmienia więc wielkości tablioct
delete nameList[2];
typeof nameList[2];  //"undefined"
// Są metody, które mogą usunąć element i usunać też indeks (a więc skrócić tablicę)



// DŁUGOŚĆ TABLICY - WŁAŚCIWOŚĆ LENGTH
const cities = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
cities.length;

const users = ["Adam", "Ania"];
users.length;


// WYKORZYSTANIE DŁUGOŚCI TABLICY
// szybkie tworzenie długiej tablicy
const longArray = [];
longArray.length = 100;

// odwołanie się do ostatniego elementy
cities[cities.length - 1];

// dodanie kolejnego elementu (jako ostatniego)
cities[cities.length] = "Tokio";
cities[cities.length] = "Pekin";

// powiększenie, zmniejszenie, wyzerowanie tablicy
// users.length = 20;
cities.length += 2;
// cities.length = cities.length + 2;
// cities.length = 3;
users.length = 0; //i tablica pusta


// SPRAWDZENIE CZY TO JEST TABLICA

typeof users; //'object'

cities instanceof String;
cities instanceof Array;
cities instanceof Object;
cities instanceof Function;

Array.isArray(cities);


// DEREFERENCJA OBIEKTU (NIE TYLKO TABLICY)

let letters = ["a", "d"]
let characters = letters; //ta sama tablica, obie zmienne mają tylko referencje (link do tablicy)

// Tablica (i inny obiekt) zostanie usunięta jeśli nie ma do niej referencji;
// letters = null;
// characters = null;
letters = characters = null;


// CIEKAWOSTKA - stworzenie wielu zmiennych w oparciu o zawartość tablicy (i obiektu)
// Destructuring Arrays - Przypisanie destrukturyzujące 
// Wykorzystujemy tablicę do tworzenia nowych zmiennych.

const [nameUser, idUser, ageUser] = ["Sławoj", 210, 54];

const game = [120.12, 87, "dobry wujek"];

let [time, points, name] = game;