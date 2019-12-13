window.onload = main;
function main(){
    var Thank_msg = document.getElementById('thank_msg');
    var Email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    Thank_msg.style.display = "none";
    addEventListener('click',goto);
    function goto(){
        location.replace("locations.html");
    }
    var FormHandle = document.forms[0];
    FormHandle.onsubmit = processForm;
    function processForm(){
        
        var Name = FormHandle.name.value;
        var Email = FormHandle.email.value;
        var Message = FormHandle.message.value;
        var Name_error = document.getElementById('name_error');
        var Email_error = document.getElementById('email_error');
        var Message_error = document.getElementById('message_error');
        
        if(Name===""){
            Name_error.innerHTML = "Name invalid";
            return false;
        }
        else if(Email==="" || !(Email.match(Email_regex))){
            Email_error.innerHTML = "Email invalid";
            return false;
        }
        else if(Message===""){
            Message_error.innerHTML = "Message field empty";
            return false;
        }
        else{
            FormHandle.style.display="none";
            Thank_msg.style.display="block";
        }
        return false; 
    }
    
}