// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    /*  document.addEventListener("deviceready", function () {
          alert("Entro a deviceready de eventos", null, "Funcion: Guarda", 'OK');
          window.location.href = '#pregunta111';
  
          $('#guarda').tap(function (event) { guarda(); });
  
  
      }, false);*/





    //.addEventListener("click", function () { alert("Entro a addEventListener", null, "Funcion: Guarda", 'OK'); guarda(); },false);

    function onDeviceReady() {
        alert("Entro a deviceready simple", null, "Funcion: Guarda", 'OK');
        window.location.href = '#pregunta111';
        //avigator.notification.alert(nom + '\n' + tel + '\n' + mail, null, "Hotel", "Aceptar");
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        var boton = document.getElementById("guarda");
        if (boton.addEventListener) {  // all browsers except IE before version 9
            boton.addEventListener("click", function () { guarda(boton) }, false);
           
        }
        else {
            if (boton.attachEvent) {   // IE before version 9
                boton.attachEvent("click", function () { guarda(boton) });
      
            }
        }

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';





    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        alert("Entro a deviceready onpause", null, "Funcion: Guarda", 'OK');

    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        alert("Entro a deviceready onresume", null, "Funcion: Guarda", 'OK');
    };
    function guarda(button) {
        alert("Entro a evento2funciton", null, "Funcion: Guarda", 'OK');
        var check = getCookie("indice");
        if (check != null && check != "") {

        }
        else {

            setCookie("indice", 0, 365);

        }
        alert("paso check cookie", null, "Funcion: Guarda", 'OK');

        var cont = getCookie("indice");

        var valrad1 = $('input:radio[name=pregunta1]:checked').val();
        if (!valrad1) {
            alert("Please select your option on pregunta1.");
            return false;
        }
        var valrad2 = $('input:radio[name=pregunta2]:checked').val();
        if (!valrad2) {
            alert("Please select your option on pregunta2.");
            return false;
        }
        var valrad3 = $('input:radio[name=pregunta3]:checked').val();
        if (!valrad3) {
            alert("Please select your option on pregunta3.");
            return false;
        }
        var valrad4 = $('input:radio[name=pregunta4]:checked').val();
        if (!valrad4) {
            alert("Please select your option on pregunta4.");
            return false;
        }
        var valrad5 = $('input:radio[name=pregunta5]:checked').val();
        if (!valrad5) {
            alert("Please select your option on pregunta 5.");
            return false;
        }



        if (isConnected()) {
            alert("reconocio que esta conectado", null, "Funcion: Guarda", 'OK');
            var msg = guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, cont);

            alert("salio de guarda calif correcto", null, "Funcion: Guarda", 'OK');
            var cont2 = parseInt(cont) + 1;
            cont = cont2.toString();
            setCookie("indice", cont, 365);


            leeresarvas2();
            alert("leyo reservas correcto", null, "Funcion: Guarda", 'OK');
        }
        else {
            guardatempcalif(valrad1, valrad2, valrad3, valrad4, valrad5);
        }

        //document.location.reload();
        alert("termino funcion", null, "Funcion: Guarda", 'OK');

    };
})();