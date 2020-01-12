//inscription of the user

//we get the div that will store the registration form
let formulaire=document.getElementById("login");
//we create the elements of the form 
let firstname=document.createElement("input");
firstname.type="text";
firstname.placeholder="Enter your firstname";
let lastname=document.createElement("input");
lastname.type="text";
lastname.placeholder="Enter your lastname";
let email=document.createElement("input");
email.type="text";
email.placeholder="Enter your email";
let register=document.createElement("button");
register.innerHTML="REGISTER";
register.classList.add("register");
let error=document.createElement("span");
//we add elements to the div
formulaire.append(firstname,lastname,email,register,error);

//for handling the click on the registration button 
register.onclick=
    function validate(){
	
	//the regex of the valid email
	let regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	//we test if the fields of the form are filled or not
	if (firstname.value=="") error.innerHTML="Firstname required";
	else    if (lastname.value=="") error.innerHTML="Lastname required";
	        else    if (email.value=="") error.innerHTML="Email required";
			         
					// we test if the email entered by the user match the regex 
	                else    if (!(regex.test(email.value))) error.innerHTML="Invalid Email";
				            else {
	
	                        //we display our playlist if all fields are filled and the adress email is valid   
							register.style="display:none";
							formulaire.classList.remove("login");
							formulaire.classList.add("after-login");
							formulaire.innerHTML='<p>Welcome   '+firstname.value.toUpperCase()+'<p>';
							show_Playlist();
							}							
							
	
		
};