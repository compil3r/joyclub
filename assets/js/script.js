
$().ready(function(){
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn, $id){        
    var $card = $(btn).closest('.card-container');
    console.log($card);
    console.log($id);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
        $('#back_' + $id).addClass('esconde');
        $('#front_' + $id).removeClass('esconde');
    } else {
        $card.addClass('hover');
        $('#front_' + $id).addClass('esconde');
        $('#back_' + $id).height($('#front_'+ $id).height());
        $('#back_' + $id).removeClass('esconde');
    }
} 

$(window).resize(function() {
    $('.card-container').removeClass('hover');
    $('.back').addClass('esconde');
    $('.front').removeClass('esconde');

});

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()>($('.conteudo').position().top - 50)) {
            $( ".navbar" ).addClass("navbar-fixed-top");
        } else {
            $( ".navbar" ).removeClass("navbar-fixed-top");
        }
    });

    $.mobile.loading().hide();

    $("#myCarousel").swiperight(function() {
      $(this).carousel('prev');
  });
    $("#myCarousel").swipeleft(function() {
      $(this).carousel('next');
  });
});

$('.thumbnail').mouseenter(function() {
    $img = $(this).children('img');
    $span = $(this).children('span');
    $span.offset($img.offset());
    $span.width($img.width());
    $span.height($img.height());
});

jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1800,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});