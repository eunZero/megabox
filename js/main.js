function main(){
    skip();
    popUp();
    banner();
    sitemap();
    login();
    subPositon();
    // swiper
    var swiper = new Swiper('.swiper-container',{
        slidesPerView:4,
        spaceBetween:40,
        loop:true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.git_hub').click(function(){
        location.href='https://github.com/eunZero/megabox';
    });

    $(window).resize(function(){
        subPositon();
    })

    var cnt=0;
    $('#prev').click(function(){
        if(cnt>0){
            cnt--;
        }else{
        cnt=3;
        }       
        userSlide(cnt);
    })
    $('#next').click(function(){
        if(cnt<3){
            cnt++;
        }else{
            cnt=0;
        }
        userSlide(cnt);
    })
}