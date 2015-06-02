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

   	parent_ele.insertBefore(new_code , parent_ele.childNodes[0]);  

   	//create new div and space_div
  
      //type: comments keyword string normal
   	//create_space(new_code);
      //create_placeholder(new_code);  
//1
   	var str = "Dear Lotus:";
   	var type = "string";
   	create_line(new_code, str, div_list, type); 
      create_br(new_code);
//2
     
      create_br(new_code);
//3
      create_placeholder(new_code);  
      str = "Today is ";
      type = "normal";
      create_line(new_code, str, div_list, type);
      str = "June 1st 2015.";
      type = "keyword";
      create_line(new_code, str, div_list, type);
      str = "  Since we been together, ";
      type = "normal";
      create_line(new_code, str, div_list, type);
      
      create_br(new_code);

//4
      str = "it's ";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      str = "225";
      type = "keyword";
      create_line(new_code, str, div_list, type);
      str = " days already.";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);

//5
      create_placeholder(new_code);  
      str = "This letter is a self-criticism on the one hand. ";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//6
      str = "Sorry, I forget to celebrate the Children's Day for you.";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//7
      str = "When you said you are upset today, my heart shocked.";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//8
      str = "I hate myself that moment, because I was so dull to get inside    your heart; worse, I can't suffer your upset.";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
      create_br(new_code);

//9
      create_br(new_code);
      create_placeholder(new_code); 
      create_space(new_code);
      str = " I'm sorry. sincerely.";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//10
      create_br(new_code);
      create_space(new_code);
      str = " On the other hand. I do want to stop the time and treasure";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//11
      create_space(new_code);
      str = "those days we spend together. I want you to be the little child";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//12
      create_space(new_code);
      str = "just belong to me. Maybe I m so silly, so dull to a girl. I want";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//13
      create_space(new_code);
      str = "to appreciate your love, your gentle, and your kind-heart.";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//14
      create_br(new_code);
      create_space(new_code);
      str = "I LOVE YOU.";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//15
      create_space(new_code);
      str = "Unshakable.";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//16
      create_space(new_code);
      str = "I will be with you, forever.";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//17
      create_br(new_code);
      create_space(new_code);
      str = "                          KeyOfSpectator 2015-6-1";
      type = "string";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
}

function create_line(parent_ele, str_line, /*optional*/ div_list, type){

   	for (var i=0; i<str_line.length ; i++) {

   		str = str_line.substring(i , i+1);
   		
   		//space
   		if(str == " "){
   			create_space(new_code)
   		}
   		else{		
   			div_id = div_list.length;
   			div_list[div_id] = create_div(parent_ele, type , str , div_id);   	
   		}
	};

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
		div_text.style["color"] = "#FF0000";
		div_text.style["font-weight"] = "bold";
   	}
   	else if(type == "comments"){
   		div_text.style["color"] = "#3f7f5f";
   	}
   	else if(type == "string"){
		div_text.style["color"] = "#2a36ff";
   	}
      else{}//normal

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


