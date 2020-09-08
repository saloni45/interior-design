$(document).ready(function(){
var flag = 0;
$('.ul-2 .bedroom').css('background-color','green');
$('.ul-2 li').click(function(){
    $(this).css('background-color','green');
    $(this).siblings().css('background-color','#2c3e50');
});

$('.bedroom').click(function(){
    flag = 0;
    $('.photos-bedroom').css('display','block');
    $('.photo').animate({height: '200px' , width: '240px'});
    $('.photo').siblings().css('display','block');
    $('photos-bedroom').siblings().css('display','none');
});


$('.kitchen').click(function(){
    flag = 0;
    $('.photos-kitchen').css('display','block');
    $('.photo').animate({height: '200px' , width: '240px'});
    $('.photo').siblings().css('display','block');
    $('photos-kitchen').siblings().css('display','none');
});

$('.bath-room').click(function(){
    flag = 0;
    $('.photos-bathoom').css('display','block');
    $('.photo').animate({height: '200px' , width: '240px'});
    $('.photo').siblings().css('display','block');
    $('photos-bathroom').siblings().css('display','none');
});

$('.office-furniture').click(function(){
    flag = 0;
    $('.photos-office').css('display','block');
    $('.photo').animate({height: '200px' , width: '240px'});
    $('.photo').siblings().css('display','block');
    $('photos-office').siblings().css('display','none');
});

$(".photo").click(function(){
    flag++;
    if(flag % 2 == 1){
        $(this).animate({
           height :'100%' , 
           width:'100%'
        } , 1000);
        $(this).siblings().css('display','none');
        $('.price').parent().css('display','block');
        $('.price').html($(this).attr('value'));
        $('.price').fadeIn(2000);
    }
    else{
        $('.price').fadeOut(100);
        $(this).animate({
            height:'200px',
            width:'240px'
        }, 500 ,function(){
            $(this).siblings().css('display','block');

        });
    }
    
});

});