/* ZAKRES LOKALNY (BLOK)  - ZAKRES BLOKOWY*/

// Taki zakres nie istniał przed wprowadznei elet i const (była tylko funkcja), wiec pojawił się w ES6


// Przykład 1 

let var1 = 1;
const var2 = 2;
var var3 = 3;

{
 // let var1 = "wewnętrzne 1";
 // const var2 = "wewnętrzne 2";
 // var var3 = "wewnętrzne 3"
 // console.log(var1);
 // console.log(var2);
 // console.log(var3);
 var1 = "wewnętrzne 1";
 // var2 = "wewnętrzne 2";
 var3 = "wewnętrzne 3";
 const var4 = "coś"
}
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);



// PRZYKŁAD 2

const a = "1 w zakresie globalnym";
let b = "2 w zakresie globalnym";
var c = "3 w zakresie globalnym";

if (true) {
 // console.log(a) // zmienna globalna jest widoczna w bloku.
 // a = "przypisanie do a? Ale którego?"
 const a = "1 w bloku";
 // console.log("a w bloku to:" + a);
 // b = "2 w bloku";
 // console.log("b w bloku to:" + b);
 // var c = "3 w bloku";
}

// console.log(a);
// console.log(c);

// Zakres zmiennej a jej widoczność. Widoczność moze być przysłaniania



// PRZYKŁAD 3

let i = 100;

for (let i = 0; i < 10; i++) {
 // let i = 10;
 // console.log(i);
 // const inFor = "wewnątrz pętli";
 // if (i < 4) {
 // i = 10;
 // let i = 20;
 // inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
 // const inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
 // console.log("i wewnątrz instrukcji warunkowej, w pętli " + i);
 // console.log(inFor);

 // }

}



// PRZYKŁAD 4

// Zakres zagnieżdzony w innym zakresie. Zakres lokalny moze być zagnieżdzony w innym zakresie lokalnym.
// Najpierw sprawdzany jest aktualny zakres, potem wyższy (jeśli jest tak potrzeba). Wreszcie (jeśli dana zmienne nie została odnazleiona) sprawdzony zostanie zakres globalny.

let example1 = "globalna";

if (true) {
 let example2 = "zakres lokalny. dla którego zakresem zewnętrznym jest zakres globalny"



 if (true) {
  let example3 = "zakres lokalny. dla którego zakresem zewnętrznym jest inny zakres lokalny"
  example1 = "nowa wartość";
  console.log(example1);
  console.log(example2);
  console.log(example3);
 }

}


/* CO TO JEST ZAKRES - JESZCZE RAZ */


// Reguły wykorzystania zmiennych podczas wykonywania kodu.

// Zakres to lista wszystkich zadeklarowanych indentyfikatorów (zmienne)możliwych do użycia w danym momencie wykonywania programu.

// Zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana.

// Zakres globalny i zakres lokalny (zakres blokowy lub w funkcji).

// W naszym programie (złożonym) istnieje mnóstwo zakresów. Każdy blok, funkcja, towrzy swój zakres. Jeden zakres może być zagnieżdzony w innym zakresie. 

//Zakres jest zależny od tego gdzie dana zmienna znajduje się w kodzie (gdzie została utworzona).

// Zasady szukanie zmiennej:
//  -- najpierw zakres w którym jesteśmy. Póki nie znajdzie przeszukuje do zakresu najwyższego (zakres globalny)
// -- Po znaleznieniu (dopasowaniu) pierwszej pasujacej zmiennej pozostałe nie są już szukane.






