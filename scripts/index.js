﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener("deviceready", function () {
navigator.notification.alert("Entro a deviceready de eventos", null, "Funcion: Guarda", 'OK');

        window.location.href = '#pregunta111';

        /*   $('#regSend').tap(function(){
              if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='' ){
                  var nom = $('#regNom').val();
                  var tel = $('#regTel').val();
                  var mail = $('#regMail').val();
                  
                  
                  enviarDatos(nom, tel, mail);
                  //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
              }else{
                  navigator.notification.alert('Todos los campos son requeridos', null, "Hotel","Ok");
              }
           });*/


        //---------------datos 
        $('#datos').tap(function () {
            var cla = $('#clave').val();

            obtener_clave(cla);


            //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");

        });


        $('#finaliza').tap(function () {
            window.location.reload();


            //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");

        });
        //---------------guarda encuesta

        $('#guarda').tap(function () {
		 navigator.notification.alert("Entro a evento", null, "Funcion: Guarda", 'OK');
            var check = getCookie("indice");
            if (check != null && check != "") {

            }
            else {

                setCookie("indice", 0, 365);

            }
		navigator.notification.alert("paso check cookie", null, "Funcion: Guarda", 'OK');

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
navigator.notification.alert("reconocio que esta conectado", null, "Funcion: Guarda", 'OK');
                var msg = guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, cont);

navigator.notification.alert("salio de guarda calif correcto", null, "Funcion: Guarda", 'OK');
                var cont2 = parseInt(cont) + 1;
                cont = cont2.toString();
                setCookie("indice", cont, 365);


                leeresarvas2();
navigator.notification.alert("leyo reservas correcto", null, "Funcion: Guarda", 'OK');
            }
            else {
                guardatempcalif(valrad1, valrad2, valrad3, valrad4, valrad5);
            }

            //document.location.reload();
navigator.notification.alert("termino funcion", null, "Funcion: Guarda", 'OK');

        });
        /* $('#guarda2').tap(function(){
              
            var valrad1 = $('input:radio[name=pregunta1]:checked').val();
              if ( !valrad1 ) {
                  alert("Please select your option on pregunta1.");
                  return false;
              }
              var valrad2 = $('input:radio[name=pregunta2]:checked').val();
              if ( !valrad2 ) {
                  alert("Please select your option on pregunta2.");
                  return false;
              }
              var valrad3 = $('input:radio[name=pregunta3]:checked').val();
              if ( !valrad3 ) {
                  alert("Please select your option on pregunta3.");
                  return false;
              }
              var valrad4 = $('input:radio[name=pregunta4]:checked').val();
              if ( !valrad4 ) {
                  alert("Please select your option on pregunta4.");
                  return false;
              }
              var valrad5 = $('input:radio[name=pregunta5]:checked').val();
              if ( !valrad5 ) {
                  alert("Please select your option on pregunta5.");
                  return false;
              }
              var valrad6 = $('input:radio[name=pregunta6]:checked').val();
              if ( !valrad6 ) {
                  alert("Please select your option on pregunta6.");
                  return false;
              }
             
             guarda_calif(valrad1,valrad2,valrad3,valrad4,valrad5,valrad6);
           
          
               
            
         });*/


        //---------------Reservaciones---------------//
        var nr1 = $('#nr1');
        nr1.find('ul[data-role=listview] li').tap(function () {
            if ($(this).index() != 0) {
                nr1.attr('th', $(this).index());
                $(this).css('background', '#0ff000');
            }
        });
        $('#sh').tap(function () {

            var cla = $('#clave').val();
            //obtener_clave(cla);
            navigator.notification.alert("clave=" + cla, null, "Registro", "Aceptar");
            //window.location.href = '#nr2';

        });
        $('#rh').tap(function () {
            if (isConnected())
                subirReserva(0, nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
            else
                guardarReserva(nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
        });
        $('a[href=#historial]').tap(function (event) {
            leerHistorial();
        });
    }, false);

    function onDeviceReady() {
navigator.notification.alert("Entro a deviceready simple", null, "Funcion: Guarda", 'OK');
        window.location.href = '#pregunta111';
        avigator.notification.alert(nom + '\n' + tel + '\n' + mail, null, "Hotel", "Aceptar");
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';

       

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
navigator.notification.alert("Entro a deviceready onpause", null, "Funcion: Guarda", 'OK');
       
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
       navigator.notification.alert("Entro a deviceready onresume", null, "Funcion: Guarda", 'OK');
    };
})();