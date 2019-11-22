$(function () {
    $('.erweiImg').hover(function () {
        $('.erweima_container').animate({paddingLeft:0})
        $('.erweiImg').animate({width:'314px'})
    },function () {
        $('.erweima_container').animate({paddingLeft:'27%'})
        $('.erweiImg').animate({width:'157px'})
    })
    //手机二维码与密码登录切换
    $('.login_title>a').click(function () {
        $(this).addClass('color').siblings().removeClass('color')
        if($(this).text()==='扫码登录'){
            $('.change_one').css({display:'block'})
            $('.change_two').css({display: 'none'})
        }else {
            $('.change_one').css({display:'none'})
            $('.change_two').css({display:'block'})
        }
    })
})