$(document).ready(function () {


    if (window.location.href.indexOf('index') > -1) {

        //slider
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });

        //posts
        var posts = [
            {
                title: 'prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'da sunt in nihil vel dolorem, dolores repellat, maiores soluta repellendus adipiscicupiditate fugiat.Place'
            },
            {
                title: 'prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'da sunt in nihil vel dolorem, dolores repellat, maiores soluta repellendus adipiscicupiditate fugiat.Place'
            },
            {
                title: 'prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'da sunt in nihil vel dolorem, dolores repellat, maiores soluta repellendus adipiscicupiditate fugiat.Place'
            },
            {
                title: 'prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'da sunt in nihil vel dolorem, dolores repellat, maiores soluta repellendus adipiscicupiditate fugiat.Place'
            }
        ];

        posts.forEach((item) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>`;

            $("#posts").append(post);
        });
    };

    //scroll to top
    $('.subir').click((e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login falso

    $('#login form').submit(function () {
        let form_name = $('#form-name').val();
        localStorage.setItem('form_name', form_name);
    });

    let form_name = localStorage.getItem('form_name');

    if (form_name != null && form_name != undefined) {
        var about_parrafo = $('#about p');

        about_parrafo.html('<br><strong>Bienvenido ' + form_name + '</strong></br>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        $('#login').hide();

        $('#logout').click(() => {
            localStorage.clear();
            location.reload();
        });
    };

    if (window.location.href.indexOf('about') > -1) {
        console.log('estoy en about')
        $('#acordeon').accordion();
    };

});

