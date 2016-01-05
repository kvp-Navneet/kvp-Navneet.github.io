function formValidation()  
{  
var uid = document.registration.userid;  
var passid = document.registration.passid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var ucountry = document.registration.country;  
var uzip = document.registration.zip;  
var uemail = document.registration.email;  
var umsex = document.registration.msex;  
var ufsex = document.registration.fsex; 
if(userid_validation(uid,5,12))  
{  
if(passid_validation(passid,7,12))  
{  
if(name_valid(uname))  
{  
if(add_valid(uadd))  
{   
if(country_valid(ucountry))  
{  
if(zip_valid(uzip))  
{  
if(Email_valid(uemail))  
{  
if(sex_valid(umsex,ufsex))  
{  
}  
}   
}  
}   
}  
}  
}  
}  
return false;  
  
} /*
function myFunction() {
  if(userid_validation(uid,5,12))  
{  
document.getElementById('user_id').innerHTML="<img src='../image/a.png'/>";  

}
if(passid_validation(passid,7,12))  
{  
    document.getElementById('pass_id').innerHTML="<img src='../image/a.png'/>";  
}
if(name_valid(uname))  
{  
    document.getElementById('fname_id').innerHTML="<img src='../image/a.png'/>";  
}
if(add_valid(uadd))  
{   
        document.getElementById('add_id').innerHTML="<img src='../image/a.png'/>";
}
if(country_valid(ucountry))  
{  

    document.getElementById('count_id').innerHTML="<img src='../image/a.png'/>";
  |}
if(zip_valid(uzip))  
{  
    document.getElementById('zip_id').innerHTML="<img src='../image/a.png'/>";  
}
if(Email_valid(uemail))  
{  
      document.getElementById('email_id').innerHTML="<img src='../image/a.png'/>";
}
if(sex_valid(umsex,ufsex))  
{  
 document.getElementById('sex_id').innerHTML="<img src='../image/a.png'/>";
    
}

}*/

function userid_validation(uid)  
{  
  var my=5;
  var mx=12;
  var error="";
  var uid_len = uid.value.length;  
  if (uid_len == 0 ){
  error ="cant be empty";
  }
  else if(uid_len <= my || uid_len > mx) {
  error= "enter 5 to 12 alphabets";
  }  

if(error!=""){
  document.getElementById('user_id').innerHTML=error;
  uid.focus();  
  return false;  
}  
else{
  document.getElementById('user_id').innerHTML="<img src='../image/a.png'/>";  
  return true;
}

}  
function passid_validation(passid)  
{  
   var my=5;
  var mx=12;
  var error="";
var passid_len = passid.value.length;  
if (passid_len == 0 )
  {
  error ="cant be empty";
  }
  else if(passid_len <= my || passid_len > mx)  {
  error= "enter 5 to 12 alphabets";
  }  

if(error!=""){  
  document.getElementById('pass_id').innerHTML=error;   
passid.focus();  
return false;  
}  
else{
  document.getElementById('pass_id').innerHTML="<img src='../image/a.png'/>";  
  return true
} 
}  
function name_valid(uname)  
{   
var letters = /^[A-Za-z]+$/;  
 var error="";
if(uname.value.match(letters))  
{  
    document.getElementById('fname_id').innerHTML="<img src='../image/a.png'/>";  
return true;  
}  
else  
{  error="enter first name "
  document.getElementById('fname_id').innerHTML=error;   
uname.focus();  
return false;  
}  
}  function add_valid(uadd)  
{   
   var error="";
var letters = /^[0-9a-zA-Z]+$/;  
if(uadd.value.match(letters))  
{  
      document.getElementById('add_id').innerHTML="<img src='../image/a.png'/>";
return true;  
}  
else  
{  
  error="enter address";
  document.getElementById('add_id').innerHTML=error;     
uadd.focus();  
return false;  
}  
}  
function country_valid(ucountry)  
{  
  var error="";
if(ucountry.value == "Default")  
{  
  error="choose country ";
  document.getElementById('count_id').innerHTML=error;
ucountry.focus();  
return false;  
}  
else  
{  
    document.getElementById('count_id').innerHTML="<img src='../image/a.png'/>";
return true;  
}  
}  
function zip_valid(uzip)  
{   
   var error="";
var numbers = /^[0-9]+$/;  
if(uzip.value.match(numbers))  
{  
  document.getElementById('zip_id').innerHTML="<img src='../image/a.png'/>";  
return true;  
}  
else  
{  
  error="Enter Zip code";
  document.getElementById('zip_id').innerHTML=error;
uzip.focus();  
return false;  
}  
}  
function Email_valid(uemail)  
{     var error="";
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
    document.getElementById('email_id').innerHTML="<img src='../image/a.png'/>";
return true;  
}  
else  
{  
  error="enter correct email"
  document.getElementById('email_id').innerHTML=error; 
uemail.focus();  
return false;  
}  
} function sex_valid(form)  
{  
  var error="";
 if ( ( form.sex[0].checked == false ) && ( form.sex[1].checked == false ) ) 
{  
error="choose gender"
document.getElementById('sex_id').innerHTML=error; 
sex.focus(); 
return false;
}  

else  
{  
alert('Form Succesfully Submitted');  
window.location.reload()  
return true;  
}  
}  
