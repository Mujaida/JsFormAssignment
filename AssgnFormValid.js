function validate() {
    let name=document.forms["formValid"]["name"].value;
    let address=document.formValid.address.value;
    let zipcode=document.formValid.code.value;
    let country=document.formValid.country.value;
    let gender=document.formValid.gender.value;
    let preferences=document.formValid.preferences.value;
    let phone=document.formValid.phone.value;
    let email=document.formValid.email.value;
    let password=document.formValid.password.value;
    let verifyPassword=document.formValid.verifypwd.value;
    if(name=="") {
        alert("Please provide your name");
        document.formValid.name.focus();
        return false;
    }
    if(address=="") {
        alert("Please provide your address");
        document.formValid.address.focus();
        return false;
    }
    if(zipcode=="") {
        alert("Please provide your zipcode");
        document.formValid.zipcode.focus();
        return false;
    }
    if(country=="") {
        alert("Please provide your country");
        document.formValid.country.focus();
        return false;
    } 
    if(gender=="") {
        alert("Please provide your gender");
        document.formValid.gender.focus();
        return false;
    } 
    if(preferences=="") {
        alert("Please provide your preferences");
        document.formValid.preferences.focus();
        return false;
    } 
    if(phone=="") {
        alert("Please provide your phone");
        document.formValid.phone.focus();
        return false;
    } 
    if(email=="") {
        alert("Please provide your email");
        document.formValid.email.focus();
        return false;
    } 
    if(password=="") {
        alert("Please provide your password");
        document.formValid.password.focus();
        return false;
    } 
    if(verifyPassword=="") {
        alert("Please verify your password");
        document.formValid.verifypwd.focus();
        return false;
    } 
    return true;       
}
