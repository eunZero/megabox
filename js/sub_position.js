function subPositon(){
    var movie=$('a[title="영화"]').offset().left;
    var ticket=$('a[title="예매"]').offset().left;
    var thater=$('a[title="극장"]').offset().left;
    var event=$('a[title="이벤트"]').offset().left;
    var service=$('a[title="혜택"]').offset().left;

    $('#movie_sub').css('padding-left',movie-130);
    $('#ticket_sub').css('padding-left',ticket-100);
    $('#thater_sub').css('padding-left',thater-60);
    $('#event_sub').css('padding-left',event-140);
    $('#service_sub').css('padding-left',service-95);
}