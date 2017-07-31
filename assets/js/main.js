function titulo(){
var title = document.getElementByClassName("items");
	var mostrar = datos.forEach(function(elemento){
    [elemento].innerHTML += "<h4>"+ elemento.title + "</h4>";
});
mostrar;
}
titulo();