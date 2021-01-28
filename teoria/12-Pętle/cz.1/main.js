//  LOOPS - PĘTLE

// Pętla umożliwia wielokrotne wykonanie kodu.
// Pętla pozwala wykonywać blok kodu wielokrotnie, tyle razy ile spełniony jest określony warunek.
// Pętla pozwala pracować na elementach tablicy czy obiektu.
// Pętla opiera się na sprawdzeniu warunku. Pętla jest tak długo wykonywana jak spełniony jest warunek

// FOR

/* for (inicjalizacja iteratora; warunek; zwiększenie iteratora) {
 blok kodu
} */
// for - słowo kluczowe

for (let i = 0; i <= 2; i++) {
 console.log("wyświetlenie " + i);
}

// Działanie
// 1 - inicjalizacja następuje raz (konwencja mówi, że nazywamy iterator zmienną i. Powinien to być let, a nie var czy bez deklaracji). Najczęściej deklarujemy iterator jako 0.
// 2 - warunek jest sprawdzany za każdym razem (przed wykoneniem bloku). Warunek jest konwertowany do true/flase. Jeśli false pętla kńczy działanie a program idzie dalej. Jeśli true, program idzie do bloku kodu
// 3 - Wykonanie kodu ( o ile warunek jest prawdziwy)
// 4 - po wykonaniu bloku zwiększa iterator (najczęsciej o 1 za pomocą inkrementacji, ale nie jest to konieczne)
// DALEJ: Nowa pętla od punktu 2 (inicjalizacja jest robiona tylko raz)

// Tylko warunek potrzebny (choć coś takiego rzadko zrobimy). Iteracje można zrobić w pętli a iterator zainicjalizować poza nią.
// let i = 0;
// for (; i < 10;) {
//  console.log(i);
//  i++;
// }

// WHILE 

// Uruchomiaj blok kodu tak długo jak warunek jest prawdziwy


// Konstrukcja
/*  
while (warunek) {
 blok kodu
}
*/
while (false) {
 console.log("działa");
}
// Jeśli warunek jest prawdziwy i nie jest zmieniony (lub zmieniony ale zawsze prawdziwy) to mamy nieskończoną pętle i zawieszoną przeglądarkę.

// Przykład 1
// let number = 0;
// while (number < 10) {
//  number++;
//  console.log(number);
// }

// Przykład 2
// let money = 100;
// while (money >= 8) {
//  console.log("Mam jeszcze " + money + " złotych. To pijemy piwko!");
//  money -= 8;
// }

// alert(`za ${money} złote, już piwka nie kupię :((((`)

// Przykład 3
// let gasoline = 40;
// let km = 0;

// while (gasoline--) {
//  km += 18;
//  console.log("Przejechaliśmy " + km + " kilometrów. Została nam jeszcze " + gasoline + " litrów benzyny");
// }


//DO...WHILE
//Blok zawsze wykona się co najmniej raz. Czy będzie sie wykonywał dalej zależy od tego czy warunek będzie spełniony.

let study = "nie, wyrzucili mnie"

do {
 console.log('Idę do szkoły');
} while (study === true);