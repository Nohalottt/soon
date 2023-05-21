let email=document.getElementByUd("email");
let dangerIcon=document.getElementByUd("dan");
let form=document.getElementByUd("form");
form.addEventListener("submit",(e)=>{
    if(email.validity.typeMismatch){
        event.preventDefault();
        dangerIcon.style.opacity=1;
        dangerText.style.opacity=1;

    }else{
        dangerIcon.style.opacity=0;
        dangerText.style.opacity=0;
    }
}

)

