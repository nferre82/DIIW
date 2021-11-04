$(document).ready(function (e) {
    $("#lupa").on("click", function(){
        if($("#menu-principal").css("order")!=1 && $("#menu").css("display")=="block"){
            $("#menu-principal").removeClass("in");
        };
    });
    $("#menu").on("click", function(){
        if($("#menu-principal").css("order")!=1 && $("#bloque-buscar").css("display")=="block"){
            $("#bloque-buscar").removeClass("in");
        };
    });

});