/* CO TO JEST OPERATOR */
// Konstrukcja języka programowania, która wykonuje jakąś operację na wartościach (argumentach/operandach) i zwraca wartość.
// Operand - wartość/wartości wykorzystywane przez operator 
// operator może wymagać podania określonych typów wartości lub zachowywać się w różny sposób przy różnych typach np. operator dodawania przy dwóch typach number dodaje, przy typie string łączy (konkatenacja).

// Pamiętajmy o tym, że dochodzi tutaj do niejawnej, autamatycznej konwersji typów (typowanie słabe). W wielu językach programowania (typowanie silne) taka konwersja nie jest możliwa
2 + 2; //zwraca 4 (typ number)
"2" + "2"; //zwraca "22" (typ string)
"2" + 2; //zwraca "22" (string), bo dochodzi do niejawnej konwersji 2 na "2"
2 + true; // zwraca 3 (dochodzi do niejawnej konwersji true na 1)
"2" + true; // zwraca "2true" - niejawna konkwersja true (typ boolean) na "true " (typ string)

// operator może być znakiem (znakami), może być słowemi (zbudowany z liter) np. typeof, delete, new;
typeof 1200; //zwraca typ wartościu w tym wypadku "number"

// PODZIAŁ OPERATORÓW ZE ZWGLĘDU NA ILOŚĆ ARGUMENTÓW
let result; //deklaruję zmienną na ptotrzeby przykładów
//operator przypisania (dwa argumenty - mówimy na operatory dwuargumentowe, że są to operatory binarne)
result = 1;
//operator inkrementacji (jeden argument)
result++;
// mamy też operator trójargumentowy (pokazany na koniec pliku)


/* OPERATORY ARYTMETYCZNE */
let position = 2;
// inkrementacja. Zwróc wartość i dodaj jeden do wartości inkrementowanej
position++ //zwraca 2 i dodaje 1 (czyli jest 3)
// dekrementacja. Zwraca aktualną wartość a potem ją zmniejsza o 1
position--
// preinkrementacja - zwiększa wartość o 1 a potem zwraca aktualną wartość
++position
position += 1; //zadziała tak samo jak preinkrementacja
// predekrementacja - zmniejsza wartość o 1 a potem zwraca aktualną wartość
--position

// przypisanie
position += 10; // przypisuje do zmiennej nową wartość która jest wynikiem pobrania aktualnej wartości zmiennej i dodania do niej 10
position = position + 10; //W praktyce to się dzieję. Jest to zapis tożsamy.
position -= 16; //jw tylko odejmuje
position *= 4.2; //jw czyli pobiera aktualną wartość zmiennej i w tym wypadku mnoży ją zwracają nową wartość
position /= 2; //jw tylko dzielenie

let newPosition = 0;
newPosition += position; // pobiera wartość newPosition i dodaje do niej wartość position. Wynika działania (nowa wartość) jest przypisana do newPosition
// console.log(newPosition);

// Modulo - reszta z dzielenia
10 % 9; //w wyniku dzielenia zostaje 1 (bo 10/9 do jedna dziewiątka i jeden reszt)
20 % 4; //w wyniku dzielenia powstaje 5 i nie ma reszt, więc modulo nie zwraca reszt

// ** potęga ES6
2 ** 5; // 2 do 5, czyli 2 * 2 * 2 * 2 * 2
3 ** 3 // 3 do 3, czyli 3 * 3 * 3 

/* OPERATOR LOGICZNY */
// operator porównania (większy/mniejszy) - zwraca true lub false
20 > 40; //false
"tekst".length > 3; //właściwość length zawiera informację o długości tekstu (ile ma znaków) w tym wypadku 5>3, więc zwróci true
20 <= 20; // mniejszy równy (jest też >= większy równy). W tym wyapdku 20 jest mniejsze-równe 20 (nie jest mneijesze ale jest równe), czyli true

// operator porównania (czy są równe)
// == sprawdź czy dane wartości (wyrażenia) są równe. Dopuszcza konwersje. Jeśli są równe zwraca true, jeśli nie są równe zwraca false
"tekst" == "tekst2"; //false
2 == 2.2; //false
"2" == 2; //dokonuje konwersji typów, zamienia "2" na 2 i zwraca true (bo wtedy rzeczywiście są równe)
// === - porównanie, które nie dopuszcza konwersji typów
"2" === 2; //bez konkwersji typów, a więc "2" nie jest równe 2 i zwraca false

// operator "różne od" Czy lewa strona jest rózna od prawej. Jeśli trak zwraca true (do true potrzebne są by obie strony nie były takie same)
100 != 101; //true - bo są różne
"100" != 100; //false - bo są takie same (!= operator dopuszcza konwersję tka jak ==) 
"100" !== 100; //true - są różne bo nie ma konwerji (!== nie dopuszcza konwersji jak operator ===)

// logiczne zaprzecznie (negacja). Robi dwie rzeczy:  1. zamienia na typ boolean 2. odwraca wartość (jeśli było true, to jest false i odwrotnie)
!("coś"); //zwraca false, ponieważ najpier konwertuje na typ boolean i wartość true, a potem zamienia ją na false. Nawias nie jest konieczny, bo nie jest to wyrażenie a wartość
!(2 - 2); //negacja, nawias jest konieczny bo oznacza on by najpierw zostało wykonane wyrażenie w środku (2 - 2 czyli operator odejmowania, który da wynik 0), a potem dopiero negacja czyli zero zamieniamy na typ boolean flase a ten typ boolean na true (tak więc operator zwróci true) 
!!200; //podwójna negacja. Robi to co pojedyńćza (zmiena na typ boolean i odwraca), ale dodatkowo ponoweni odwraca, więć mamy rzeczywis wartość. 200 jest typu true więc tutaj będzie zwrócone true.

// SUMA logiczna (logiczne "lub")
//Jeśli choć jeden operand zwraca true, to wyrażenie możemy uznać za prawdziwe. Żeby jednak to dobrze zrozumieć musimy poznać mechanizm zwracania wartości. W przypadku gdy pierwsza wartość jest prawdziwa jest ona zwracana. W przypadku gdy nie jest prawdziwa zwracana jest druga.
true || false; //zwraca true (pierwsza wartość)
false || true; //zwraca true (druga wartość)
true || true; //zwraca pierwszą wartość (true)
false || false; //zwraca drugą wartość false
2 || 0 // zwraca pierwszą wartość (2). Dwa w przypadku zamieniania na wartość logiczną (jak robić to będzie instrukacja warunkowa) daje true
0 || null // obie wartości są nieprawdziwe. Ponieważ pierwsza jest nieprawdziwa zwracana jest druga czyli null (która stanowi false po zamiania na wartość logiczną)

// ILOCZYN logiczny (logiczne "i")
//Obie wartości (wyrażenia) muszą być uznane za prawdziwe by iloczyn logiuczny był uznany za prawdziwy. Tu również musimy jednak zrozumieć mechanizm zwracania. W przypadku gdy pierwszy argument (po lewje) jest nieprawdziwy, kończy to działania operatora i zwracana jest pierwsza wartość. Jeśli pierwsza wartość jest true (czy po konwersji na typ boolean, bo ta się wykonuje), to operator sprawdza wartość (wyrażenie) po prawej stronie i zwraca je. Ta zwrócona wartość decyduje czy logiczne "i" (czyli iloczyn logiczny) zwraca wartość true/false (czy inną wartość, któa po konwersji zwróci true/false)
true && false; //Pierwszy warunek jest true, operator przechodzi do drugiego i zwraca false
200 && 0; // podobnie jak wyzej. 200 zamieniane jest (konwersja) na true. Zwracane jest 0 (czyli po konwersji false)
"1" && "2"; //oba warunki prawdziwe, zwracane jest "2" czyli string, któy po konwersji na typ boolean jest true
"1" && ""; // Zwracany jest pusty string (pierwszy warunek prawdziwy), Pusty string po konwersji na typ boolean jest false
(20 > 10 && 10 < 20); //Pierwsze wyrażenie zwraca true, drugie też true a więc operator logiczne "i" zwróci true. 

// KOLEJNOŚĆ OPERATORÓW
2 + 3 * 5; //mnożenie przed dzielenie
(2 + 3) * (5 - 4); //nawiasy dają pierwszeńtstow (zaurzają kolejność wykonywania operatorów)
"2" + 3 * 5; //konwersja nie zaburza kolejności ale wpływa na efekt końcowy. W tym wypadku najpeirw mnożenie a więc "2" + 15, a z tego drugiego działania mamy "215"

//OPERATOR WARUNKOWY (trójargumentowy) - na teraz ciekawostka
// warunek? zrobToJakPrawda : zrobToJanFałsz
3 > 2 ? "tak" : "nie";
// Sprawdzamy warunek. Jeśli jest prawidłowy interpreter wykonuje kod po lewej stronie (w przykładzie "tak") i pomija ten po prawej, jeśli warunek zwróci false, ty pominięty zostanie kod po lewej stronie a wykonany zostanie kod po prawej (w przykładzie "nie")