// Literał tekstowy - sposób tworzenie wartości typu prostego


// STRING - kolekcja znaków znajdujących się wewnatrz cudzysłowów (pojedyńczych (apostrof) (''), podwójnych("") i grawisa(``)) Ps. grawis jest w tym samym klawiszu co tylda (~) czyli zazwyczaj pod "Esc";


// String na polski: łańcuch znaków, ciąg znaków, zbiór znaków, lub po prostu "łancuch"


const userName = "Tomasz Niewierny";
const userName2 = 'Mieszko Pierwszy'
const userName3 = `Jaś Fasola` //super string od ES6 - poświęcimy mu osobny materiał


// Możliwość pobrania konkretnego znaku wg indeksu (pierwsza litera ma indeks 0)
const secondLetter = userName[1]; //jak z tablicy - poznasz przy tablicy


// tworzenie instancji (obiektu) String
const objUserName = new String(userName); // obiekt
const primitiveUserName = userName; //typ prsty


// typ prosty
const emptyString = "";


//obiekt, będący instancją String
const emptyObjectString = new Object("");
const emptyObjectString2 = new String();


const stringExample = new String("dasdas");
const stringExample2 = new String(200.2); //"200.2"


// METODY dla typu string
userName.toUpperCase();
userName.toLowerCase();
// console.log(userName.toUpperCase());
// console.log(userName)

const userNameUpperCase = userName.toUpperCase();


//metody - coś robią Metody wywołujemy ()
//własciwości - coś zawierają


//Metody i własciwośi, które warto znać
//właściwość zwracająca długość łancucha, przy okazji zobaczmy, że do właściwości nm
userName.length; //notacja kropkowa
userName['length']; //ten sposób określamy notacją tablicową czy notacją z nawiasami


// Pobranie konkretnego znaku
userName.charAt(2);
userName[2];
// userName['2'];

// Łaczenie stringów
userName.concat(" - fajne imię!")
//alternatywnie, bo robi to samo, możemy użyć operatorta dodawania na stringu, mamy wtedy konkatenacje (concatenation)
userName + ' - fajne imię!' + " no i super";

`${userName} - fajne imię`; //nowy sposób - jeszcze omówimy (tzw. super string czy łańcuch szablonowy)


// Który indeks ma dany znak (i czy występuje)
userName.indexOf('d') //pierwszy pasujący znak zwraca, własciwie jego indeks, chyba ze nie ma to -1 (wielkośc liter ma znaczenie)
userName.lastIndexOf('o') // to samo ale od końca


// Czy dany znak występuje w danym łancuchu
userName.includes('O');
userName.includes('o');


//pozbądź się białych znaków na początku i na końcu łanucha
const afterTrim = "   słowo  ".trim()


// skopiuj łancuch tyle razy ile podamy w argumencie
const repeatString = "word".repeat(5);


//Zwróć jakiś fragment łańcucha. Jako pierwszy argument gdzie ma zacząć, jako drugi gdzie ma skończyć (bez tego). Liczba, którą podeajmey jest indeksem
const slideWord = userName.slice(1, 2); //od drugiego znaku (bo mamy indeks 1) do trzeciego znaku (ale bez niego). Czyli zwróci nam tylko drugi znak





// konkretna litera zwrócona
const character = "litery".charAt(2) //zwraca literę (liczone od 0)

// cudzysłowy w środku stringa
// const singleQuoteExample = 'i'm Magda';
const singleQuoteExample = "i'm Magda";
const singleQuoteExample2 = 'i\'m Magda' // (\)backslash to ten ten drugi to (/)forward slash
// const slash = 'ktos\cos'
const slash = 'ktos\\cos'
const longText = 'tekst \n tekst'

const superText = `tekst
tekst w nowej linii i 
cudzysłów " 
i apostrof '`

// konwersja innego typu na stringa
String(1000000) //"1000000"

// Druga metoda . toString którą możemy zmienić typ number na string
200..toString()
// można też wskazać na jaki system ma zamienić (domyślnie system dziesiętny)
200..toString(16)

// Sztuczka z wykorzystaniem niejawnej konwersji
"" + 200; // "200"
"" + true // "true"


// Zapamiętaj także o własciwościach string związanych z typem boolean i konwersji string na boolean:

//- Pusty string ("") jest zamieniany na wartość false
//- String z jakimś znakiem(znakami) w środku jest zamieniany na true 
Boolean() //konwersja na wartość typu Boolean. Funkcja Boolean działa podobnie jak poznane już String i Number (tylko zmienia na inny typ)
// console.log(Boolean(emptyString)) //false
// console.log(Boolean(emptyObjectString)) //true