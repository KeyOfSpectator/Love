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
  
      //type: comments keyword string normal
   	//create_space(new_code);
      //create_placeholder(new_code);  
//1
   	var str = "// long long ago ";
   	var type = "comments";
   	create_line(new_code, str, div_list, type); 
      create_br(new_code);
//2
      create_placeholder(new_code);  
      var str = "Girl";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = " u = ";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "new";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = " lone_star(";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "\"Lotus\"";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = ");";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);
//3
      create_placeholder(new_code);  
      var str = "Boy";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = " i = ";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "new";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = " lone_star(";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "\"KeyOfSpectator\"";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = ");";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);

//4
      var str = "// they got a glance at nepal ";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//5
      var str = "// ......since then";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//6
      create_placeholder(new_code); 
      var str = "i.heart_stack.push(u);";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//7
      create_placeholder(new_code); 
      var str = "i.miss(u);";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//8
      var str = "/**";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//9
      create_space(new_code);
      var str = "* I dont want to lose \'The One\'";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//10
      create_space(new_code);
      var str = "* I dont want to let you alone ";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//11
      create_space(new_code);
      var str = "* any more ...";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//12
      create_space(new_code);
      var str = "* ......That night ";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//13
      create_space(new_code);
      var str = "* I told you I love you.";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//14
      create_space(new_code);
      var str = "*/";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//15
      create_placeholder(new_code);
      var str = "u.accepted();";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//16
      var str = "/* Eversince the moment: Oct 18, 2014, 23:50:08 */";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//17
      create_placeholder(new_code);
      var str = "global_world.happest = i;";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//18
      create_placeholder(new_code);
      var str = "for";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "( you ; time ";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "<=";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = " End_Of_The_World";
      var type = "string";
      create_line(new_code, str, div_list, type); 
      var str = "  ; i.strength";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "++";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = " ){";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);  

//19
      create_placeholder(new_code);
      var str = "/* I summon up my strongest courage never ever before */";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);  

//20
      create_placeholder(new_code);
      var str = "i.challenge( global_world );";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = " // for you";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code); 

//21
      create_placeholder(new_code);
      var str = "}";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);  

//22
      create_placeholder(new_code);
      var str = "try";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "{ ";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "if";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = "( our_distance ";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "==";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = " VeryVeryFar ";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = ")";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code); 

//23
      create_placeholder(new_code);
      var str = "}";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "catch";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "(error){ ";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "Myheart";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = ".";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = "distance(u) ";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      var str = "= ";
      var type = "keyword";
      create_line(new_code, str, div_list, type);
      var str = "0";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = ";   }";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code); 

//24
      var str = "/** you asked me ";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//25
      create_space(new_code);
      var str = "*   to remember my words for a long long time ";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//26
      create_placeholder(new_code);
      var str = "I will keep that */";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//27
      create_placeholder(new_code);
      var str = "while";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "(";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "true";
      var type = "string";
      create_line(new_code, str, div_list, type); 
      var str = "){";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//28
      create_placeholder(new_code);
      create_placeholder(new_code);
      var str = "final ";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "Myheart";
      var type = "string";
      create_line(new_code, str, div_list, type); 
      var str = ".";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "Angel ";
      var type = "string";
      create_line(new_code, str, div_list, type);
      var str = "= ";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "u; }";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//29
      var str = "// In my dream , and i m going to get it baby.";
      var type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//30
      create_placeholder(new_code);
      var str = "i";
      var type = "string";
      create_line(new_code, str, div_list, type); 
      var str = ".";
      var type = "keyword";
      create_line(new_code, str, div_list, type); 
      var str = "liveHappilyWith(";
      var type = "normal";
      create_line(new_code, str, div_list, type); 
      var str = "u";
      var type = "string";
      create_line(new_code, str, div_list, type); 
      var str = ");";
      var type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);
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


