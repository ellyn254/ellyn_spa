function Validation(values) {
    
    let error = {}// error object
    //the email pattern for the password 
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+&/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}&/

    if(values.name === "") {
        error.name  = "Name should be filled"
    }
    else {
        error.name = ""
    }

    if(values.phone === "") {
        error.phone  = "Phone should be filled"
    }
    else {
        error.phone = ""
    }

    if(values.email === "") {
        error.email  = "Email should be filled"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email don't match"
    }
    else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should be filled"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password did not match"
    }else {
        error.password = ""
    }
    return error;
}

export default Validation;