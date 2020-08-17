/*
	Assignment 4
		Authors:
				Sean Morden
					Student#:300490950
				Nasrin Mumtaz
					Student#:301034996
		Date: March 4,2019
		File name:a4.js
*/


var validationOne = false;
var validationTwo = false;
var validationThree = false;
var validationFour = false;
var validationFive = false;
var validationSix = false;
var validationSeven = false;
var validationEight = false;
var validationNine = false;
var validationTen = false;
var validationEleven = false;
var validationTwelve = false;
var validationThirteen = false;
var validationFourteen = false;
var validationFifteen = false;
var submitForm=false;

function Validation(){
	if(validationOne === true && validationTwo === true && validationThree === true && validationFour === true && validationFive === true &&validationSix === true && validationSeven === true && validationEight === true && validationNine === true && validationTen === true && validationTwelve === true && validationThirteen === true  && validationFourteen === true  && validationFifteen === true)
	{
		submitForm = true
	}
	else{submitForm = false;}
	
}

function validateFirstname(){
	var fNameInput = document.getElementById("fName");
	var errorDiv = document.getElementById("fNameError");
	var fNameCheck= /^[A-Z][a-z]{1,14}$/;
	try{
		if (fNameCheck.test(fNameInput.value)===false){
			throw "First letter must be a capital letter or name does not meet required length."
			}else{
				fNameInput.style.background ="white";
				errorDiv.style.display="none";
				validationOne=true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  fNameInput.style.background = "rgb(255,233,233)";
			  validationOne=false;
	}

}

function validateLastname(){
	var lNameInput = document.getElementById("lName");
	var errorDiv = document.getElementById("lNameError");
	var lNameCheck= /^[A-Z][a-z]{1,14}$/;
	try{
		if (lNameCheck.test(lNameInput.value)===false){
			throw "First letter must be a capital letter or name does not meet required length."
			}else{
				lNameInput.style.background="white";
				errorDiv.style.display="none";
				validationTwo=true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  lNameInput.style.background = "rgb(255,233,233)";
			  validationTwo=false;
   	}
}

function validateGender(){
	var genderInput=document.getElementById("genderList");
	var errorDiv=document.getElementById("genderError")
	try{
		if(genderInput.value == "0")
		{
			throw "Please select Gender!";
			
		}
		else
		{
			//var sel = document.getElementById("genderList");
			//get the selected option
			var selectedText = genderInput.options[genderInput.selectedIndex].text;
			genderInput.style.background="white";
				errorDiv.style.display="none";
				
				validationThree=true;
		}
	}

catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  genderInput.style.background = "rgb(255,233,233)";
			  validationThree=false;
	}
}

function validateStreetAddress(){
	var streetInput = document.getElementById("street");
	var errorDiv = document.getElementById("streetError");
	var streetCheck= /^[A-Za-z0-9 _]+[A-Za-z0-9]([A-Za-z0-9 _]*)$/;
	try{
		if (streetCheck.test(streetInput.value)===false){
			throw "Input valid street and number"
			}else{
				streetInput.style.background="white";
				errorDiv.style.display="none";
				validationFour=true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  streetInput.style.background = "rgb(255,233,233)";
			  validationFour=false;
	}
}

function validateCountry(){
	var countryInput = document.getElementById("country");
	var errorDiv = document.getElementById("countryError");
	var countryCheck= /^[A-Z][a-z]{1,}$/;
	try{
		if (countryCheck.test(countryInput.value)===false){
			throw "First letter must be a capital letter."
			}else{
				countryInput.style.background="white";
				errorDiv.style.display="none";
				validationFive = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  countryInput.style.background = "rgb(255,233,233)";
			  validationFive = false;
	}
}

function validatePostalCode(){
	var postalcodeInput = document.getElementById("pcode");
	var errorDiv = document.getElementById("pcodeError");
	var pcodeCheck= /^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/;
	try{
		if (pcodeCheck.test(postalcodeInput.value)===false){
			throw "Invalid postal code please enter postal code as follows ex. L1M1K6"
			}else{
				postalcodeInput.style.background="white";
				errorDiv.style.display="none";
				validationSix = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  postalcodeInput.style.background = "rgb(255,233,233)";
			  validationSix = false;
	}
}

function validatePassword(){
	var pwInput = document.getElementById("pw1");
	var pw2Input = document.getElementById("pw2");
	var errorDiv = document.getElementById("passwordError");
	try{
		if (/.{8,}/.test(pwInput.value)===false){
			throw "Password must contain a '.' and a '/' and be 8-12 characters long";
			}	
		else if (/[a-zA-Z]/.test(pwInput.value)===false){
			throw "Password must contain one letter";
		}
		else if(/[0-9]/.test(pwInput.value)===false){
			throw "Password must contain at least one number";
		}
		else if(/[\/]/.test(pwInput.value)===false){
			throw"Password must contain '/' ";
		}
		else if (/[\.]/.test(pwInput.value)===false){
			throw"Password must contain one '.' ";
		}else if(pwInput.value.localeCompare(pw2Input.value)!==0){
			throw "Password must match";
		}
		else{
				pwInput.style.background="white";
				pw2Input.style.background="white";
				errorDiv.style.display="none";
				errorDiv.innerHTML="";
				validationSeven = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
      		pwInput.style.background = "rgb(255,233,233)";
			  pw2Input.style.background = "rgb(255,233,233)";
			  validationSeven = false;
	}
}

function validateCity(){
	var cityInput = document.getElementById("city");
	var errorDiv = document.getElementById("cityError");
	var cityCheck= /^[A-Z][a-z]{1,20}$/;
	try{
		if (cityCheck.test(cityInput.value)===false){
			throw "First letter must be a capital letter."
			}else{
				cityInput.style.background="white";
				errorDiv.style.display="none";
				validationEight = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  cityInput.style.background = "rgb(255,233,233)";
			  validationEight = false;
	}
}

function validateProvince(){
	var provInput = document.getElementById("prov");
	var errorDiv = document.getElementById("provError");
	var provCheck= /^[A-Z][a-z]{1,20}$/;
	try{
		if (provCheck.test(provInput.value)===false){
			throw "First letter must be a capital letter."
			}else{
				provInput.style.background="white";
				errorDiv.style.display="none";
				validationNine = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  provInput.style.background = "rgb(255,233,233)";
			  validationNine = false;
	}
}

function validateEmail(){
	var emailInput = document.getElementById("email");
	var errorDiv = document.getElementById("emailError");
	var emailCheck= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	try{
		if (emailCheck.test(emailInput.value)===false){
			throw "Email must contain @ and . ex. jdoe@jdoe.ca."
			}else{
				emailInput.style.background="white";
				errorDiv.style.display="none";
				validationTen = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  emailInput.style.background = "rgb(255,233,233)";
			  validationTen = false;
	}
}

function validatePhoneNumber(){
	var phoneInput = document.getElementById("phone");
	var errorDiv = document.getElementById("phoneError");
	var phoneCheck= /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
	try{
		if (phoneCheck.test(phoneInput.value)===false){
			throw "Must only contain digits with a total length of 10 digits."
			}else{
				phoneInput.style.background="white";
				errorDiv.style.display="none";
				validationEleven = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  phoneInput.style.background = "rgb(255,233,233)";
			  validationEleven = false;
	}
}

function validateEducation(){
	var eduInput=document.getElementById("pEduList");
	var errorDiv=document.getElementById("pEduError")
	try{
		if(eduInput.value == "0")
		{
			throw "Please select valid previous education.";
			
		}
		else
		{
			//var sel = document.getElementById("genderList");
			//get the selected option
			var selectedText = eduInput.options[eduInput.selectedIndex].text;
			eduInput.style.background="white";
				errorDiv.style.display="none";
			validationTwelve = true;
		}
	}

catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  eduInput.style.background = "rgb(255,233,233)";
			  validationTwelve = false;
	}
}

function validateWorking(){
	var workInput=document.getElementById("workList");
	var errorDiv=document.getElementById("workError")
	try{
		if(workInput.value == "0")
		{
			throw "Please select valid option.";
			
		}
		else
		{
			//var sel = document.getElementById("genderList");
			//get the selected option
			var selectedText = workInput.options[workInput.selectedIndex].text;
			workInput.style.background="white";
				errorDiv.style.display="none";
			
			validationThirteen = true;
		}
	}


catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  workInput.style.background = "rgb(255,233,233)";
			  validationThirteen = false;
	}
}
function validateCampus(){
	var campusInput=document.getElementById("pCampusList");
	var errorDiv=document.getElementById("pCampusError")
	try{
		if(campusInput.value == "0")
		{
			throw "Please select valid Campus.";
			//return false;
		}
		else
		{
			//var sel = document.getElementById("genderList");
			//get the selected option
			var selectedText = campusInput.options[campusInput.selectedIndex].text;
			campusInput.style.background="white";
				errorDiv.style.display="none";
			
			validationFourteen = true;
		}
	}


catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  campusInput.style.background = "rgb(255,233,233)";
			  validationFourteen = false;
	}
}

function validateProgram(){
	var programInput = document.getElementById("prog");
	var errorDiv = document.getElementById("progError");
	var programCheck = /^[A-Za-z0-9]+([A-Za-z0-9])$/;
	try{
		if (programCheck.test(programInput.value)===false){
			throw "Cannot be empty please enter either program number or program name"
			}else{
				programInput.style.background="white";
				errorDiv.style.display="none";
				validationFifteen = true;
			}
		}
		catch(message){
			errorDiv.style.display = "block";
      		errorDiv.innerHTML = message;
			  programInput.style.background = "rgb(255,233,233)";
			  validationFifteen = false;
	}
}

function validateForm(evt){
	evt.preventDefault();
	//var submitForm=false;
/*
	validateFirstname();
	validateLastname();
	validateGender();
	validateStreetAddress();
	validateCountry();
	validatePostalCode();
	validatePassword();
	validateCity();
	validateProvince();
	validateEmail();
	validatePhoneNumber();
	validateEducation();
	validateWorking();
	validateCampus();
	validateProgram();
*/ 
	Validation();
	/*if(Validation() === false){

		submitForm=true;
	}
	*/
	if(submitForm===true){
	document.getElementsByTagName("form")[0].submit();
		}
		else{
			window.alert("You have encountered an error. One or more fields invalid");
		}
}

function createEventListeners(){
	var fNameInput=document.getElementById("fName");
	fNameInput.addEventListener("change",validateFirstname,false)
	var lNameInput=document.getElementById("lName");
	fNameInput.addEventListener("change",validateFirstname,false)
	lNameInput.addEventListener("change",validateLastname,false)

	document.getElementById("city").addEventListener("change",validateCity,false);
	document.getElementById("street").addEventListener("change",validateStreetAddress,false);
	document.getElementById("genderList").addEventListener("change",validateGender,false);	
	document.getElementById("country").addEventListener("change",validateCountry,false);
	document.getElementById("pcode").addEventListener("change",validatePostalCode,false);
	document.getElementById("pw1").addEventListener("change",validatePassword,false);
	document.getElementById("pw2").addEventListener("change",validatePassword,false);
	document.getElementById("prov").addEventListener("change",validateProvince,false);
	document.getElementById("email").addEventListener("change",validateEmail,false);
	document.getElementById("phone").addEventListener("change",validatePhoneNumber,false);
	document.getElementById("pEduList").addEventListener("change",validateEducation,false);
	document.getElementById("workList").addEventListener("change",validateWorking,false);
	document.getElementById("pCampusList").addEventListener("change",validateCampus,false);
	document.getElementById("prog").addEventListener("change",validateProgram,false);

	var form=document.getElementsByTagName("form")[0];

	form.addEventListener("submit",validateForm,false);

}

window.addEventListener("load",createEventListeners,false);