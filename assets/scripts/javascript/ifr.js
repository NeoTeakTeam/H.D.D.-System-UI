var frameWidow = $("#ifr")[0].contentWindow;
//监听
$(frameWidow).scroll(function(e){
    //获取滚动条的位置
    var scrollTop=$(frameWidow).scrollTop();
});

async function scbot() {
    while (true) {
        await setTimeout(() => {
        $(frameWidow).scrollTop(2000);
    }, 200);
    }
}