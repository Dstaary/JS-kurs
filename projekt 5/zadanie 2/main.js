// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector('div');

// Drugi sposób 

// const LCPasswords = passwords.map(password => password.toLowerCase());

// const showMessage = (e) => {
//     const textInput = e.target.value.toLowerCase();

//     for (let i = 0; i < LCPasswords.length; i++) {
//         if (textInput === LCPasswords[i]) {
//             div.innerHTML = messages[i];
//         }
//     }
// }

// Pierwszy sposób

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
})

const showMessage = (e) => {
    div.textContent = "";
    const input = e.target.value.toLowerCase();
    passwords.forEach((password, i) => {
        if (password === input) {
            document.querySelector('div').textContent = messages[i];

        }
    })
}

input.addEventListener("input", showMessage)