// gulp-js does not support ES6 yet, see https://stackoverflow.com/questions/32055052/does-grunt-contrib-uglify-not-parse-let-keywords
// will find alternative approach later

function ToggleElement(selectorElement){

	var targetElement,
		applyCss;
	
	this.target = function(el){
		this.targetElement = el;
	}
	this.apply = function(el){
		this.applyCss = el;
	}
	this.toggle	= function(){
		var e = document.getElementById(selectorElement);
		var h = document.getElementsByClassName("header");
		
		e.addEventListener("click", function(){
			if(e.getAttribute("active") === "false"){
				e.setAttribute("active", "true");
				h[0].setAttribute("class", "header header--active");
			}
			else{
				e.setAttribute("active", "false");
				h[0].setAttribute("class", "header");
			}
		});
	}
}

var te = new ToggleElement("navigation");
te.target("navigation-target");
te.apply("header--active");
te.toggle();








