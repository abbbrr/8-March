$(document).ready(function () {
    var containerClicked = false;

    $('.container').click(function () {
        containerClicked = !containerClicked;
        if (containerClicked) {
            $('.card').stop().animate({
                top: '-180px'
            }, 'slow');
            $('.card').toggleClass('flipped');
        } else {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
            $('.card').removeClass('flipped');
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.container').length && containerClicked) {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
            $('.card').removeClass('flipped');
            containerClicked = false;
        }
    });
});
