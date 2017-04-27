function validate(form){
	fail = validateForename(form.Forename.value);
	fail = validateSurename(form.Surname.value);
	fail = validatePhonenumber(form.Phonenumber.value);
	fail = validateEmail(form.Email.value);
	
	if (fail=="")
		return true;
	else {
		alert(fail);
		return false;
	}
}
//Basically check if Forename is empty
function validateForename(field) {
	return (field=="") ? "No Forename was entered.\n":"";
}
//Basically check if Forename is empty
function validateSurname(field) {
	return (field=="") ? "No Surname was entered.\n":"";
}
//Basically check if the Email address  is valid
function validateEmail(field) {
	if (field=="") 
	return "No Email was entered.\n";
else if (!((field.indexOf(".") > 0) &&
			(field.indexOf("@") > 0) ||
			/[^a-zA-Z0-9.@_-]/.test(field))
	return(field =="") ? "The Email address is invalid.\n": "";
return"";
}
//Basically check if the phone number is valid
function Phonenumber(field)  
{  
  var Phonenumber = /^\d{10}$/;  
  if(field.value.match(Phonenumber))  
  {  
      return true;  
  }  
  else  
  {  
     alert("Not a valid Phone Number");  
     return false;  
  }  
  }  