Tabletop.init( { key: '1163y60SPTwj0ikg9YVHTekbSQSTzS_BAxSXgmm648tk',
                   callback: console.log(""),
                   simpleSheet: true } )

//sign up
// function signUp(data){
// 	var Username = $('#newUsername').val();
// 	var password = $('#newPassword').val();
// 	var Name = $('#newName').val();
// 	var confirmPassword = $('#confirmPassword').val();
// 	var email = $('#newEmail').val();
// 	var phone = $('#newPhone').val();

// 	if(password !== confirmPassword){
// 		window.alert("Your passwords don't match! \n Enter them again");
// 	}
// 	else{
// 		data[data.length]["Username"]=Username;
// 		data[data.length]["Password"]=password;
// 		data[data.length]["Name"]=Name;
// 		data[data.length]["Email"]=email;
// 		data[data.length]["Phone"]=phone;
// 	}
// }

// function login(){
// 	var Username = $('#usernameInput').val();
// 	var Password = $('#passwordInput').val();

// 	if(Username === ){
// 		if( Password === ){

// 		}
// 	}
// 	else{
// 		window.alert("Login unsucessful");
// 	}
// }

/*notes:
- need to set id for username, couldn't find "newusername", etc.
*/

function postContactToGoogle(){
		var username = $('#newUsername').val();
		var password = $('#newPassword').val();
		var name = $('#newName').val();
		//var confirmPassword = $('#confirmPassword').val();
		//var email = $('#newEmail').val();
		//var phone = $('#newPhone').val();
		console.log(username);
		console.log("did not post username");
        $.ajax({
            url: "https://docs.google.com/forms/d/10n6ZtwkB3GCirNvX85FP8_qHTAKaZNIKlh22jOmmTvM/formResponse",
            data: {"entry_1725144764" : username, "entry.2026356525" : password, "entry.1223546042": name},
         	type: "POST",
         	datatype: "jsonp"
         	datatype: "xml"
         });
}