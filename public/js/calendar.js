//var { default: axios } = require("axios");

document.addEventListener('DOMContentLoaded', function () {

    // Recolectar los datos del formulario
    let formulario = document.querySelector('form');

    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl,
        {
            initialView: 'dayGridMonth',
            //Traducir al español
            locale: "es",
            //Opciones del calendario
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            dateClick: function (info) {
                $("#evento").modal("show");
            }
        });

    calendar.render();

    //const axios = require('axios').default;

    document.getElementById("btnGuardar").addEventListener("click", function () {

        const datos = new FormData(formulario);
        console.log(datos);

        axios.post("http://localhost/calendar/public/evento/agregar", datos).
            then(
                (respuesta) => {
                    $('#evento').modal('hide');
                }
            ).catch(
                error => {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                }
            )
        /*
                axios.post("http://localhost/calendar/public/evento/agregar", datos).
                    then((respuesta) => {
                        $("#evento").modal("hide");/*
                        console.log(response);
                        calendar.addEvent({
                            title: response.data.title,
                            start: response.data.start,
                            end: response.data.end,
                            color: response.data.color
                        });*/
    })
    /*
            axios({
                method: 'post',
                url: 'http://localhost/calendar/public/evento/agregar',
                data: datos
            }).
                then((respuesta) => {
                    $("#evento").modal("hide");
                    /*console.log(response);
                    calendar.addEvent({
                        title: response.data.title,
                        start: response.data.start,
                        end: response.data.end,
                        color: response.data.color
                    });
                })*/

    /*
            e.preventDefault();
            let titulo = document.getElementById("titulo").value;
            let start = document.getElementById("start").value;
            let end = document.getElementById("end").value;
            let color = document.getElementById("color").value;
    
            calendar.addEvent({
                title: titulo,
                start: start,
                end: end,
                color: color
            });
            $("#evento").modal("hide");*/
});