$(function(){
    $('.scorll-container').css({display:'none'})
    //滚动滑动条出现
    $(window).scroll(function () {
        if($(window).scrollTop()>=10){
            $('.scorll-container').slideDown(500)
        }
        if($(window).scrollTop()<=10){
            $('.scorll-container').slideUp(500)
        }
    })
    // 侧边栏二级菜单
    $('.now_book>li').click(function () {
        $(this).find('.sub').slideDown(800)
        $(this).siblings().find('.sub').slideUp(800)
    })
    // home里面横着的二级菜单
    $('.category>li').mouseenter(function () {
        $(this).addClass('nav_current')
        $(this).siblings('li').removeClass('nav_current')

        $(this).next().addClass('sub_current')
        $(this).siblings('li').next().removeClass('sub_current')
    })
    // 移开这个区域时，所有样式消失
    $('.category').mouseleave(function () {
        $(this).find('li').removeClass('nav_current')
        $(this).find('ul').removeClass('sub_current')
    })

    //移入移出显示二维码
    $('.small_container').hover(function () {
        $('.showContainer').animate({opacity:'1'},1000)
    },function () {
        $('.showContainer').animate({opacity:'0'},1000)
    })

    //轮播图
    $('.banner').hover(function () {
        $(this).find('.onehome_come').css({display: 'block'})
    },function () {
        $(this).find('.onehome_come').css({display:'none'})
    })

    var timer = null;
    var index = 0
    $('.onehome_right').click(function () {
        next()
    })
    $('.onehome_left').click(function () {
        prev()
    })
    //下一张函数
    function next() {
        index++;
        if(index>2){
            $('.pic_list').animate({left:-(index)*838},0)
            index=0
            $('.pic_list').animate({left: 0},0)
        }
        $('.pic_list').animate({left:-(index)*838},0)
        iconHandler(index)
    }
    //上一张函数
    function prev() {
        index--;
        if(index<0){
            index = 2
            $('.pic_list').animate({left:-(index+1)*838},0)
        }
        $('.pic_list').animate({left:-(index)*838},0)
        iconHandler(index)
    }
    //自动播放
    function auto() {
        timer = setInterval(function () {
            next()
        },5000)
    }
    auto();
    $('.banner').hover(function () {
        clearInterval(timer)
    },function () {
        auto()
    })
    //点击小角标切换到对应的图片
    $('.page li').click(function () {
        var clickIndex = $(this).index()
        console.log(clickIndex);
        $('.pic_list').animate({left:-(clickIndex)*838},0)
        index = clickIndex
        iconHandler(clickIndex)
    })
    //小圆点对应样式
    function iconHandler(index) {
        $('.page li').eq(index).addClass('on').siblings().removeClass('on')
    }
})