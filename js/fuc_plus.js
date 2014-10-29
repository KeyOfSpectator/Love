function func_delete_code(parent_ele) {
	//var list = parent_ele.childNodes;
	var ele = document.getElementById("new_code");
	parent_ele.removeChild(ele);
}


function func_create_new_code(parent_ele , /*optional*/ div_list , display) {
	var new_code = document.createElement("div"); 
	
	  new_code.id = "new_code";  
   	new_code.style["float"] = "left";
   	new_code.style["width"] = "440px";
   	new_code.style["height"] = "400px";

      if(display == false){
         new_code.style["display"] = "none";
      }

   	new_code.style["font-family"] = "Consolas, Monaco, Bitstream Vera Sans Mono, Courier New, sans-serif";

   	parent_ele.insertBefore(new_code);  

   	//create new div and space_div
 

   	create_space(new_code)
   	var str = "this is a very long sentence";
   	var type = "comments";
   	create_line(new_code, str, div_list, type);

}

function create_line(parent_ele, str_line, /*optional*/ div_list, type){

   	for (var i=0; i<str_line.length ; i++) {

   		var str = str_line.substring(i , i+1);
   		
   		//space
   		if(str == " "){
   			create_space(new_code)
   		}
   		else{		
   			div_id = div_list.length;
   			div_list[div_id] = create_div(parent_ele, type , str , div_id);   	
   		}
	};

   	create_br(parent_ele);
}

function create_br(parent_ele){
	var div_text = document.createElement("br"); 
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  

}

function create_space(parent_ele){
	var div_text = document.createElement("div"); 
   	//text
   	div_text.innerHTML = "&nbsp";
   	//div_text.style["margin-left"] = "7px";
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  
}

function create_placeholder(parent_ele){
	var div_text = document.createElement("div"); 
   	//div_text.style["margin-left"] = "15px";
   	div_text.innerHTML = "&nbsp&nbsp";
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  
}

function create_div(parent_ele , type , str , div_id){
	var div_text = document.createElement("div"); 
   	//text
   	//div_text.type = "text";
   	//div_text.innerHTML = "t";  
   	div_text.id = div_id;  
   	//div_text.style["font-weight"] = "bold"
   	//div_text.style["height"] = "100px"
   	//div_text.style["width"] = "100px"

//style

      div_text.style["position"] = "relative";

   	if(type == "keyword"){
		div_text.style["color"] = "#7f0055";
		div_text.style["font-weight"] = "bold";
   	}
   	else if(type == "comments"){
   		div_text.style["color"] = "#3f7f5f";
   	}
   	else{//string
		div_text.style["color"] = "#2a36ff";
   	}

   	div_text.style["float"] = "left"
   	div_text.innerHTML = str;

	   parent_ele.appendChild(div_text);  

      return div_text;
}

function code_fly(ele_id ,left , top , speed){

   var div=$("#"+ele_id);  

   var relativeOffsetLeft=$("#"+ele_id).offset().left;
   var relativeOffsetTop=$("#"+ele_id).offset().top;

   var relativeOffset_Left_Content=$("#content").offset().left;
   var relativeOffset_Top_Content=$("#content").offset().top;

    div.animate(
      {
         left:left - relativeOffsetLeft + relativeOffset_Left_Content,
         top: top - relativeOffsetTop + relativeOffset_Top_Content
         //left:left,
         //top: top 
      },speed);
    //ele.animate({fontSize:'3em'},"slow");

}


