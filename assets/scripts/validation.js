function validateForm(){

    // This is a single line comment
    /*
        This is 
        a multiline 
        comment
    */ 

    var errors = "";

    // Get value of element and storing it in variable
    var fullName = document.getElementById('fullName').value;
    // Check if fullName variable is empty  
    if(fullName==""){
        //alert("Please enter Full Name.");
        // Block action from getting executed
        //return false;
        errors += "<li>Please enter Full Name.</li>";
        document.getElementById('fullName').classList.add('inputError');
    }
    else{
        document.getElementById('fullName').classList.remove('inputError');
    }

    var username = document.getElementById('username').value;
    if(username==""){
        // alert("Please enter username.")
        // return false;
        errors += "<li>Please enter Username.</li>";
    }

    var password = document.getElementById('password').value;
    if(password==""){
        // alert("Please enter password.")
        // return false;
        errors += "<li>Please enter Password.</li>";
    }

    var nationality = document.getElementById('nationality').value;
    if(nationality=="0"){
        // alert("Please select Nationality.")
        // return false;
        errors += "<li>Please select Nationality.</li>";
    }


    if(errors!=""){
        document.getElementById('errorList').innerHTML = errors;
        return false;
    }
    else{
        document.getElementById('errorList').innerHTML = "";
        return true;
    }
}

function resetForm(){
    document.getElementById('errorList').innerHTML = ""; 
    document.getElementById('fullName').classList.remove('inputError');
}