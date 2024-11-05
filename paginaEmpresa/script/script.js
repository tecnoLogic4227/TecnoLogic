$(".menu-icon").click(desplegar);

function desplegar() {
    let menuDesplegable = $("#menu-desplegable");
    
    if (menuDesplegable.css("visibility") === "hidden") {
        menuDesplegable.css("visibility", "visible");
    } else {
        menuDesplegable.css("visibility", "hidden");
    }
}
