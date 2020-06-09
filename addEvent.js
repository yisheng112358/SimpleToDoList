$(function () {

    var div = $("div.BackGround");
    div.animate({ opacity: 1 });
    div.animate({ height: '+=10%', width: '+=10%', top: '+=10%' }, 500);
    div.animate({ height: '-=10%', width: '-=10%', left: '+=10%' }, 500);
    div.animate({ height: '+=10%', width: '+=10%', top: '-=10%' }, 500);
    div.animate({ height: '-=10%', width: '-=10%', left: '-=10%' }, 500);
    div.animate({ opacity: 0.5 });

    $("#add").on("click", function () {
        //event handler
        var val = $("input").val();
        if (val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val(""); //clear the input
            $(".rem").on("click", function () {
                $(this).parent().remove();
            });
        }
    });
});
