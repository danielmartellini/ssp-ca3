function import_table(){
    $("#results").empty();
    $.getHTMLuncached = funtion(url){
        return $.ajax({
            url:url,
            type: 'GET',
            cache: false,
            success: function (html){
                $("#results").append(html);
            }
        })
    }
    $.getHTMLuncached("/get/html");
}

$(document).ready(function(){

    import_table();
})


