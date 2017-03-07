$(function() {
    $('.tab_panels .tabs li').on('click', function() 
    {
        var $panel = $(this).closest('.tab_panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        var pannelToShow = $(this).attr('rel');
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active');
            $('#'+ pannelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });

        }

    });
//Homework. Second part

$('input').hover(function () {
    $(this)
    .siblings('.tooltip')
    .fadeToggle()

});

$('input').focus(function () {
    $(this)
    .siblings('.tooltip')
    .fadeToggle()

}); 

$('.button').click(function () {
    $('.tooltip')
    .fadeToggle()

});



});

