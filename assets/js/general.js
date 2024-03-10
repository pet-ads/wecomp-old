jQuery(document).ready(function($){
    var lastId,
        sideMenu = $("#sideMenu"),
        sideMenuHeight = sideMenu.outerHeight()+1,
        sideMenuItems = sideMenu.find("a"),
        scrollItems = sideMenuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    $("#sideMenu a" ).click( function () {
        $("#sideMenu li").each(function (k,v){
            $(v).removeClass('selected__sideMenu');
        });
        $(this).parent('li').addClass('selected__sideMenu');
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+sideMenuHeight;

        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            sideMenuItems
                .parent().removeClass("selected__sideMenu")
                .end().filter('a[href="#'+id+'"]').parent().addClass("selected__sideMenu");
        }
    });
});