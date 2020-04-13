$(document).ready(function(){
    $('h1').css('display', 'none');
    $("h1").fadeIn(2000);
    $('#description').css('display', 'none');
    $("#description").fadeIn(3000);
    $('#links').css('display', 'none');
    $("#links").fadeIn(5000);
    
    $("#aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $("h2").offset().top - 10},
        'slow');
});

});