// ! slider ploign
$(document).ready()
{
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        rtl: true,
        margin: 15,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
}