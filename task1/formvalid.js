var msg="";
var isTrue=true;
$(function(){
	
	$("#register").click(function(event){

		var firstName=$("#firstname").val();
		var lastName=$("#lastname").val();
		var email=$("#email").val();
		var password=$("#password").val();	
		var ln=validate_lastname(lastName);
			var em=validate_email(email);
			var ps=validate_password(password);
		var fn=validate_firstname(firstName);
	
		if(!fn){
			return false;
		}
		var ln=validate_lastname(lastName);
		if(!ln){
			return false;
		}
		var em=validate_email(email);
		if(!em){
			return false;
		}
		var ps=validate_password(password);
		if(!ps){
			return false;
		}
		$("#error_text").hide();
		return true;
});
	
	
	$("#error_text").click(function(){
		$(this).hide();
	});
});

function validate_firstname(firstName){
	
	if(firstName==""){
			msg="Please enter your first name";
			$("#firstname").css("border","1px solid red");
			call_printmsg(msg);
			return false;
	}else{
			$("#firstname").css("border","1px solid grey");
			return true;
	}
}

function validate_lastname(lastName){
	if(lastName==""){
			msg="Please enter your last name";
			$("#lastname").css("border","1px solid red");
			call_printmsg(msg);
			return false;
	}else{
			$("#lastname").css("border","1px solid grey");
		return true;
	}
}

function validate_email(email){
	if(email==""){
			msg="Please enter your email";
			$("#email").css("border","1px solid red");
			call_printmsg(msg);
			return false;
	}else{
				$("#email").css("border","1px solid grey");
		return true;
	}
}

function validate_password(password){
		
		if(password==""){
		
			msg="Please enter your Password";
				$("#password").css("border","1px solid red");
			call_printmsg(msg);
					return false;
		}else{
		$("#password").css("border","1px solid grey");
	return true;
		}
		
}

function call_printmsg(msg){
			$("#error_text").slideDown(500);
			$("#text").text(msg);
		}
/*function call_printmsg(msg){
			$("#error_text").slideDown(500).css("background-color","#DF0101");
			$("#error_text").text(msg);
		}*/
