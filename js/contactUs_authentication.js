function toCheck()
{
    const nameinput=document.getElementById("name");
    const emailinput=document.getElementById("email");
    const messageinput=document.getElementById("message");
    nameinput.style="";
    emailinput.style="";
    messageinput.style="";
    let flag=false;
    if(nameinput.value.trim().length==0)
    {
        nameinput.style.border="red solid 2px";
        flag=true;
    }
    if(emailinput.value.trim().length==0)
    {
        emailinput.style.border="red solid 2px";
        flag=true;
    }
    if(messageinput.value.trim().length==0)
    {
        messageinput.style.border="red solid 2px";
        flag=true;
    }
    return !flag;
}
document.querySelector(".contact-form").addEventListener("submit",function(event){
    toCheck();
    if(!toCheck())
    {
        alert("Unable to send message");
    }
    
    event.preventDefault();
       
});
