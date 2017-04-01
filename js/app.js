
var canvas = new fabric.Canvas('canvas');

// window.addEventListener('resize', resizeCanvas, false);
// var draw = document.querySelector(window);

//   function resizeCanvas() {
//     canvas.setHeight(window.innerHeight);// problem
//     canvas.setWidth(window.innerWidth);
//     canvas.renderAll();
//   }

//   // resize on init
//   resizeCanvas();




document.addEventListener('DOMContentLoaded',function(){


var shapes =Array.from(document.querySelectorAll(".shapes div img"));
console.log(shapes);


// loading elements to canvas
shapes.forEach(function(e){
e.addEventListener("click", function(){
	var src = e.src;
fabric.loadSVGFromURL( src, function(objects, options) {
 var obj = fabric.util.groupSVGElements(objects, options);
 
 
 canvas.add(obj).renderAll();
 obj.scaleToHeight(127) 
        .scaleToWidth(90)
        .center() 
        .setCoords();
 canvas.setActiveObject(obj).renderAll();
});
});
});


// funkcja odpwiedzialna za nadawanie wpełnienia z colorpickera

function setImageColor(element) {

	var activeObject = canvas.getActiveObject(),
  		color = "#"+element.value;

  		
   console.log(color)    
 console.log(activeObject)
	activeObject.set({fill : color});
  canvas.renderAll();
}

var jscolor = document.getElementById("color");
console.log(jscolor)
// wywołanie funkcji odpowiedzlanej za wypełenienie elementu 
jscolor.addEventListener('change', function()
{
	
    setImageColor(this);
});


// funkcja odpwiedzialna za nadawanie obrysu z colorpickera
function setStrokeColor(element) {
  		color = "#"+element.value;
  		var object = canvas.getActiveObject();


  		console.log(color)    
 console.log(object)
 if (object.paths) {
    for (var i = 0; i < object.paths.length; i++) {
      object.paths[i].set({
        
        stroke: color,
        strokeWidth: 0.5
      });
    }
  }
	 
  	canvas.renderAll();
	}

// wywołanie funkcji odpowiedzlanej za obrys elementu 
var stroke = document.getElementById("stroke");
console.log(stroke)

stroke.addEventListener('change', function()
{
	
    setStrokeColor(this);
});




var strokeWidth =document.getElementById("width").value;
console.log(strokeWidth);




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
		object.set('flipY', true).center();
		canvas.renderAll();
	});

	// odbice lustrzane w pionie elementu
	var reflectV = document.getElementById("reflectV");
	reflectV.addEventListener("click", function(){
		var object = canvas.getActiveObject();
		object.set('flipX', true).center();
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

		// var img = Array.from(document.querySelectorAll(".shapes div img"));
		// console.log(img);

		// img.forEach(function(e){
		// 	e.addEventListener("mousemove", function(){
		// 		this.style.padding = "17px";
		// 	});
		// });

});

// if(canvas.getActiveObject(true)){
// 				canvas.remove(canvas.getActiveObject());
// 			} else {
// 			canvas.remove(canvas.getActiveGroup());
			
// 			}

// trzeba jeszcze ustawić kolejność elementów, by ten dodany jako pierwszy się nie chował. 




