const add = () => {
    let number = 0;
    return () => {
     number++;
     document.body.textContent = `${number} sekund`
    }
   }
   
   const counter = add();
   setInterval(counter, 1000);

   
   