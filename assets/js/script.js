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