
var canvas = new fabric.Canvas('canvas');

window.addEventListener('resize', resizeCanvas, false);
var draw = document.querySelector(".main");

  function resizeCanvas() {
    canvas.setHeight(draw.innerHeight);// problem
    canvas.setWidth(draw.innerWidth);
    canvas.renderAll();
  }

  // resize on init
  resizeCanvas();


// funkcja odpwiedzialna za nadawanie wpełnienia z colorpickera
function setImageColor(element) {

	var activeObject = canvas.getActiveObject(),
  		color = "#"+element.value;

  		
   console.log(color)    
 console.log(activeObject)
	activeObject.set({fill : color});
  canvas.renderAll();
}

// funkcja odpwiedzialna za nadawanie wpełnienia z colorpickera
function setStrokeColor(element) {

	
  		color = "#"+element.value;
  		var obj = canvas.getActiveObject();
  		var src = obj.src;
  		console.log(src);
  		fabric.loadSVGFromURL( src , function(objects, options) {
	  for(i in objects) {
	  objects[i].set({
	    strokeWidth: 8,
	    stroke: color
	  });
	}
});
		

		// obj.stroke = color;
		// obj.strokeWidth = 10; 
		// console.log(obj);
  		canvas.renderAll();
}


document.addEventListener('DOMContentLoaded',function(){

var shapes =Array.from(document.querySelectorAll(".shapes div img"));
console.log(shapes);


// loading elements to canvas
shapes.forEach(function(e){
e.addEventListener("click", function(){
	var src = e.src;
fabric.loadSVGFromURL( src, function(objects, options) {
 var obj = fabric.util.groupSVGElements(objects, options);
 
 //console.log(typeof(jscolor));
 //obj.set({  fill: jscolor });
 canvas.add(obj).renderAll();
 obj.scaleToHeight(127) // Scales it down to some small size
        .scaleToWidth(90)
        .center() // Centers it (no s**t, Sherlock)
        .setCoords();
 canvas.setActiveObject(obj).renderAll();
});
});
});




var jscolor = document.getElementById("color");
console.log(jscolor)
// wywołanie funkcji odpowiedzlanej za wypełenienie elementu 
jscolor.addEventListener('change', function()
{
	
    setImageColor(this);
});

// wywołanie funkcji odpowiedzlanej za obrys elementu 
var stroke = document.getElementById("stroke");
console.log(stroke)

stroke.addEventListener('change', function()
{
	
    setStrokeColor(this);
});




	// Przesuwanie elementu na wierzch
	var front = document.getElementById("front");
	front.addEventListener("click", function(){
		var object = canvas.getActiveObject();
		canvas.bringToFront(object);
	});

	// przesówanie elementu na spód
	var back = document.getElementById("back");
	back.addEventListener("click", function(){
		var object = canvas.getActiveObject();
		canvas.sendToBack(object);
	});
	// odbice lustrzane w poziomie elementu
	var reflectH = document.getElementById("reflectH");
	reflectH.addEventListener("click", function(){
		var object = canvas.getActiveObject();
		object.set("angle", "-180").set('flipY', true).center();
		canvas.renderAll();
	});

	// odbice lustrzane w pionie elementu
	var reflectV = document.getElementById("reflectV");
	reflectV.addEventListener("click", function(){
		var object = canvas.getActiveObject();
		object.set("angle", "-180").set('flipX', true).center();
		canvas.renderAll();
	});

	// pobieranie elementu do svg za pomocą buttona
		var download = document.getElementById("download");
		download.addEventListener("click", function(){
			console.log(download);
			var iamge = canvas.toSVG();
			var hiddenElement = document.querySelector("#download");
			console.log(hiddenElement);
			hiddenElement.href = 'data:attachment/text,' + encodeURI(iamge);
			hiddenElement.target = '_blank';
			hiddenElement.download = 'myFile.svg';
			  });


		//usuwanie elementu z canvas za omocą buttona
		var remove = document.getElementById("remove"); 
		remove.addEventListener("click", function(){
			canvas.remove(canvas.getActiveObject());
			
		});

		// czyszczenie całego płótna
		var clear = document.getElementById("clear"); 
		clear.addEventListener("click", function(){
			canvas.clear();
			
		});


		//dodawanie cienia 
		var shadowAdd = document.getElementById("shadow_add"); 
		shadowAdd.addEventListener("click", function(){
			var obj = canvas.getActiveObject();
			console.log(obj);
			obj.setShadow(" 5px 5px 5px rgba(0, 0, 0, 0.4)");
				  canvas.add(obj).renderAll();

		});


		//usuwanie cienia 
		var shadowRem = document.getElementById("shadow_rem"); 
		shadowRem.addEventListener("click", function(){
			var obj = canvas.getActiveObject();
			console.log(obj);
			obj.setShadow("0");
				  canvas.add(obj).renderAll();

		});
	


});

// if(canvas.getActiveObject(true)){
// 				canvas.remove(canvas.getActiveObject());
// 			} else {
// 			canvas.remove(canvas.getActiveGroup());
			
// 			}

// trzeba jeszcze ustawić kolejność elementów, by ten dodany jako pierwszy się nie chował. 




