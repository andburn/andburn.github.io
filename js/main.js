$(function() {

    function createListItem(key, obj) {
        return "<li id='" + key + "'>" + 
            "<a href='" + obj.html_url + "'>" + obj.name + "</a>" + 
            "<span>" + obj.description + "</span></li>";

    }

    $.getJSON("https://api.github.com/users/andburn/repos")
        .done(function(data) {
            var items = [];
            $.each( data, function( key, val ) {
              items.push(createListItem(key, val));
            });
           
            $("<ul/>", {
              "id": "repo-list",
              html: items.join("")
            }).appendTo("#container");
        })
        .fail(function(jqxhr, textStatus, error) {
            $("<p class='error'>" + error + "</p>")
                .appendTo("#container");
        });
});