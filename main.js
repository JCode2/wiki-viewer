/**
 * Created by joshua on 7/9/17.
 */
$(document).ready(function() {

    $('#search').click(function() {
        var searchTerm = $("#searchTerm").val();

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                console.log(data);
                $("#results").html(' ');
                for (var i = 0; i < data[1].length; i++) {
                    $("#results").prepend("<div class='card'><li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li></div>");
                }
            },
            error: function(errormessage) {
                alert('error');
            }
        })
    });
});