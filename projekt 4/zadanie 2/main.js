document.body.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = "red";
        console.log(x, y);
    } else if (x % 2 != 0 && y % 2 != 1) {
        document.body.style.backgroundColor = "blue";
        console.log(x, y);
    } else {
        document.body.style.backgroundColor = "green"
        console.log(x, y);
    }
    // console.log(x, y);

})