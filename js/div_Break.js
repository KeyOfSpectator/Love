function pageX(ele){
return ele.offsetParent?(ele.offsetLeft+pageX(ele.offsetParent)):ele.offsetLeft;
}

function pageY(ele){
return ele.offsetParent?(ele.offsetTop+pageY(ele.offsetParent)):ele.offsetLeft;
}

function divBreak(ele){

var str = "Since then, I miss you every day";
var divArray = new Array();
var x = pageX(ele);
var y = pageY(ele);

for(var i=0; i<str.length; i++)
divArray[i] = document.createElement("div");

document.body.appendChild(divArray[i]);

divArray[i].value = str[i];
divArray[i].style.position = "absolute";
divArray[i].style.display = 'block';

//set div posution
divArray[i].style.top = x;
divArray[i].style.left = y;
} 

function getPosition_Style_height(ele){
	  if(elem.style["height"])  
        return elem.style["height"];  
    else if(elem.currentStyle)  
    {  
        return elem.currentStyle["height"];  
          
    }  
    else return null;  
}


function getPosition_Style_width(ele){
	  if(elem.style["width"])  
        return elem.style["width"];  
    else if(elem.currentStyle)  
    {  
        return elem.currentStyle["width"];  
          
    }  
    else return null;  
}

function getElemByID(id){
	var ele = document.getElementById(id)
	return ele
}

