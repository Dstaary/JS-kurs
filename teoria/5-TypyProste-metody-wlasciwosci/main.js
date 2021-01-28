const txt = 'jakiś tekst nowy1';
let score = 12.55;
//te dwie zmienne przydadzą nam się w dalszych przykładach w pliku

"zbiór znaków w cudzysłowie"; 1222; true; null; undefined;
// Każdy typ prosty (poza Symbol) można stworzyć za pomocą literału. Literał to zestaw znaków, które zostaną rozpoznane przez interpreter

//literał łancucha, literał liczby ... 
// na przyszłość: literał obiektu "{}", literał tablicy "[]"

/* Typy proste nie są obiektami, to jednak mozemy na nich (number, string, boolean) wykonywać metody i właściwości, które to są domeną obiektów */


// właściwość - informacje o stanie (wartości)
// metoda - działania (na wartości), które najczęściej zwraca nową wartość  w oparciu o działanie na wartości.

// Właściwości
txt.length; //właściwość zawierająca informacje o długości stringa
txt[2]; //pobranie znaku, kótry znajduje się pod danym indeksem

// Metody (nie dokonują zmiany, tylko zwracają). Metody muszą być wywołane (()), bez wywołania zobaczymy tylko czym są a nie ich działanie
// metoda(argument)

txt.toUpperCase; //zwraca funkcje (czyli bez wywowałania kieruje do funkcji (metodą określamy funkcję, która jest przypisana do obiektu - oczywiście będziemy o tym jeszcze rozmawiać)
txt.toUpperCase(); //wywołanie metody dla string
score.toFixed(); //wywołanie metody dla number (typy nie mają tych samych metod, tylkjo różne)
txt.indexOf('ś'); //metoda sprawdzająca czy w danym stringu jest wskazany znak, a jeśli tak to na jakiej pozycji (o jakim indeksie, licząć od zera)

// Metody nie przerabiają startych wartości a zwracają nowe (stare zostają niezmienione) Dlatego te nowe wartości gdzieś powinniśmy przypisać, jeśli chcemy z nich skorzystać w dalszej części programu.
const newTxt = txt.toUpperCase();
const fixedNumber = score.toFixed();

// Typy proste nie mają właściwości i metod. Jak to się więc dzieje, że możemy pobrać ich właściwości czy wykonać na nich metody (jak na obiektach)?
// 1 - tworzymy zmienną i wartość string
const name = "Janek";
name.length; //właściwość której nie ma w typie prostym, i teraz zaczyna pracować silnik, który robi sobie mniej więcej coś takiego jak ponizej by pobrać wartość tej właściwości
// 2- SILNIK TWORZY OBIEKT NA TYM ETAPIE (nazwa zmiennejj tylko dla przykładu)
//Tworzy obiekt String np. 
// const nameTemporary = new String(name);
//nameTemporary.length
// 3 - Zwraca 5 (bo taką ma długość "Janek") i usuwa obiekt String (w przykłądzie znajduje się w nameTemporary)

/* Reasumując: Jeżeli wywołujemy metody, czy chcemy dostać sie do zawartości własciwości, to w tle tworzony jest tymaczowy obiekt danego typu, który "opakowuje" nasz typ prosty na czas dotarcia do właściwości czy wywowłania metody.*/

// Możemy też tworzyć takie obiekty sami (abstachując już od opakowania typów prostych). Ale bardzo rzadko ma to sens, ponieważ takie obiekty mają częstoi inne zachowania niż typy proste np. każdy obiekt zwraca np. true, a operator typeof zwróci "object", a nie rodzaj typu prostego. problemy pojawią się także przy operatorze porównania "==="). Tworzenie obektu (String, Number, Boolean) jest trudniejsze niż prosty literał.
const userName = new String("Jagienka");
const userID = new Number(2);
const famale = new Boolean(true);

//Na przyszłość: String, Number i Boolean to przykłady konstrukturów czyli funkcji, które są używane do tworzenie instancji (niezależnej kopii) obiektów. Operator "new" tworzy nowy obiekt. Na tym etapie nie masz jeszcze szans tego zrozumieć, to zaawasnowany koncept programowania w JS, ale kiedy dojdziemy do programowania obiektowego będę to dobrze wyjaśniał i zrozumiesz ten mechanizm.  