//Servidor
function enviarDatos(nom, tel, email) {
    $.ajax({
        type: "POST",
        url: "http://www.victorinox.com.mx/WebServiceApps/saveopinion.php",
        data: "nom=" + nom + "&tel=" + tel + "&mai=" + email
    }).done(function (msg) {
        if (msg == 1) {
            //subirFoto(foto,nom);
            window.location.href = "#page";
        } else {
            navigator.notification.alert("Error al Registrarse" + msg, null, "Registro", "Aceptar");
        }
    });
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }

    return c_value;
}

function guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, times) {
    var msg = 0;
    $.ajax({
        type: "POST",
        url: "http://www.victorinox.com.mx/WebServiceApps/saveopinion.php",
        data: "&c1=" + valrad1 + "&c2=" + valrad2 + "&c3=" + valrad3 + "&c4=" + valrad4 + "&c5=" + valrad5 + "&times=" + times
    }).done(function (msg) {//.done(function(msg) {

        if (msg == 1) {

            //subirFoto(foto,nom);


           alert("Datos enviados", null, "Conectando al servidor", "Aceptar");
            return msg;

        }
        else {
            alert("Error al guardar calificacion", null, "Alert", "Aceptar");
           // return msg;
        }
    }



	);


}

function sube_interno(valrad1, valrad2, valrad3, valrad4, valrad5) {



    $.ajax({
        type: "POST",
        url: "http://www.victorinox.com.mx/WebServiceApps/saveopinion.php",
        data: "c1=" + valrad1 + "&c2=" + valrad2 + "&c3=" + valrad3 + "&c4=" + valrad4 + "&c5=" + valrad5
    }).success(function (msg) {

        if (msg == 1) {


            window.location.href = "#pregunta116";
            navigator.notification.alert("Datos guardados correctamente", null, "Regresa Pronto", "Aceptar");

            //subirFoto(foto,nom);


        } else {
            navigator.notification.alert("Error al guardar datos", null, "Alert", "Aceptar");
        }
    });
}

function subirReserva(id, th, ha, di, pe) {
    $.ajax({
        type: "POST",
        url: "http://www.victorinox.com.mx/WebServiceApps/saveopinion.php",
        data: "nom=" + th + "&tel=" + ha + "&mai=" + di + "&pe=" + pe
    }).done(function (msg) {
        if (msg == 1) {
            navigator.notification.alert("Reserva Sincronizada Satisfactoriamente", function () {

                guardarHistorial(th, ha, di, pe);
                borrarReserva(id);
            }, "Reserva Realizada", "Aceptar");
        } else {
            navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");
        }
    });
}



function obtener_clave(clave) {
    navigator.notification.alert("clave de funcion=" + clave, null, "Registro", "Aceptar");
    $.ajax({
        type: "POST",
        url: "http://www.victorinox.com.mx/WebServiceApps/saveopinion.php",
        data: "clave=" + clave
    }).done(function (msg) {
        if (msg[0] == 0) {
            //subirFoto(foto,nom);


        } else {
            var obj = $.parseJSON(msg);
            ;
            $('#descripcion').val(obj.descripcion);
            $('#precio').val(obj.precio);


        }

    });
}

