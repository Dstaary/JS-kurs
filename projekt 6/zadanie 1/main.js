const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Asia", "Kasia", "Natalka", "Marysia", "Iga", "Ola"];

const prefix = ["Myślę", "Wydaje mi się", "Moim zdaniem"]

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefix.length);
    div.textContent = `${prefix[indexPrefix]} że najlepsze będzie imie  ${names[index]}`
}


btn.addEventListener('click', nameGenerator)