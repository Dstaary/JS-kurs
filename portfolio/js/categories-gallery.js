const allBtn = document.getElementById("all-btn");

const logoBtn = document.getElementById("logo-btn");
const posterBtn = document.getElementById("poster-btn");
const visitingCardBtn = document.getElementById("visiting-card-btn");
const leafletBtn = document.getElementById("leaflet-btn");
const othersBtn = document.getElementById("others-btn");

const galleryPic = document.getElementById('gallery');
const pictures = galleryPic.querySelectorAll('.pic-box');

function showLess() {
    gallery.classList.add('gallery');
    gallery.classList.remove('gallery-open');
    button.innerHTML = "Pokaż wiecej";
}

logoBtn.onclick = function() {
for (const picture of pictures) {
    if (picture.id === "gallery-logo"){
        picture.classList.remove('hidden');
    } else {
        picture.classList.add('hidden');
    };
    
    };
    showLess();
    showBtnFn();
};

posterBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-poster"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
        
    };
    showLess();
    showBtnFn();
};

visitingCardBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-card"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
        
    };
    showLess();
    showBtnFn();
};

leafletBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-leaflet"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
        
    };
    showLess();
    showBtnFn();
};

othersBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-other"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
        
    };
    showLess();
    showBtnFn();
};

allBtn.onclick = function() {
    for (const picture of pictures) {
        picture.classList.remove('hidden');
    };
    showBtnFn();
    showLess();
};

