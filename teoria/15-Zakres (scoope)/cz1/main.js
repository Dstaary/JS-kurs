/* CO TO JEST ZAKRES (SCOPE) - WPROWADZENIE */

// Zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana.

// Zakres globalny (główny) i zakres lokalny (zakres lokalny tworzy blok lub ciało funkcji).

// W naszym programie (złożonym) istnieje mnóstwo zakresów. Każdy blok, funkcja, towrzy swój zakres. Jeden zakres może być zagnieżdzony w innym zakresie. 

//Zakres jest zależny od tego gdzie dana zmienna znajduje się w kodzie (gdzie została utworzona).


/* ZAKRES GLOBALNY */
// Poza blokami i funkcjami. Przestrzeń najwyższego rzędu.

// var userID = 102;
// const colorID = 5;
// let userAge = 20;

// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// userID = 200;
// colorID = 10;
// userAge = 21;


// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// Zmienne zadeklarowane w zakresie globalnym są widoczne wszędzie w programie (również w innych zakresach)

let userName = "Adam";

function showName() {
 let userName = "Jan";
 userName = "Marysia";
 console.log(userName);
}

// showName()
// console.log(userName);
