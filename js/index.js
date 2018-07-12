window.onload = function () {

    var list_length = $(".checkbox_list ul").children("li").length;
    var list_itme = 0;
    itme();
    $(".checkbox_list li").click(function () {
        var class_chec = $(this).find("i").attr("class");
        if (class_chec == "fa fa-square-o") {
            checkbox($(this));
            list_itme = list_itme + 1;
            itme();
            if (list_itme > 0) {
                checkbox($(".checkbox_list span:nth-child(1)"));
            }
        } else {
            no_checkbox($(this));
            list_itme = list_itme - 1;
            itme();
            if (list_itme == 0) {
                no_checkbox($(".checkbox_list span:nth-child(1)"));
            }
        }
    });

    $(".checkbox_list span:nth-child(1)").click(function () {
        var class_chec = $(this).find("i").attr("class");
        if (class_chec == "fa fa-square-o") {
            checkbox($(this));
            checkbox($(".checkbox_list li"));
            list_itme = list_length;
            itme();
        } else {
            no_checkbox($(this));
            no_checkbox($(".checkbox_list li"));
            list_itme = 0;
            itme();
        }
    })

    function itme() {
        $(".checkbox_list span:nth-child(1) span").text(list_itme + "/" + list_length);
    }
    function checkbox(select) {
        select.css("color", "rgb(64, 158, 255)");
        select.find("i").attr("class", "fa fa-check-square");
        select.find("i").css("color", "rgb(64, 158, 255)");
    }
    function no_checkbox(select) {
        select.css("color", "rgba(0, 0, 0, 0.7)");
        select.find("i").attr("class", "fa fa-square-o");
        select.find("i").css("color", "rgba(0, 0, 0, 0.5)");
    }
    
}