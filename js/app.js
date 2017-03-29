
var canvas = new fabric.Canvas('canvas');

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
		

		obj.stroke = color;
		obj.strokeWidth = 10; 
		console.log(obj);
  		canvas.renderAll();
}


document.addEventListener('DOMContentLoaded',function(){

var circle = document.querySelector(".circle");
var squer = document.querySelector(".squer");
var circle2 = document.querySelector(".circle2");
var circle3 = document.querySelector(".circle3");




circle.addEventListener("click", function(){
fabric.loadSVGFromURL('http://localhost/GENERATOR%20IKONEK/images/circle-02.svg', function(objects, options) {
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





squer.addEventListener("click", function(){
fabric.loadSVGFromURL('http://localhost/GENERATOR%20IKONEK/images/circleobject.svg', function(objects, options) {
  var jscolor = document.querySelector("#stroke").value;
  console.log(jscolor);
  for(i in objects) {
  objects[i].set({
    strokeWidth: 8,
    stroke: "#"+jscolor
  });
}
  var obj = fabric.util.groupSVGElements(objects, options);
  var jscolor = document.querySelector("#stroke").value;
  console.log(jscolor);
 // obj.set({  fill: jscolor });
  canvas.add(obj).renderAll();
});
});

circle2.addEventListener("click", function(){
	fabric.loadSVGFromURL('http://localhost/GENERATOR%20IKONEK/images/circlecolorstroke.svg', function(objects, options) {
	  for(i in objects) {
	  objects[i].set({
	    strokeWidth: 8,
	    stroke: 'rgb(200,0,0)'
	  });
	}
	  var obj = fabric.util.groupSVGElements(objects, options);
	  var jscolor = document.querySelector("#color").value;
	  console.log(jscolor);
	 // obj.set({  fill: jscolor });
	  canvas.add(obj).renderAll();
	});
});

circle3.addEventListener("click", function(){
	fabric.loadSVGFromURL('http://localhost/GENERATOR%20IKONEK/images/circle_with_shadow.svg', function(objects, options) {
	  var jscolor = document.querySelector("#stroke").value;
	  console.log(jscolor);
	  for(i in objects) {
	  objects[i].set({
	    strokeWidth: 8,
	    stroke: "#"+jscolor
	  });
	}
	  var obj = fabric.util.groupSVGElements(objects, options);
	  var jscolor = document.querySelector("#color").value;
	  console.log(jscolor);
	 // obj.set({  fill: jscolor });
	  canvas.add(obj).renderAll();
	});
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
		var shadow = document.getElementById("shadow"); 
		shadow.addEventListener("click", function(){
			var obj = canvas.getActiveObject();
			console.log(obj);
			obj.setShadow(" 10px 10px 8px rgba(0, 0, 0, 0.4)");
				  canvas.add(obj).renderAll();

		});
	


});

// if(canvas.getActiveObject(true)){
// 				canvas.remove(canvas.getActiveObject());
// 			} else {
// 			canvas.remove(canvas.getActiveGroup());
			
// 			}

// trzeba jeszcze ustawić kolejność elementów, by ten dodany jako pierwszy się nie chował. 




