$(document).ready(function(){
          // płynne przewijanie do wszystkich linków
          $("a").on('click', function(event) {

            // this.hash ma wartość, przed nadpisaniem domyślnego zachowania
            if (this.hash !== "") {
              
              event.preventDefault();

              var hash = this.hash;

              // Korzystanie z metody animate () jQuery w celu dodania płynnego przewijania strony
              // Opcjonalna liczba (800) określa liczbę milisekund potrzebnych do przewinięcia do określonego obszaru
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 250, function(){

                window.location.hash = hash;
              });
            } // koniec if
          });
        });