(function($){
    $(function(){

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(document).ready(function($){
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
        }, scroll_top_duration
                              );
    });
});

function initMap() {
    var uluru = {lat: 1.296751, lng: 103.779304};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
