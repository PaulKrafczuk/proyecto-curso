$(document).ready(function () {
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


});
