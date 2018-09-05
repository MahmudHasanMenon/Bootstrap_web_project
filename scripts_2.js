$("#carousel-button").click(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    if ($("#carousel-button").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');                    
    }
});

$("#loginLink").click(function(){
        $('#loginModal').modal();
});

$("#reserveTableLink").click(function(){
    $('#reserve').modal();
});

