'use strict';
const fragment = new DocumentFragment();
const btnEnviar = document.getElementById('btnSend');
const form = document.getElementById('form');


const formValid = {
    nombres: true,
    apellidos: true,
    mail: true,
    celPhone: true,
    politica: true,
}


btnEnviar.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validInputsForm(formValid)===-1){
        alert("Enviando Formulario");
    }else{
        alert("Campos invalidos");
    }
});
const validInputsForm = (objeto) =>{
    const values = Object.values(objeto);
    let response = values.findIndex
    (e=>e===false);
    return response;
}

form.addEventListener("change",(e)=>{
    const inputId = e.target.id;
    console.log(inputId);
    const valueInput = e.target.value;
    console.log(valueInput);
    const classInput = e.target.classList;
    console.log(classInput);
    const isValidClass = () =>{
        classInput.add("is-valid");
        classInput.remove("is-invalid");
    }
    const isInvalidClass = () =>{
        classInput.remove("is-valid");
        classInput.add("is-invalid");
    }
    switch(inputId){
        case "names":
const nombresRx =

      /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
      formValid.nombres = valueInput.match(nombresRx) ? true : false;
      (formValid.nombres) ? isValidClass() : isInvalidClass();
      console.log(Object.values(formValid));
            break;
          
        case"lastNames" :
const lastNamesR =  
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
      formValid.lastNames = valueInput.match(lastNamesR) ? true : false;
      (formValid.lastNames) ? isValidClass() : isInvalidClass();
            break;
        case "mail":
const mailD = 
        /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
            formValid.mail = valueInput.match(mailD) ? true : false;
            (formValid.mail) ? isValidClass() : isInvalidClass();
            break;
        case "celphone":
const telefonoRx = /^(\(?(\+57)\)?)?(\d{10})$/g;
                formValid.celphone = valueInput.match(telefonoRx) ? true : false;
                formValid.celphone ? isValidClass() : isInvalidClass();
                console.log(Object.values(formValid));
            break;
        case "politica":
const politica = document.getElementById('checkPolitica');
                  if(politica.checked){
                    formValid.politica =true;
                  }else{ 
                    formValid.politica = false;
                  }
                console.log(Object.values(formValid));
        break;
    }   
});
