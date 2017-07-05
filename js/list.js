"use strict"
function play (){
	this.classList.contains("layout-li-one") && (change[1].classList.remove("block","opacity"),
		change[2].classList.remove("block","opacity"),
		change[0].classList.add("block"),setTimeout(function(){
			return change[0].classList.add("opacity")
		},150)),
	this.classList.contains("layout-li-two") && (change[0].classList.remove("block","opacity"),
		change[2].classList.remove("block","opacity"),
		change[1].classList.add("block"),setTimeout (function(){
			return change[1].classList.add("opacity")
		},150)
		)
}
var Lis =  document.querySelectorAll(".layout-ul > li"),
change = document.querySelectorAll(".content-item"); [].slice.call(Lis).forEach(function(e){
	return e.addEventListener("mouseenter",play)
});