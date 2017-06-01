$("img").click(function(e) {
    var contador = parseInt($("#count").text());
    contador++
    $("#count").text(contador);
});
